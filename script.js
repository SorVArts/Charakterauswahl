function iconPath(fileName) {
  return `Charakter-Icons/${fileName}`;
}

const characters = [
  { name: "Mario", icon: iconPath("MK8DX_Mario_Icon.png") },
  { name: "Luigi", icon: iconPath("MK8DX_Luigi_Icon.png") },
  { name: "Peach", icon: iconPath("MK8DX_Peach_Icon.png") },
  { name: "Daisy", icon: iconPath("MK8DX_Daisy_Icon.png") },
  { name: "Rosalina", icon: iconPath("MK8DX_Rosalina_Icon.png") },
  { name: "Yoshi", icon: iconPath("MK8DX_Yoshi_Icon.png") },
  { name: "Yoshi (Schwarz)", icon: iconPath("MK8_Black_Yoshi_Icon.png") },
  { name: "Yoshi (Blau)", icon: iconPath("MK8_Blue_Yoshi_Icon.png") },
  { name: "Yoshi (Hellblau)", icon: iconPath("MK8_Light-Blue_Yoshi_Icon.png") },
  { name: "Yoshi (Orange)", icon: iconPath("MK8_Orange_Yoshi_Icon.png") },
  { name: "Yoshi (Rosa)", icon: iconPath("MK8_Pink_Yoshi_Icon.png") },
  { name: "Yoshi (Rot)", icon: iconPath("MK8_Red_Yoshi_Icon.png") },
  { name: "Yoshi (Weiß)", icon: iconPath("MK8_White_Yoshi_Icon.png") },
  { name: "Yoshi (Gelb)", icon: iconPath("MK8_Yellow_Yoshi_Icon.png") },
  { name: "Toad", icon: iconPath("MK8DX_Toad_Icon.png") },
  { name: "Toadette", icon: iconPath("MK8DX_Toadette_Icon.png") },
  { name: "Bowser", icon: iconPath("MK8DX_Bowser_Icon.png") },
  { name: "Bowser Jr.", icon: iconPath("MK8_Bowser_Jr_Icon.png") },
  { name: "Donkey Kong", icon: iconPath("MK8DX_DK_Icon.png") },
  { name: "Diddy Kong", icon: iconPath("MK8DX_Diddy_Kong_Icon.png") },
  { name: "Funky Kong", icon: iconPath("MK8DX_Funky_Kong_Icon.png") },
  { name: "Wario", icon: iconPath("MK8DX_Wario_Icon.png") },
  { name: "Waluigi", icon: iconPath("MK8DX_Waluigi_Icon.png") },
  { name: "Koopa Troopa", icon: iconPath("MK8DX_Koopa_Troopa_Icon.png") },
  { name: "Lakitu", icon: iconPath("MK8DX_Lakitu_Icon.png") },
  { name: "Shy Guy", icon: iconPath("MK8DX_Shy_Guy_Icon.png") },
  { name: "Shy Guy (Schwarz)", icon: iconPath("MK8_Black_Shy_Guy_Icon.png") },
  { name: "Shy Guy (Blau)", icon: iconPath("MK8_Blue_Shy_Guy_Icon.png") },
  { name: "Shy Guy (Grün)", icon: iconPath("MK8_Green_Shy_Guy_Icon.png") },
  { name: "Shy Guy (Hellblau)", icon: iconPath("MK8_Light-Blue_Shy_Guy_Icon.png") },
  { name: "Shy Guy (Orange)", icon: iconPath("MK8_Orange_Shy_Guy_Icon.png") },
  { name: "Shy Guy (Rosa)", icon: iconPath("MK8_Pink_Shy_Guy_Icon.png") },
  { name: "Shy Guy (Weiß)", icon: iconPath("MK8_White_Shy_Guy_Icon.png") },
  { name: "Shy Guy (Gelb)", icon: iconPath("MK8_Yellow_Shy_Guy_Icon.png") },
  { name: "Baby Mario", icon: iconPath("MK8DX_Baby_Mario_Icon.png") },
  { name: "Baby Luigi", icon: iconPath("MK8DX_Baby_Luigi_Icon.png") },
  { name: "Baby Peach", icon: iconPath("MK8DX_Baby_Peach_Icon.png") },
  { name: "Baby Daisy", icon: iconPath("MK8DX_Baby_Daisy_Icon.png") },
  { name: "Baby Rosalina", icon: iconPath("MK8DX_Baby_Rosalina_Icon.png") },
  { name: "Metal Mario", icon: iconPath("MK8DX_Metal_Mario_Icon.png") },
  { name: "Gold Mario", icon: iconPath("MK8DX_Gold_Mario_Icon.png") },
  { name: "Pink Gold Peach", icon: iconPath("MK8DX_Pink_Gold_Peach_Icon.png") },
  { name: "Cat Peach", icon: iconPath("MK8DX_Cat_Peach_Icon.png") },
  { name: "Tanooki Mario", icon: iconPath("MK8DX_Tanooki_Mario_Icon.png") },
  { name: "Dry Bones", icon: iconPath("MK8DX_Dry_Bones_Icon.png") },
  { name: "Dry Bowser", icon: iconPath("MK8DX_Dry_Bowser_Icon.png") },
  { name: "King Boo", icon: iconPath("MK8DX_King_Boo_Icon.png") },
  { name: "Kamek", icon: iconPath("MK8DX_Kamek_Icon.png") },
  { name: "Pauline", icon: iconPath("MK8DX_Pauline_Icon.png") },
  { name: "Peachette", icon: iconPath("MK8DX_Peachette_Icon.png") },
  { name: "Petey Piranha", icon: iconPath("MK8DX_Petey_Piranha_Icon.png") },
  { name: "Wiggler", icon: iconPath("MK8DX_Wiggler_Icon.png") },
  { name: "Birdo", icon: iconPath("MK8D_Birdo_Icon.png") },
  { name: "Birdo (Schwarz)", icon: iconPath("MK8D_Birdo_Black_Icon.png") },
  { name: "Birdo (Blau)", icon: iconPath("MK8D_Birdo_Blue_Icon.png") },
  { name: "Birdo (Grün)", icon: iconPath("MK8D_Birdo_Green_Icon.png") },
  { name: "Birdo (Hellblau)", icon: iconPath("MK8D_Birdo_Light-Blue_Icon.png") },
  { name: "Birdo (Orange)", icon: iconPath("MK8D_Birdo_Orange_Icon.png") },
  { name: "Birdo (Rot)", icon: iconPath("MK8D_Birdo_Red_Icon.png") },
  { name: "Birdo (Weiß)", icon: iconPath("MK8D_Birdo_White_Icon.png") },
  { name: "Birdo (Gelb)", icon: iconPath("MK8D_Birdo_Yellow_Icon.png") },
  { name: "Isabelle", icon: iconPath("MK8DX_Isabelle_Icon.png") },
  { name: "Bewohnerin", icon: iconPath("MK8DX_Female_Villager_Icon.png") },
  { name: "Bewohner", icon: iconPath("MK8DX_Male_Villager_Icon.png") },
  { name: "Inkling (Mädchen)", icon: iconPath("MK8DX_Female_Inkling_Icon.png") },
  { name: "Inkling (Junge)", icon: iconPath("MK8DX_Male_Inkling_Icon.png") },
  { name: "Inkling (Pink)", icon: iconPath("MK8D_Pink_Inkling_Icon.png") },
  { name: "Inkling (Lila)", icon: iconPath("MK8D_Purple_Inkling_Icon.png") },
  { name: "Inkling (Grün)", icon: iconPath("MK8D_Green_Inkling_Icon.png") },
  { name: "Inkling (Türkis)", icon: iconPath("MK8D_Cyan_Inkling_Icon.png") },
  { name: "Link", icon: iconPath("MK8DX_Link_Icon.png") },
  { name: "Link (BotW)", icon: iconPath("MK8D_BotW_Link_Icon.png") },
  { name: "Iggy", icon: iconPath("MK8DX_Iggy_Icon.png") },
  { name: "Larry", icon: iconPath("MK8DX_Larry_Icon.png") },
  { name: "Lemmy", icon: iconPath("MK8DX_Lemmy_Icon.png") },
  { name: "Ludwig", icon: iconPath("MK8DX_Ludwig_Icon.png") },
  { name: "Morton", icon: iconPath("MK8DX_Morton_Icon.png") },
  { name: "Roy", icon: iconPath("MK8DX_Roy_Icon.png") },
  { name: "Wendy", icon: iconPath("MK8DX_Wendy_Icon.png") },
  { name: "Mii", icon: iconPath("Mii_MK8.png") }
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
  element.querySelector(".assignment-card__name").textContent = character.name;
  const icon = element.querySelector(".assignment-card__icon");
  icon.src = character.icon;
  icon.alt = character.name;
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
  spinDisplay.innerHTML = `
    <img src="${character.icon}" alt="${character.name}" class="display__icon" />
    <span class="display__name">${character.name}</span>
  `;
  spinDisplay.classList.toggle("is-final", isFinal);
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
