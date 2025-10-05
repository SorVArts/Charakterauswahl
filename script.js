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
const soundToggle = document.querySelector("#soundToggle");
const soundToggleIcon = document.querySelector(".sound-toggle__icon");
const spinAudio = document.querySelector("#spinAudio");
const appRoot = document.querySelector(".app");
const rouletteSection = document.querySelector(".roulette");
const teamsSection = document.querySelector(".teams");
const assignmentsSection = document.querySelector(".assignments");
const startTeamsButton = document.querySelector("#startTeamsButton");
const drawTeamButton = document.querySelector("#drawTeamButton");
const downloadTeamsButton = document.querySelector("#downloadTeamsButton");
const teamReveal = document.querySelector("#teamReveal");
const teamStatus = document.querySelector("#teamStatus");
const teamList = document.querySelector("#teamList");

const TEAM_REVEAL_DELAY = 2000;

let availableCharacters = [...characters];
const assignments = new Map();
let isMuted = false;
const playerAssignments = [];
let teamQueue = [];
let revealedTeams = [];
let teamPhaseInitialized = false;
let teamRevealHighlightTimeout;
let pendingTeamRevealTimeout;

function updateAssignmentListLayout() {
  const itemCount = assignmentList.childElementCount;
  const visibleItems = Math.max(1, Math.min(itemCount, 5));
  assignmentList.style.setProperty("--visible-items", visibleItems);
}

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
  const totalDuration = 3500;

  spinDisplay.classList.add("is-spinning");
  assignButton.disabled = true;
  playerNameInput.disabled = true;

  for (let i = 0; i < totalSpins; i++) {
    const progress = i / (totalSpins - 1);
    const eased = easeOutQuad(progress);
    const delay = eased * totalDuration;

    setTimeout(() => {
      const current = i === totalSpins - 1 ? finalCharacter : pickRandomCharacter();
      updateSpinDisplay(current, i === totalSpins - 1);
    }, delay);
  }

  setTimeout(() => {
    spinDisplay.classList.remove("is-spinning");
    spinDisplay.classList.add("is-final");
    setTimeout(() => spinDisplay.classList.remove("is-final"), 1200);
    assignButton.disabled = false;
    playerNameInput.disabled = false;
  }, totalDuration);

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
  playerAssignments.push({
    playerName,
    characterName: character.name,
    characterIcon: character.icon,
  });
  updateAssignmentListLayout();
  updateTeamStartAvailability();
  requestAnimationFrame(() => {
    assignmentList.scrollTo({ top: assignmentList.scrollHeight, behavior: "smooth" });
  });
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

  if (spinAudio) {
    spinAudio.currentTime = 0;
    const playPromise = spinAudio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }

  showFeedback("Item-Block wird geöffnet...", true);

  setTimeout(() => {
    removeCharacter(chosenCharacter);
    addAssignment(rawName, chosenCharacter);
    updateRemainingText();
    showFeedback(`${rawName} erhält ${chosenCharacter.name}!`, true);
    playerNameInput.value = "";
    playerNameInput.focus();
    if (availableCharacters.length === 0) {
      beginTeamPhase();
    }
  }, animationDuration + 120);
}

assignButton.addEventListener("click", handleAssignment);
playerNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleAssignment();
  }
});

function updateSoundToggle() {
  if (!soundToggle || !soundToggleIcon || !spinAudio) {
    return;
  }

  soundToggle.classList.toggle("is-muted", isMuted);
  soundToggle.setAttribute("aria-pressed", String(isMuted));
  const label = isMuted ? "Sound aktivieren" : "Sound deaktivieren";
  soundToggle.setAttribute("aria-label", label);
  soundToggle.setAttribute("title", label);
  soundToggleIcon.textContent = isMuted ? "🔇" : "🔊";
  spinAudio.muted = isMuted;
}

if (soundToggle) {
  soundToggle.addEventListener("click", () => {
    isMuted = !isMuted;
    updateSoundToggle();
  });
}

if (startTeamsButton) {
  startTeamsButton.addEventListener("click", beginTeamPhase);
}

updateSoundToggle();

updateRemainingText();
updateAssignmentListLayout();
updateTeamStartAvailability();

