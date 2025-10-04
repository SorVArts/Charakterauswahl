const characters = [
  { name: "Mario", tag: "Der Allrounder" },
  { name: "Luigi", tag: "Grüner Blitz" },
  { name: "Peach", tag: "Königliche Power" },
  { name: "Daisy", tag: "Blumiger Sprint" },
  { name: "Rosalina", tag: "Sternenglanz" },
  { name: "Yoshi", tag: "Turbo Dino" },
  { name: "Toad", tag: "Pilz-Rakete" },
  { name: "Toadette", tag: "Pilz-Prinzessin" },
  { name: "Bowser", tag: "Panzersprint" },
  { name: "Bowser Jr.", tag: "Chaos Kid" },
  { name: "Donkey Kong", tag: "Bananen-Boost" },
  { name: "Diddy Kong", tag: "Fass-Boost" },
  { name: "Wario", tag: "Goldgräber" },
  { name: "Waluigi", tag: "Schabernack" },
  { name: "Koopa", tag: "Panzer-Drifter" },
  { name: "Shy Guy", tag: "Masken-Mystery" },
  { name: "Baby Mario", tag: "Mini-Macht" },
  { name: "Baby Peach", tag: "Kindskopf-Kick" },
  { name: "Baby Luigi", tag: "Nano Nitro" },
  { name: "Metal Mario", tag: "Stahl-Speed" },
  { name: "Link", tag: "Hylianer Hit" },
  { name: "Isabelle", tag: "Tierische Turbo" },
  { name: "Inkling Girl", tag: "Farbenrausch" },
  { name: "Inkling Boy", tag: "Spritz-Slalom" }
];

const spinDisplay = document.querySelector("#spinDisplay");
const assignButton = document.querySelector("#assignButton");
const playerNameInput = document.querySelector("#playerName");
const assignmentList = document.querySelector("#assignmentList");
const assignmentTemplate = document.querySelector("#assignmentTemplate");
const feedback = document.querySelector("#feedback");
const remaining = document.querySelector("#remaining");
const rouletteCanvas = document.querySelector("#rouletteCanvas");
const wheelContext = rouletteCanvas?.getContext("2d");

const WHEEL_BASE_SIZE = 360;
const wheelColors = [
  "#ff6b6b",
  "#ffd93d",
  "#6ef2b4",
  "#4dabf7",
  "#b197fc",
  "#ffa94d",
  "#74c0fc",
  "#f783ac",
];

let rotation = 0;
let isSpinning = false;
let activeFrame = null;

let availableCharacters = [...characters];
const assignments = new Map();

function setupWheelCanvas() {
  if (!rouletteCanvas || !wheelContext) return;

  const devicePixelRatio = window.devicePixelRatio || 1;
  rouletteCanvas.width = WHEEL_BASE_SIZE * devicePixelRatio;
  rouletteCanvas.height = WHEEL_BASE_SIZE * devicePixelRatio;
  rouletteCanvas.style.width = "100%";
  rouletteCanvas.style.height = "100%";
  wheelContext.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  drawWheel();
}

