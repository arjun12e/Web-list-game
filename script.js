const games = [
  {
    name: "A Plague Tale Requiem",
    size: 25.4,
    img: "image/A Plague Tale Requiem.jpg",
  },
  {
    name: "Alan Wake 2 Deluxe",
    size: 67.6,
    img: "image/Alan Wake 2 Deluxe Edition.jpg",
  },
  {
    name: "American Theft 80's",
    size: 4.3,
    img: "image/American Theft 80's.jpg",
  },
  {
    name: "As Dusk Falls",
    size: 15,
    img: "image/As Dusk Falls.jpg",
  },
  {
    name: "Assassin's Creed Black Flag",
    size: 16.9,
    img: "image/Assasin's Creed Black Flag.jpg",
  },
  {
    name: "Assassin's Brother Hood",
    size: 6.4,
    img: "image/Assasin's Creed Brother Hood.jpg",
  },
  {
    name: "Assasin's Creed Odyssey",
    size: 16.9,
    img: "image/Assasin's Creed Odyssey.jpg",
  },
  {
    name: "Assasin's Creed Origin's",
    size: 37,
    img: "image/Assasin's Creed Origin's.jpg",
  },
  {
    name: "Assasin's Creed Rogue",
    size: 3.92,
    img: "image/Assasin's Creed Rogue.jpg",
  },
  {
    name: "Assasin's Creed Syndicate",
    size: 19.2,
    img: "image/Assasin's Creed Syndicate.jpg",
  },
  {
    name: "Assasin's Creed Unity",
    size: 31.4,
    img: "image/Assasin's Creed Rogue.jpg",
  },
  {
    name: "Assasin's Creed Valhalla",
    size: 45.9,
    img: "image/Assasin's Creed Valhalla.jpg",
  },
  {
    name: "Atlas Fallen",
    size: 19.8,
    img: "image/Atlas Fallen.jpg",
  },
  {
    name: "Atomic Heart",
    size: 27,
    img: "image/Atomic Hearth.jpg",
  },
  {
    name: "Baldure Gate 3 Deluxe Edition",
    size: 99.7,
    img: "image/Baldure Gate 3 Deluxe Edition.jpg",
  },
  {
    name: "Batman Arkham Asylum",
    size: 7.76,
    img: "image/Batman Arkham Asylum.jpg",
  },
  {
    name: "Batman Arkham Knight",
    size: 28.2,
    img: "image/Batman Arkham Knight.jpg",
  },
  {
    name: "Batman Gotham Knight Deluxe Edition",
    size: 39.8,
    img: "image/Batman Gotham Knight Deluxe Edition.jpg",
  },
  {
    name: "Battlefield 1",
    size: 18.7,
    img: "image/Battle Field 1.jpg",
  },
  {
    name: "Battlefield Bad Company 2",
    size: 3.49,
    img: "image/Battle Field Bad Company 2.jpg",
  },
  {
    name: "Battlefield 3",
    size: 13,
    img: "image/Battle Field 3.jpg",
  },
  {
    name: "Battlefield 4",
    size: 17.8,
    img: "image/Battle fIeld 4.jpg",
  },
  {
    name: "Bully Scholarship Edition",
    size: 4.9,
    img: "image/Bully Scholarship Edition.jpg",
  },
  {
    name: "Call of Duty Modern Warfare 2",
    size: 3.65,
    img: "image/Call Of Duty Modern Warfare 2.jpg",
  },
  {
    name: "Call of Duty Modern Warfare 3",
    size: 8.69,
    img: "image/Call Of Duty Modern Warfare 3.jpg",
  },
  {
    name: "Call of Duty Modern Warfare 4",
    size: 6.45,
    img: "image/Call Of Duty Modern Warfare 4.jpg",
  },
  {
    name: "Call of Duty World At WAR",
    size: 1.78,
    img: "image/Call Of Duty World At WAR.jpg",
  },

  {
    name: "Chef- a Restourant tycoon",
    size: 1.78,
    img: "image/Chef- a Restourant tycoon.jpg",
  },
  {
    name: "Counter Strike Global Offensive",
    size: 2.57,
    img: "image/Counter Strike Global Offensive.jpg",
  },
  {
    name: "Crash Bandicot N Sane Trilogy",
    size: 25.3,
    img: "image/Cash Bandicot N Sane Trilogy.jpg",
  },
  {
    name: "Crash Bandicot 4 It's About Time",
    size: 14.3,
    img: "image/Crash Bandicot 4 It's About Time.jpg",
  },
  {
    name: "Crossfire Legion",
    size: 5.7,
    img: "image/Crossfire Legion.jpg",
  },
  {
    name: "Crysis 2",
    size: 4.6,
    img: "image/Crysis 2.jpg",
  },
  {
    name: "Crysis 3 Remastered",
    size: 14.9,
    img: "image/Crysis 3 Remastered.jpg",
  },
  {
    name: "CyberPunk 2077",
    size: 55.8,
    img: "image/CyberPunk 2077 2.jpg",
  },
  {
    name: "Dark Souls III The Ringed City",
    size: 25.1,
    img: "image/Dark Souls III The Ringed City.jpg",
  },
  {
    name: "Days Gone",
    size: 22.5,
    img: "image/Days Gone.jpg",
  },
  {
    name: "Devil May Cry 3 Special Editon",
    size: 3.77,
    img: "image/Devil May Cry 3 Special Edition.jpg",
  },
  {
    name: "Devil May Cry 4",
    size: 6.76,
    img: "image/Devil May Cry 4.jpg",
  },
  {
    name: "Devil May Cry 5",
    size: 27.8,
    img: "image/Devil May Cry 5.jpg",
  },
  {
    name: " Devil May Cry Complete Edition",
    size: 8.97,
    img: " image/Devil May Cry Complete Edition.jpg",
  },
  {
    name: "Digimon Story Cyber Sleuth Complete Edition",
    size: 5.38,
    img: "image/Digimon Story Cyber Sleuth Complete Edition.jpeg",
  },
  {
    name: "Digimon Survive",
    size: 6.6,
    img: "image/Digimon Survive.png",
  },
  {
    name: "Disgaea 6 Complete",
    size: 2.48,
    img: "image/Disgaea 6 Complete.jpg",
  },
  {
    name: "Doom Eternal Deluxe Edition",
    size: 64.2,
    img: "image/Doom Eternal Deluxe Edition.jpg",
  },
  {
    name: "Dying Light 2 Stay Human Ultimate Edition",
    size: 52.8,
    img: "image/Dying Light 2 Stay Human Ultimate Edition.jpg",
  },
  {
    name: "E FOOTBALL 2021 Patch 2023",
    size: 43.3,
    img: "image/E FOOTBALL 2021 Patch 2023.jpg",
  },
  {
    name: "Earth Defense Force World Brothers",
    size: 5.87,
    img: "image/Earth Defense Force World Brothers.jpg",
  },
  {
    name: "Eastern Exorcist",
    size: 38,
    img: "image/Eastern Exorcist.jpg",
  },
  {
    name: "Eiyuden Chronicle Hundred Heroes",
    size: 13.6,
    img: "image/Eiyuden Chronicle Hundred Heroes.jpg",
  },
  {
    name: "Elden Ring",
    size: 46,
    img: "image/Elden Ring.jpg",
  },
  {
    name: "Euro Truck simulator 2",
    size: 26.7,
    img: "image/Euro Truck simulator 2.jpg",
  },
  {
    name: "Europa Universalis IV Origins",
    size: 3.15,
    img: "image/Europa Universalis IV Origins.jpg",
  },
  {
    name: "Evil West",
    size: 27.3,
    img: "image/Evil West.jpg",
  },
  {
    name: "Evil Within 2",
    size: 34.3,
    img: "image/Evil Within 2.jpg",
  },
  {
    name: "Fall Out 3",
    size: 6.06,
    img: "image/FALL OUT 3.png",
  },
  {
    name: "FALL OUT 4",
    size: 22.4,
    img: "image/FALL OUT 4.jpg",
  },
  {
    name: "Far Cry 3",
    size: 9.13,
    img: "image/FAR CRY 3.jpg",
  },
  {
    name: "Far Cry 4",
    size: 14,
    img: "image/FAR CRY 4.jpg",
  },
  {
    name: "Far Cry 5",
    size: 28.7,
    img: "image/FAR CRY 5.jpg",
  },
  {
    name: "Far Cry 6 Ultimate Edition",
    size: 50.5,
    img: "image/Far Cry 6 Ultimate Edition.jpg",
  },
  {
    name: "Far Cry Primal",
    size: 16.8,
    img: "image/Far Cry primal.jpg",
  },
  {
    name: "Fast and Furious Spy Racers Rise of Shifter",
    size: 2.47,
    img: "image/Fast and Furious Spy Racers Rise of Shifter.jpg",
  },
  {
    name: "FIFA 23",
    size: 47,
    img: "image/FIFA 23.jpg",
  },
  {
    name: "Final Fantasy XV",
    size: 97.8,
    img: "image/Final Fantasy XV.jpg",
  },
  {
    name: "Football Manager 2023",
    size: 5.05,
    img: "image/Football Manager 2023.jpg",
  },
  {
    name: "Forza Horizon 4",
    size: 85.1,
    img: "image/Forza Horizon 4.jpg",
  },
  {
    name: "Forza Horizon 5  ",
    size: 114,
    img: "image/Forza Horizon 5.jpg",
  },
  {
    name: "Front Mission Evolved",
    size: 9.95,
    img: "image/Front Mission Evolved.jpg",
  },
  {
    name: "Game House Collection",
    size: "1.05",
    img: "image/Game House Collection.jpg",
  },
  {
    name: "Gears 5",
    size: 64.4,
    img: "image/Gears 5.jpg",
  },
  {
    name: "GOD OF WAR PS 2",
    size: 1.1,
    img: "image/GOD OF WAR PS2.jpg",
  },
  {
    name: "GOD OF WAR PS 5",
    size: 124,
    img: "image/GOD OF WAR PS 5.jpeg",
  },
  {
    name: "Green Hell",
    size: 5.73,
    img: "image/Green Hell.jpg",
  },
  {
    name: "GTA 4",
    size: 31,
    img: "image/GTA 4.jpg",
  },
  {
    name: "GTA 5",
    size: 110,
    img: "image/GTA 5.jpeg",
  },
  {
    name: "GTA San Andreas Indonesia",
    size: 0.8,
    img: "image/GTA San andreas indonesia.jpg",
  },
  {
    name: "GTA San andreas",
    size: 4.65,
    img: "image/GTA San andreas.jpg",
  },
  {
    name: "Hallo Infinite",
    size: 42.6,
    img: "image/Hallo Infinite.jpg",
  },
  {
    name: "Harvest Moon One World",
    size: 0.8,
    img: "image/Harvest Moon One World.jpg",
  },
  {
    name: "Hell Blade II",
    size: 34.6,
    img: "image/Hell Blade II.jpg",
  },
  {
    name: "Heroes of Might and Magic III HD Edition",
    size: 1.91,
    img: "image/Heroes of Might and Magic III HD Edition.jpg",
  },
  {
    name: "Horizon Zero Dawn",
    size: 72.2,
    img: "image/Horizon Zero Dawn Complete Edition.jpg",
  },
  {
    name: "Howarts Legacy",
    size: 88.2,
    img: "image/Hogwarts Legacy.jpg",
  },
  {
    name: "Immortals of Aveum",
    size: 55.3,
    img: "image/Immortals of Aveum.jpg",
  },
  {
    name: "Jujutsu Kaisen CC",
    size: 9.7,
    img: "image/Jujutsu Kaisen CC.png",
  },
  {
    name: "Jurassic World Evolution 2 Deluxe Edition",
    size: 6.26,
    img: "image/Jurassic World Evolution 2 Deluxe Edition.jpg",
  },
  {
    name: "Just Cause 2",
    size: "4.07",
    img: "image/Just Cause 2.jpg",
  },
  {
    name: "Left 4 Dead",
    size: 14,
    img: "image/LEFT 4 DEAD 2.jpg",
  },
  {
    name: "LEGO Batman 3 Beyond Gotham",
    size: 6.89,
    img: "image/LEGO Batman 3 Beyond Gotham.jpg",
  },
  {
    name: "LEGO MARVEL Super Heroes",
    size: 6.16,
    img: "image/LEGO MARVEL Super Heroes.jpg",
  },
  {
    name: "Little Nightmares II Deluxe Edition",
    size: 7.56,
    img: "image/Little Nightmares II Deluxe Edition.jpg",
  },
  {
    name: "mafia II",
    size: 2.87,
    img: "image/Mafia II.jpg",
  },
  {
    name: "Maneater",
    size: 17.6,
    img: "image/Maneater.jpg",
  },
  {
    name: "Marvel Spiderman Miles Morales",
    size: 47.5,
    img: "image/Marvel Spiderman Miles Morales.webp",
  },
  {
    name: "Medal Of Honor",
    size: 10.9,
    img: "image/Medal Of Honor.jpg",
  },
  {
    name: "Metal Gears Solid V The Phantom Pain",
    size: 11.4,
    img: "image/Metal Gears Solid V The Phantom Pain.jpg",
  },
  {
    name: "Minecraft Legends",
    size: 6.77,
    img: "image/Minecraft Legends.jpg",
  },
  {
    name: "Monster Hunter Rise Deluxe Edition",
    size: 29.1,
    img: "image/Monster Hunter Rise Deluxe Edition.jpg",
  },
  {
    name: "Mortal Kombat Komplete Edition",
    size: 9.45,
    img: "image/Mortal Kombat Komplete Edition.jpg",
  },
  {
    name: "Mortal Kombat XL",
    size: 36.7,
    img: "image/Mortal Kombat XL.jpg",
  },
  {
    name: "Mortal Shell The Virtuous Cycle",
    size: 15,
    img: "image/Mortal Shell The Virtuous Cycle.jpg",
  },
  {
    name: "Moto GP 23",
    size: 22.4,
    img: "image/MOTO GP23.jpg",
  },
  {
    name: "Naruto Shippuden Ultimate Ninja Storm Revolution",
    size: 7.85,
    img: "image/Naruto Shippuden Storm Revolution.jpg",
  },
  {
    name: "Naruto X Boruto Ultimate Ninja Storm Connections",
    size: 29.2,
    img: "image/Naruto X Boruto Storm Connections.jpg",
  },
  {
    name: "Need For Speed Carbon",
    size: 4.21,
    img: "image/Need For Speed Carbon.jpg",
  },
  {
    name: "Need For Speed Heat Deluxe Edition",
    size: 26.1,
    img: "image/Need For Speed Heat Deluxe Edition.jpg",
  },
  {
    name: "Need For Speed Hot Pursuit",
    size: 7.88,
    img: "image/Need For Speed Hot Pursuit.jpg",
  },
  {
    name: "Need for Speed Rivals Complete Edition",
    size: 8.97,
    img: "image/Need for Speed Rivals Complete Edition.webp",
  },
  {
    name: "Need For Speed Shift 2 Unleashed",
    size: 7.31,
    img: "image/Need For Speed Shift 2 Unleashed.jpg",
  },
  {
    name: "Need For Speed The Run Limited Edition",
    size: 14.3,
    img: "image/Need For Speed The Run Limited Edition.webp",
  },
  {
    name: "NFS Most Wanted.Black.Edition",
    size: 2.82,
    img: "image/NFS Most Wanted.Black.Edition.webp",
  },
  {
    name: "One Piece Pirate Warriors 4",
    size: 21,
    img: "image/One Piece Pirate Warriors 4.webp",
  },
  {
    name: "One Punch Man Hero No Body Knows",
    size: 6.81,
    img: "image/One Punch Man Hero No Body Knows.jpg",
  },
  {
    name: "Overcooked 2",
    size: 7.91,
    img: "image/Overcooked 2.jpg",
  },
  {
    name: "Red Dead Redemption 2",
    size: 117,
    img: "image/Red Dead Redemption 2.jpg",
  },
  {
    name: "Resident evil 0 HD Remaster",
    size: 5.05,
    img: "image/Resident Evil 0 HD Remaster.jpg",
  },
  {
    name: "Resident evil 2 HD Remastered",
    size: 15.3,
    img: "image/Resident Evil 3 Remake.png",
  },
  {
    name: "Resident Evil 3 Remake",
    size: 14.7,
    img: "image/Resident Evil 31 Remake.png",
  },
  {
    name: "Resident Evil 4 Remake",
    size: 57.9,
    img: "image/Resident Evil 4 Remake.jpg",
  },
  {
    name: "Resident Evil 4 Ultimate Full HD",
    size: 13.5,
    img: "image/Resident Evil 4 Ultimate Full HD.jpg",
  },
  {
    name: "Resident Evil 5 Gold Edition",
    size: 8.48,
    img: "image/Resident Evil 5 Gold Edition.jpeg",
  },
  {
    name: "Resident Evil 6",
    size: 13.7,
    img: "image/Resident Evil 6.jpg",
  },
  {
    name: "Resident Evil 7 Bio Hazard",
    size: 24.8,
    img: "image/Resident Evil 7 BioHazard.jpg",
  },
  {
    name: "Resident Evil 8 Village",
    size: 18.9,
    img: "image/Resident Evil 8 Village.png",
  },
  {
    name: "Returnal",
    size: 51.6,
    img: "image/ReturnaL.jpg",
  },
  {
    name: "Sekiro Shadows Die Twice",
    size: 13,
    img: "image/Sekiro Shadows Die Twice.jpg",
  },
  {
    name: "Shadow of the Tomb Raider",
    size: 20.3,
    img: "image/Shadow of the Tomb Raider.jpg",
  },
  {
    name: "Sleeping Dogs",
    size: 9.67,
    img: "image/Sleeping Dogs.jpg",
  },
  {
    name: "Sniper Elite - Nazi zombie Army",
    size: 4.01,
    img: "image/Sniper Elite - Nazi zombie Army.jpg",
  },
  {
    name: "Sniper Elite 3",
    size: 15.4,
    img: "image/Sniper Elite 3.jpg",
  },
  {
    name: "Sniper Elite 4",
    size: 25.2,
    img: "image/Sniper Elite 4.jpg",
  },
  {
    name: "Sniper Elite V2 Remasted HD",
    size: 5.5,
    img: "image/Sniper Elite V2 Remasted HD.jpg",
  },
  {
    name: "Sons of the Forest",
    size: 19.4,
    img: "image/Sons of the Forest.webp",
  },
  {
    name: "Story Of Seasons Friends Of Mineral Town",
    size: 1.25,
    img: "image/Story Of Seasons Friends Of Mineral Town.png",
  },
  {
    name: "Story Of Seasons Pioneers of Olive Town",
    size: 0.8,
    img: "image/Story Of Seasons Pioneers of Olive Town.jpg",
  },
  {
    name: "Strong Hold Crusader HD",
    size: 0.7,
    img: "image/Strong Hold Crusader HD.jpg",
  },
  {
    name: "Strong Hold HD",
    size: 0.6,
    img: "image/Strong Hold Crusader HD.jpg",
  },
  {
    name: "The Last Of US",
    size: 42.1,
    img: "image/THE LAST OF US.jpg",
  },
  {
    name: "The Legendz of zelda tears of the kingdom",
    size: 16.3,
    img: "image/The Legendz of zelda tears of the kingdom.jpg",
  },
  {
    name: "The Witcher 3 Wild Hunt Complete Edition 2022",
    size: 62.8,
    img: "image/The Witcher 3 Wild Hunt Complete Edition 2022.webp",
  },
  {
    name: "Uncharted 4 Legacy of Thieves Collection",
    size: 68.6,
    img: "image/Uncharted 4 Legacy of Thieves Collection.jpg",
  },
  {
    name: "Warhammer Age of Sigmar Storm Ground",
    size: 4.76,
    img: "image/Warhammer Age of Sigmar Storm Ground.jpg",
  },
  {
    name: "Wo Long Fallen Dynasty",
    size: 32.7,
    img: "image/Wo Long Fallen Dynasty.jpg",
  },
  {
    name: "World of War Z Aftermath",
    size: 24.7,
    img: "image/World War z Aftermath.jpg",
  },
  {
    name: "Yakuza 4 Remastered Update",
    size: 29,
    img: "image/Yakuza 4 Remastered Update.jpg",
  },
  // Tambahkan lebih banyak game di sini
];