function beginTeamPhase() {
  if (teamPhaseInitialized) {
    return;
  }

  teamPhaseInitialized = true;
  prepareTeams();

  if (appRoot) {
    appRoot.classList.add("app--teams");
  }

  if (rouletteSection) {
    rouletteSection.classList.add("is-hidden");
  }

  if (teamsSection) {
    teamsSection.classList.remove("is-hidden");
  }

  if (assignmentsSection) {
    assignmentsSection.classList.add("is-hidden");
  }

  if (startTeamsButton) {
    startTeamsButton.classList.add("is-hidden");
    startTeamsButton.disabled = true;
  }

  if (teamList) {
    teamList.innerHTML = "";
  }

  if (teamReveal) {
    teamReveal.classList.add("is-empty");
    teamReveal.classList.remove("team-reveal--active");
    teamReveal.classList.remove("team-reveal--pending");
    teamReveal.textContent =
      teamQueue.length > 0
        ? "Bereit? Drücke auf \"Nächstes Team ziehen\"!"
        : "Es konnten keine vollständigen Teams gebildet werden.";
  }

  if (teamStatus) {
    if (playerAssignments.length < 2) {
      teamStatus.textContent =
        "Für die Team-Auslosung werden mindestens zwei Spieler benötigt.";
    } else {
      const remainingTeams = teamQueue.length;
      const teamWord = remainingTeams === 1 ? "Team" : "Teams";
      const verb = remainingTeams === 1 ? "wartet" : "warten";
      teamStatus.textContent = `Es ${verb} ${remainingTeams} ${teamWord} auf ihre Enthüllung!`;
    }
  }

  if (drawTeamButton) {
    drawTeamButton.disabled = teamQueue.length === 0;
    drawTeamButton.addEventListener("click", revealNextTeam);
  }

  if (downloadTeamsButton) {
    downloadTeamsButton.addEventListener("click", downloadTeams);
  }
}

function updateTeamStartAvailability() {
  if (!startTeamsButton || teamPhaseInitialized) {
    return;
  }

  if (playerAssignments.length >= 2) {
    startTeamsButton.classList.remove("is-hidden");
    startTeamsButton.disabled = false;
  } else {
    startTeamsButton.classList.add("is-hidden");
  }
}

function prepareTeams() {
  teamQueue = [];
  revealedTeams = [];

  if (playerAssignments.length === 0) {
    return;
  }

  const shuffled = [...playerAssignments];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  for (let i = 0; i < shuffled.length; i += 2) {
    const team = shuffled.slice(i, i + 2);
    if (team.length === 2) {
      teamQueue.push(team);
    } else if (team.length === 1 && playerAssignments.length > 1) {
      teamQueue.push(team);
    }
  }
}

function revealNextTeam() {
  if (teamQueue.length === 0) {
    finalizeTeams();
    return;
  }

  const teamIndex = revealedTeams.length + 1;
  const team = teamQueue.shift();

  if (teamReveal) {
    teamReveal.classList.remove("team-reveal--active");
    teamReveal.classList.remove("is-empty");
    teamReveal.classList.add("team-reveal--pending");
    teamReveal.innerHTML = `
      <div class="team-reveal__countdown">
        <div class="team-reveal__halo"></div>
        <div class="team-reveal__spinner"></div>
        <span class="team-reveal__text">Team ${teamIndex} wird enthüllt...</span>
      </div>
    `;
  }

  if (drawTeamButton) {
    drawTeamButton.disabled = true;
  }

  if (teamStatus) {
    teamStatus.textContent = "Spannung! Das nächste Team wird vorbereitet...";
  }

  if (pendingTeamRevealTimeout) {
    clearTimeout(pendingTeamRevealTimeout);
  }

  pendingTeamRevealTimeout = setTimeout(() => {
    pendingTeamRevealTimeout = undefined;

    revealedTeams.push(team);

    if (teamReveal) {
      teamReveal.classList.remove("team-reveal--pending");
    }

    renderCurrentTeam(team, revealedTeams.length);
    appendTeamToList(team, revealedTeams.length);

    if (drawTeamButton) {
      drawTeamButton.disabled = teamQueue.length === 0;
    }

    if (teamStatus) {
      if (teamQueue.length === 0) {
        teamStatus.textContent = "Das war das letzte Team!";
      } else {
        const teamWord = teamQueue.length === 1 ? "Team" : "Teams";
        const verb = teamQueue.length === 1 ? "wartet" : "warten";
        teamStatus.textContent = `Noch ${teamQueue.length} ${teamWord} ${verb} auf ihre Enthüllung.`;
      }
    }

    if (teamQueue.length === 0) {
      finalizeTeams();
    }
  }, TEAM_REVEAL_DELAY);
}