function drawWheel(highlightedCharacter = null) {
  if (!rouletteCanvas || !wheelContext) return;

  const size = WHEEL_BASE_SIZE;
  const radius = size / 2 - 18;
  const center = size / 2;
  const innerRadius = 46;
  const totalSegments = characters.length;
  const anglePerSegment = (Math.PI * 2) / totalSegments;

  wheelContext.clearRect(0, 0, size, size);

  wheelContext.save();
  wheelContext.translate(center, center);
  wheelContext.rotate(rotation - Math.PI / 2);

  for (let i = 0; i < totalSegments; i++) {
    const character = characters[i];
    const startAngle = i * anglePerSegment;
    const endAngle = startAngle + anglePerSegment;
    const isAvailable = availableCharacters.includes(character);
    const isHighlighted = highlightedCharacter && character === highlightedCharacter;
    const baseColor = wheelColors[i % wheelColors.length];
    const fillColor = isAvailable ? baseColor : "rgba(80, 84, 128, 0.5)";

    wheelContext.beginPath();
    wheelContext.moveTo(0, 0);
    wheelContext.arc(0, 0, radius, startAngle, endAngle);
    wheelContext.closePath();
    wheelContext.fillStyle = fillColor;
    wheelContext.fill();

    if (isHighlighted) {
      wheelContext.save();
      wheelContext.clip();
      const glow = wheelContext.createRadialGradient(0, 0, radius * 0.2, 0, 0, radius);
      glow.addColorStop(0, "rgba(255, 255, 255, 0.35)");
      glow.addColorStop(1, "rgba(255, 255, 255, 0)");
      wheelContext.fillStyle = glow;
      wheelContext.fillRect(-radius, -radius, radius * 2, radius * 2);
      wheelContext.restore();
    }

    wheelContext.strokeStyle = "rgba(6, 9, 30, 0.7)";
    wheelContext.lineWidth = 2;
    wheelContext.stroke();

    wheelContext.save();
    wheelContext.rotate(startAngle + anglePerSegment / 2);
    wheelContext.translate(radius - 28, 0);
    wheelContext.rotate(Math.PI / 2);
    wheelContext.fillStyle = isAvailable ? "#f7f8ff" : "rgba(247, 248, 255, 0.35)";
    wheelContext.font = "600 13px 'Rubik', sans-serif";
    wheelContext.textAlign = "center";
    wheelContext.textBaseline = "middle";
    wheelContext.fillText(character.name, 0, 0);
    wheelContext.restore();
  }

  wheelContext.restore();

  wheelContext.save();
  wheelContext.translate(center, center);
  wheelContext.beginPath();
  wheelContext.arc(0, 0, innerRadius, 0, Math.PI * 2);
  wheelContext.fillStyle = "rgba(12, 15, 45, 0.92)";
  wheelContext.fill();
  wheelContext.lineWidth = 4;
  wheelContext.strokeStyle = "rgba(255, 255, 255, 0.18)";
  wheelContext.stroke();

  const centerGradient = wheelContext.createRadialGradient(0, 0, 4, 0, 0, innerRadius);
  centerGradient.addColorStop(0, "rgba(255, 255, 255, 0.55)");
  centerGradient.addColorStop(1, "rgba(255, 255, 255, 0)");
  wheelContext.fillStyle = centerGradient;
  wheelContext.fill();
  wheelContext.restore();
}

function normalizeAngle(angle) {
  const tau = Math.PI * 2;
  return ((angle % tau) + tau) % tau;
}

function targetRotationForCharacter(character) {
  const totalSegments = characters.length;
  const index = characters.indexOf(character);
  const anglePerSegment = (Math.PI * 2) / totalSegments;
  const segmentCenter = index * anglePerSegment + anglePerSegment / 2;
  const desired = Math.PI / 2 - segmentCenter;
  const current = normalizeAngle(rotation);
  let delta = desired - current;
  if (delta <= 0) {
    delta += Math.PI * 2;
  }
  const extraSpins = 3 + Math.floor(Math.random() * 2);
  return rotation + extraSpins * Math.PI * 2 + delta;
}

function animateRotation(targetRotation, duration = 4200) {
  return new Promise((resolve) => {
    const startRotation = rotation;
    const totalChange = targetRotation - startRotation;
    const startTime = performance.now();

    function frame(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(progress);
      rotation = startRotation + totalChange * eased;
      drawWheel();
      if (progress < 1) {
        activeFrame = requestAnimationFrame(frame);
      } else {
        activeFrame = null;
        rotation = normalizeAngle(rotation);
        drawWheel();
        resolve();
      }
    }

    if (activeFrame) {
      cancelAnimationFrame(activeFrame);
    }

    activeFrame = requestAnimationFrame(frame);
  });
}