const gameContainer = document.getElementById("gameContainer");
const selectedList = document.getElementById("selectedList");
const toggleButton = document.getElementById("toggleButton");
const selectedGamesDiv = document.getElementById("selectedGames");
const arrow = document.getElementById("arrow");

games.forEach((game, index) => {
  const gameDiv = document.createElement("div");
  gameDiv.classList.add("game-item");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `game${index}`;
  checkbox.value = game.size;
  checkbox.onclick = handleGameSelection;

  const label = document.createElement("label");
  label.htmlFor = `game${index}`;
  label.textContent = `${game.name} (${game.size} GB)`;

  const img = document.createElement("img");
  img.src = game.img;
  img.alt = `${game.name}`;

  gameDiv.appendChild(checkbox);
  gameDiv.appendChild(img);
  gameDiv.appendChild(label);
  gameContainer.appendChild(gameDiv);
});

// Fungsi untuk menghitung total ukuran game yang dipilih dan menambahkannya ke list
function handleGameSelection() {
  calculateTotal();
  updateSelectedList();
}

// Fungsi untuk menghitung total ukuran
function calculateTotal() {
  let total = 0;
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    if (checkbox.checked) {
      total += parseInt(checkbox.value);
    }
  });
  document.getElementById("totalSize").textContent = total;
}

// Fungsi untuk memperbarui daftar game yang dipilih
// Fungsi untuk memperbarui daftar game yang dipilih
function updateSelectedList() {
  selectedList.innerHTML = ""; // Kosongkan daftar sebelumnya
  document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
    if (checkbox.checked) {
      // Ambil nama game dari label yang sesuai dengan checkbox
      const gameName =
        checkbox.parentElement.querySelector("label").textContent;
      const listItem = document.createElement("li");
      listItem.textContent = gameName; // Tambahkan nama game ke list item
      selectedList.appendChild(listItem); // Tambahkan list item ke ul
    }
  });
}

// Fungsi untuk menampilkan atau menyembunyikan daftar game yang dipilih
toggleButton.addEventListener("click", () => {
  if (selectedGamesDiv.classList.contains("hidden")) {
    selectedGamesDiv.classList.remove("hidden");
    arrow.textContent = "▲"; // Ubah panah ke atas
  } else {
    selectedGamesDiv.classList.add("hidden");
    arrow.textContent = "▼"; // Ubah panah ke bawah
  }
});
