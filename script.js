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
  { name: "Baby Daisy", tag: "Windel-Drift" },
  { name: "Metal Mario", tag: "Stahl-Speed" },
  { name: "King Boo", tag: "Spuk-Sprint" },
  { name: "Petey Piranha", tag: "Pflanzen-Power" },
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

let availableCharacters = [...characters];
const assignments = new Map();

function updateRemainingText() {
  if (availableCharacters.length === 0) {
    remaining.textContent = "Alle Charaktere wurden vergeben!";
  } else {
    remaining.textContent = `${availableCharacters.length} Charaktere sind noch im Item-Block.`;
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
}

function easeOutQuad(t) {
  return t * (2 - t);
}

function spinThroughCharacters(finalCharacter) {
  const totalSpins = 26;
  const baseDelay = 60;
  const maxAdditionalDelay = 150;

  spinDisplay.classList.add("is-spinning");
  assignButton.disabled = true;
  playerNameInput.disabled = true;

  for (let i = 0; i < totalSpins; i++) {
    const progress = i / (totalSpins - 1);
    const eased = easeOutQuad(progress);
    const delay = baseDelay * i + maxAdditionalDelay * eased * i * 0.35;

    setTimeout(() => {
      const current = i === totalSpins - 1 ? finalCharacter : pickRandomCharacter();
      updateSpinDisplay(current, i === totalSpins - 1);
    }, delay);
  }

  const totalDuration = baseDelay * totalSpins + maxAdditionalDelay * easeOutQuad(1) * totalSpins * 0.35;

  setTimeout(() => {
    spinDisplay.classList.remove("is-spinning");
    spinDisplay.classList.add("is-final");
    setTimeout(() => spinDisplay.classList.remove("is-final"), 1200);
    assignButton.disabled = false;
    playerNameInput.disabled = false;
  }, totalDuration + 80);

  return totalDuration;
}

function updateSpinDisplay(character, isFinal = false) {
  if (isFinal) {
    spinDisplay.innerHTML = `<span class="display__name">${character.name}</span><span class="display__tag">${character.tag}</span>`;
    spinDisplay.classList.add("is-final");
  } else {
    spinDisplay.textContent = character.name;
    spinDisplay.classList.remove("is-final");
  }
}

function addAssignment(playerName, character) {
  assignments.set(playerName.toLowerCase(), character.name);
  const card = createAssignmentCard(playerName, character);
  assignmentList.append(card);
}

function handleAssignment() {
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
  const animationDuration = spinThroughCharacters(chosenCharacter);

  showFeedback("Item-Block wird geöffnet...", true);

  setTimeout(() => {
    removeCharacter(chosenCharacter);
    addAssignment(rawName, chosenCharacter);
    updateRemainingText();
    showFeedback(`${rawName} erhält ${chosenCharacter.name}!`, true);
    playerNameInput.value = "";
    playerNameInput.focus();
  }, animationDuration + 120);
}

assignButton.addEventListener("click", handleAssignment);
playerNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleAssignment();
  }
});

updateRemainingText();