async function spinWheel(finalCharacter) {
  if (!rouletteCanvas || !wheelContext) {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }

  isSpinning = true;
  spinDisplay.classList.add("is-spinning");
  const shuffleInterval = setInterval(() => {
    const preview = pickRandomCharacter();
    if (preview) {
      spinDisplay.textContent = preview.name;
    }
  }, 90);

  const target = targetRotationForCharacter(finalCharacter);
  try {
    await animateRotation(target);
  } finally {
    clearInterval(shuffleInterval);
  }

  drawWheel(finalCharacter);
  spinDisplay.classList.remove("is-spinning");
  spinDisplay.classList.add("is-final");
  spinDisplay.innerHTML = `<span class="display__name">${finalCharacter.name}</span><span class="display__tag">${finalCharacter.tag}</span>`;
  setTimeout(() => spinDisplay.classList.remove("is-final"), 1200);
  isSpinning = false;
}

function updateRemainingText() {
  if (availableCharacters.length === 0) {
    remaining.textContent = "Alle Charaktere wurden vergeben!";
    assignButton.disabled = true;
    playerNameInput.disabled = true;
  } else {
    remaining.textContent = `${availableCharacters.length} Charaktere sind noch im Item-Block.`;
    if (!isSpinning) {
      assignButton.disabled = false;
      playerNameInput.disabled = false;
    }
  }
}

function showFeedback(message, isSuccess = false) {
  feedback.textContent = message;
  feedback.classList.toggle("is-success", isSuccess);
}

function createAssignmentCard(playerName, character) {
  const element = assignmentTemplate.content.firstElementChild.cloneNode(true);
  element.querySelector(".assignment-card__player").textContent = playerName;
  element.querySelector(".assignment-card__character").textContent = character.name;
  element.querySelector(".assignment-card__tagline").textContent = `„${character.tag}“`;
  element.style.setProperty("--glow", randomGlow());
  return element;
}

function randomGlow() {
  const hues = [30, 45, 90, 160, 200, 260, 300];
  const hue = hues[Math.floor(Math.random() * hues.length)];
  return `hsla(${hue}, 90%, 65%, 0.35)`;
}

function pickRandomCharacter() {
  const index = Math.floor(Math.random() * availableCharacters.length);
  return availableCharacters[index];
}

function removeCharacter(target) {
  availableCharacters = availableCharacters.filter((character) => character !== target);
  drawWheel();
}

function easeOutQuad(t) {
  return t * (2 - t);
}

function addAssignment(playerName, character) {
  assignments.set(playerName.toLowerCase(), character.name);
  const card = createAssignmentCard(playerName, character);
  assignmentList.append(card);
}

async function handleAssignment() {
  if (isSpinning) {
    return;
  }

  const rawName = playerNameInput.value.trim();

  if (!rawName) {
    showFeedback("Bitte gib einen Spielernamen ein.");
    return;
  }

  if (assignments.has(rawName.toLowerCase())) {
    showFeedback("Dieser Spielername hat bereits einen Charakter erhalten.");
    return;
  }

  if (availableCharacters.length === 0) {
    showFeedback("Es sind keine Charaktere mehr übrig.");
    return;
  }

  const chosenCharacter = pickRandomCharacter();
  assignButton.disabled = true;
  playerNameInput.disabled = true;
  spinDisplay.textContent = "...";
  spinDisplay.classList.remove("is-final");

  showFeedback("Item-Block wird geöffnet...", true);

  await spinWheel(chosenCharacter);

  removeCharacter(chosenCharacter);
  addAssignment(rawName, chosenCharacter);
  updateRemainingText();
  showFeedback(`${rawName} erhält ${chosenCharacter.name}!`, true);
  playerNameInput.value = "";
  if (availableCharacters.length > 0) {
    playerNameInput.focus();
  }

  if (availableCharacters.length === 0) {
    spinDisplay.textContent = "✔";
    spinDisplay.classList.remove("is-final");
  }
}

assignButton.addEventListener("click", handleAssignment);
playerNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleAssignment();
  }
});

setupWheelCanvas();
window.addEventListener("resize", setupWheelCanvas);
updateRemainingText();
