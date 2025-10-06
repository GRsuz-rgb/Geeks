const nameEl = document.getElementById("pokemon-name");
const idEl = document.getElementById("pokemon-id");
const imgEl = document.getElementById("pokemon-img");
const typeEl = document.getElementById("pokemon-type");
const heightEl = document.getElementById("pokemon-height");
const weightEl = document.getElementById("pokemon-weight");

const info = document.getElementById("info");
const loading = document.getElementById("loading");
const errorMsg = document.getElementById("error");

const randomBtn = document.getElementById("random");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentPokemonId = 1;

// Fetch Pokémon function
async function fetchPokemon(id) {
  try {
    // Afficher le chargement
    info.classList.add("hidden");
    errorMsg.classList.add("hidden");
    loading.classList.remove("hidden");

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) throw new Error("Not found");

    const data = await res.json();

    // Mettre à jour le DOM
    nameEl.textContent = data.name.toUpperCase();
    idEl.textContent = data.id;
    imgEl.src = data.sprites.other['official-artwork'].front_default;
    typeEl.textContent = data.types.map(t => t.type.name).join(", ");
    heightEl.textContent = `${data.height / 10} m`;
    weightEl.textContent = `${data.weight / 10} kg`;

    currentPokemonId = data.id;

    loading.classList.add("hidden");
    info.classList.remove("hidden");

  } catch (error) {
    console.error(error);
    loading.classList.add("hidden");
    info.classList.add("hidden");
    errorMsg.classList.remove("hidden");
  }
}

// Bouton random
randomBtn.addEventListener("click", () => {
  const randomId = Math.floor(Math.random() * 898) + 1; // 898 Pokémon
  fetchPokemon(randomId);
});

//  Bouton précédent
prevBtn.addEventListener("click", () => {
  if (currentPokemonId > 1) fetchPokemon(currentPokemonId - 1);
});

// Bouton suivant
nextBtn.addEventListener("click", () => {
  if (currentPokemonId < 898) fetchPokemon(currentPokemonId + 1);
});

// Charger le premier Pokémon au démarrage
fetchPokemon(currentPokemonId);
