const characters = [
  { name: "Mii", icon: "Charakter-Icons/Mii_MK8.png" },
  { name: "Shy Guy (Black)", icon: "Charakter-Icons/MK8_Black_Shy_Guy_Icon.png" },
  { name: "Yoshi (Black)", icon: "Charakter-Icons/MK8_Black_Yoshi_Icon.png" },
  { name: "Shy Guy (Blue)", icon: "Charakter-Icons/MK8_Blue_Shy_Guy_Icon.png" },
  { name: "Yoshi (Blue)", icon: "Charakter-Icons/MK8_Blue_Yoshi_Icon.png" },
  { name: "Bowser Jr.", icon: "Charakter-Icons/MK8_Bowser_Jr_Icon.png" },
  { name: "Shy Guy (Green)", icon: "Charakter-Icons/MK8_Green_Shy_Guy_Icon.png" },
  { name: "Shy Guy (Light-Blue)", icon: "Charakter-Icons/MK8_Light-Blue_Shy_Guy_Icon.png" },
  { name: "Yoshi (Light-Blue)", icon: "Charakter-Icons/MK8_Light-Blue_Yoshi_Icon.png" },
  { name: "Shy Guy (Orange)", icon: "Charakter-Icons/MK8_Orange_Shy_Guy_Icon.png" },
  { name: "Yoshi (Orange)", icon: "Charakter-Icons/MK8_Orange_Yoshi_Icon.png" },
  { name: "Shy Guy (Pink)", icon: "Charakter-Icons/MK8_Pink_Shy_Guy_Icon.png" },
  { name: "Yoshi (Pink)", icon: "Charakter-Icons/MK8_Pink_Yoshi_Icon.png" },
  { name: "Yoshi (Red)", icon: "Charakter-Icons/MK8_Red_Yoshi_Icon.png" },
  { name: "Shy Guy (White)", icon: "Charakter-Icons/MK8_White_Shy_Guy_Icon.png" },
  { name: "Yoshi (White)", icon: "Charakter-Icons/MK8_White_Yoshi_Icon.png" },
  { name: "Shy Guy (Yellow)", icon: "Charakter-Icons/MK8_Yellow_Shy_Guy_Icon.png" },
  { name: "Yoshi (Yellow)", icon: "Charakter-Icons/MK8_Yellow_Yoshi_Icon.png" },
  { name: "Birdo (Black)", icon: "Charakter-Icons/MK8D_Birdo_Black_Icon.png" },
  { name: "Birdo (Blue)", icon: "Charakter-Icons/MK8D_Birdo_Blue_Icon.png" },
  { name: "Birdo (Green)", icon: "Charakter-Icons/MK8D_Birdo_Green_Icon.png" },
  { name: "Birdo", icon: "Charakter-Icons/MK8D_Birdo_Icon.png" },
  { name: "Birdo (Light-Blue)", icon: "Charakter-Icons/MK8D_Birdo_Light-Blue_Icon.png" },
  { name: "Birdo (Orange)", icon: "Charakter-Icons/MK8D_Birdo_Orange_Icon.png" },
  { name: "Birdo (Red)", icon: "Charakter-Icons/MK8D_Birdo_Red_Icon.png" },
  { name: "Birdo (White)", icon: "Charakter-Icons/MK8D_Birdo_White_Icon.png" },
  { name: "Birdo (Yellow)", icon: "Charakter-Icons/MK8D_Birdo_Yellow_Icon.png" },
  { name: "Link (BotW)", icon: "Charakter-Icons/MK8D_BotW_Link_Icon.png" },
  { name: "Inkling (Cyan)", icon: "Charakter-Icons/MK8D_Cyan_Inkling_Icon.png" },
  { name: "Inkling (Green)", icon: "Charakter-Icons/MK8D_Green_Inkling_Icon.png" },
  { name: "Inkling (Pink)", icon: "Charakter-Icons/MK8D_Pink_Inkling_Icon.png" },
  { name: "Inkling (Purple)", icon: "Charakter-Icons/MK8D_Purple_Inkling_Icon.png" },
  { name: "Baby Daisy", icon: "Charakter-Icons/MK8DX_Baby_Daisy_Icon.png" },
  { name: "Baby Luigi", icon: "Charakter-Icons/MK8DX_Baby_Luigi_Icon.png" },
  { name: "Baby Mario", icon: "Charakter-Icons/MK8DX_Baby_Mario_Icon.png" },
  { name: "Baby Peach", icon: "Charakter-Icons/MK8DX_Baby_Peach_Icon.png" },
  { name: "Baby Rosalina", icon: "Charakter-Icons/MK8DX_Baby_Rosalina_Icon.png" },
  { name: "Bowser", icon: "Charakter-Icons/MK8DX_Bowser_Icon.png" },
  { name: "Cat Peach", icon: "Charakter-Icons/MK8DX_Cat_Peach_Icon.png" },
  { name: "Daisy", icon: "Charakter-Icons/MK8DX_Daisy_Icon.png" },
  { name: "Diddy Kong", icon: "Charakter-Icons/MK8DX_Diddy_Kong_Icon.png" },
  { name: "Donkey Kong", icon: "Charakter-Icons/MK8DX_DK_Icon.png" },
  { name: "Dry Bones", icon: "Charakter-Icons/MK8DX_Dry_Bones_Icon.png" },
  { name: "Dry Bowser", icon: "Charakter-Icons/MK8DX_Dry_Bowser_Icon.png" },
  { name: "Inkling Girl", icon: "Charakter-Icons/MK8DX_Female_Inkling_Icon.png" },
  { name: "Villager (Female)", icon: "Charakter-Icons/MK8DX_Female_Villager_Icon.png" },
  { name: "Funky Kong", icon: "Charakter-Icons/MK8DX_Funky_Kong_Icon.png" },
  { name: "Gold Mario", icon: "Charakter-Icons/MK8DX_Gold_Mario_Icon.png" },
  { name: "Iggy", icon: "Charakter-Icons/MK8DX_Iggy_Icon.png" },
  { name: "Isabelle", icon: "Charakter-Icons/MK8DX_Isabelle_Icon.png" },
  { name: "Kamek", icon: "Charakter-Icons/MK8DX_Kamek_Icon.png" },
  { name: "King Boo", icon: "Charakter-Icons/MK8DX_King_Boo_Icon.png" },
  { name: "Koopa Troopa", icon: "Charakter-Icons/MK8DX_Koopa_Troopa_Icon.png" },
  { name: "Lakitu", icon: "Charakter-Icons/MK8DX_Lakitu_Icon.png" },
  { name: "Larry", icon: "Charakter-Icons/MK8DX_Larry_Icon.png" },
  { name: "Lemmy", icon: "Charakter-Icons/MK8DX_Lemmy_Icon.png" },
  { name: "Link", icon: "Charakter-Icons/MK8DX_Link_Icon.png" },
  { name: "Ludwig", icon: "Charakter-Icons/MK8DX_Ludwig_Icon.png" },
  { name: "Luigi", icon: "Charakter-Icons/MK8DX_Luigi_Icon.png" },
  { name: "Inkling Boy", icon: "Charakter-Icons/MK8DX_Male_Inkling_Icon.png" },
  { name: "Villager (Male)", icon: "Charakter-Icons/MK8DX_Male_Villager_Icon.png" },
  { name: "Mario", icon: "Charakter-Icons/MK8DX_Mario_Icon.png" },
  { name: "Metal Mario", icon: "Charakter-Icons/MK8DX_Metal_Mario_Icon.png" },
  { name: "Morton", icon: "Charakter-Icons/MK8DX_Morton_Icon.png" },
  { name: "Pauline", icon: "Charakter-Icons/MK8DX_Pauline_Icon.png" },
  { name: "Peach", icon: "Charakter-Icons/MK8DX_Peach_Icon.png" },
  { name: "Peachette", icon: "Charakter-Icons/MK8DX_Peachette_Icon.png" },
  { name: "Petey Piranha", icon: "Charakter-Icons/MK8DX_Petey_Piranha_Icon.png" },
  { name: "Pink Gold Peach", icon: "Charakter-Icons/MK8DX_Pink_Gold_Peach_Icon.png" },
  { name: "Rosalina", icon: "Charakter-Icons/MK8DX_Rosalina_Icon.png" },
  { name: "Roy", icon: "Charakter-Icons/MK8DX_Roy_Icon.png" },
  { name: "Shy Guy", icon: "Charakter-Icons/MK8DX_Shy_Guy_Icon.png" },
  { name: "Tanooki Mario", icon: "Charakter-Icons/MK8DX_Tanooki_Mario_Icon.png" },
  { name: "Toad", icon: "Charakter-Icons/MK8DX_Toad_Icon.png" },
  { name: "Toadette", icon: "Charakter-Icons/MK8DX_Toadette_Icon.png" },
  { name: "Waluigi", icon: "Charakter-Icons/MK8DX_Waluigi_Icon.png" },
  { name: "Wario", icon: "Charakter-Icons/MK8DX_Wario_Icon.png" },
  { name: "Wendy", icon: "Charakter-Icons/MK8DX_Wendy_Icon.png" },
  { name: "Wiggler", icon: "Charakter-Icons/MK8DX_Wiggler_Icon.png" },
  { name: "Yoshi", icon: "Charakter-Icons/MK8DX_Yoshi_Icon.png" },
];