function renderCurrentTeam(team, index) {
  if (!teamReveal) {
    return;
  }

  teamReveal.classList.remove("is-empty");
  teamReveal.classList.remove("team-reveal--pending");
  teamReveal.innerHTML = "";

  const card = document.createElement("div");
  card.className = "team-card team-card--enter";

  const title = document.createElement("h3");
  title.className = "team-card__title";
  title.textContent = team.length === 1 ? `Team ${index} – Solo` : `Team ${index}`;
  card.append(title);

  const members = document.createElement("div");
  members.className = "team-card__members";

  team.forEach((member) => {
    const memberElement = document.createElement("div");
    memberElement.className = "team-member";

    const icon = document.createElement("img");
    icon.className = "team-member__icon";
    icon.src = member.characterIcon;
    icon.alt = member.characterName;

    const details = document.createElement("div");
    details.className = "team-member__details";

    const player = document.createElement("span");
    player.className = "team-member__player";
    player.textContent = member.playerName;

    const character = document.createElement("span");
    character.className = "team-member__character";
    character.textContent = member.characterName;

    details.append(player, character);
    memberElement.append(icon, details);
    members.append(memberElement);
  });

  if (team.length === 1) {
    const note = document.createElement("p");
    note.className = "team-member__character";
    note.textContent = "Dieser Fahrer erhält ein Freilos.";
    members.append(note);
  }

  card.append(members);
  teamReveal.append(card);

  teamReveal.classList.add("team-reveal--active");
  if (teamRevealHighlightTimeout) {
    clearTimeout(teamRevealHighlightTimeout);
  }

  teamRevealHighlightTimeout = setTimeout(() => {
    teamReveal.classList.remove("team-reveal--active");
    teamRevealHighlightTimeout = undefined;
  }, 520);
}

function appendTeamToList(team, index) {
  if (!teamList) {
    return;
  }

  const item = document.createElement("li");
  item.className = "team-list__item";

  const heading = document.createElement("h3");
  heading.textContent = team.length === 1 ? `Team ${index} – Solo` : `Team ${index}`;
  item.append(heading);

  const memberList = document.createElement("ul");

  team.forEach((member) => {
    const memberItem = document.createElement("li");

    const player = document.createElement("span");
    player.textContent = member.playerName;

    const character = document.createElement("span");
    character.className = "team-list__character";
    character.textContent = member.characterName;

    memberItem.append(player, character);
    memberList.append(memberItem);
  });

  if (team.length === 1) {
    const soloInfo = document.createElement("li");
    soloInfo.className = "team-list__character";
    soloInfo.textContent = "Freilos";
    memberList.append(soloInfo);
  }

  item.append(memberList);
  teamList.append(item);
}

function finalizeTeams() {
  if (drawTeamButton) {
    drawTeamButton.disabled = true;
  }

  if (pendingTeamRevealTimeout) {
    clearTimeout(pendingTeamRevealTimeout);
    pendingTeamRevealTimeout = undefined;
  }

  if (teamRevealHighlightTimeout) {
    clearTimeout(teamRevealHighlightTimeout);
    teamRevealHighlightTimeout = undefined;
  }

  if (teamReveal) {
    teamReveal.classList.remove("team-reveal--active");
    teamReveal.classList.remove("team-reveal--pending");
  }

  if (downloadTeamsButton) {
    downloadTeamsButton.classList.remove("is-hidden");
    downloadTeamsButton.disabled = false;
  }

  if (teamStatus) {
    teamStatus.textContent =
      revealedTeams.length > 0
        ? "Alle Teams wurden ausgelost. Viel Spaß beim Rennen!"
        : "Es konnten keine Teams gebildet werden.";
  }
}

function downloadTeams() {
  if (revealedTeams.length === 0) {
    return;
  }

  const rows = [["Team", "Spieler", "Charakter"]];

  revealedTeams.forEach((team, index) => {
    const teamName = `Team ${index + 1}`;
    team.forEach((member) => {
      rows.push([teamName, member.playerName, member.characterName]);
    });
  });

  const csvContent = rows
    .map((row) => row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(";"))
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "mariokart-teams.csv";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
