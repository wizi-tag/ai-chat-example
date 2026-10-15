const ADJ = [
  "Cosmic",
  "Galactic",
  "Stellar",
  "Nebular",
  "Astral",
  "Void",
  "Infinite",
  "Eclipse",
  "Solar",
  "Quantum"
];

const NOUNS = [
"Nebula",
"Horizon",
"Odyssey",
"Cluster",
"Vortex",
"Anomalie",
"Cruiser",
"Sector",
"Singularity",
"Orbit"
];

export function generateTitle() {
    const randomAdj = ADJ[Math.floor(Math.random() * ADJ.length)];
    const randomNoun = NOUNS[Math.floor(Math.random() * NOUNS.length)];
    return `${randomAdj} ${randomNoun}`;
};