const spinDisplay = document.querySelector("#spinDisplay");
const assignButton = document.querySelector("#assignButton");
const playerNameInput = document.querySelector("#playerName");
const assignmentList = document.querySelector("#assignmentList");
const assignmentTemplate = document.querySelector("#assignmentTemplate");
const feedback = document.querySelector("#feedback");
const remaining = document.querySelector("#remaining");
const characterGrid = document.querySelector("#characterGrid");

let availableCharacters = [...characters];
const assignments = new Map();

function normalizeKey(value) {
  return value.toLowerCase().trim();
}

function showFeedback(message, isSuccess = false) {
  feedback.textContent = message;
  feedback.classList.toggle("is-success", isSuccess);
}

function updateRemainingText() {
  if (availableCharacters.length === 0) {
    remaining.textContent = "Alle Charaktere wurden vergeben!";
    assignButton.disabled = true;
    playerNameInput.disabled = true;
  } else {
    remaining.textContent = `${availableCharacters.length} Charaktere sind noch verfügbar.`;
    assignButton.disabled = false;
    playerNameInput.disabled = false;
  }
}

function createCharacterTile(character) {
  const element = document.createElement("li");
  element.className = "character-grid__item";
  element.dataset.character = normalizeKey(character.name);
  element.innerHTML = `
    <div class="character-tile">
      <span class="character-tile__name">${character.name}</span>
      <img src="${character.icon}" alt="${character.name}" class="character-tile__icon" loading="lazy">
    </div>
  `;
  return element;
}

function renderCharacterGrid() {
  const fragment = document.createDocumentFragment();
  characters.forEach((character) => {
    fragment.append(createCharacterTile(character));
  });
  characterGrid.append(fragment);
}

function markCharacterAsAssigned(character) {
  const tile = characterGrid.querySelector(
    `[data-character="${normalizeKey(character.name)}"]`
  );
  if (tile) {
    tile.classList.add("is-assigned");
  }
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

function updatePreview(character) {
  if (!character) {
    spinDisplay.innerHTML = '<span class="preview__placeholder">?</span>';
    return;
  }

  spinDisplay.innerHTML = `
    <span class="preview__name">${character.name}</span>
    <img src="${character.icon}" alt="${character.name}" class="preview__icon">
  `;
}

function addAssignment(playerName, character) {
  assignments.set(normalizeKey(playerName), character.name);
  const card = createAssignmentCard(playerName, character);
  assignmentList.append(card);
}

function resetForm() {
  playerNameInput.value = "";
  playerNameInput.focus();
}

function handleAssignment() {
  const rawName = playerNameInput.value.trim();

  if (!rawName) {
    showFeedback("Bitte gib einen Spielernamen ein.");
    return;
  }

  const key = normalizeKey(rawName);
  if (assignments.has(key)) {
    showFeedback("Dieser Spielername hat bereits einen Charakter erhalten.");
    return;
  }

  if (availableCharacters.length === 0) {
    showFeedback("Es sind keine Charaktere mehr übrig.");
    return;
  }

  const chosenCharacter = pickRandomCharacter();
  showFeedback(`${rawName} erhält ${chosenCharacter.name}!`, true);
  updatePreview(chosenCharacter);
  removeCharacter(chosenCharacter);
  markCharacterAsAssigned(chosenCharacter);
  addAssignment(rawName, chosenCharacter);
  updateRemainingText();
  resetForm();
}

assignButton.addEventListener("click", handleAssignment);
playerNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleAssignment();
  }
});

renderCharacterGrid();
updatePreview();
updateRemainingText();
