const btn = document.getElementById('btn');
const loading = document.getElementById('loading');
const info = document.getElementById('info');
const errorMsg = document.getElementById('error');

const nameEl = document.getElementById('name');
const heightEl = document.getElementById('height');
const genderEl = document.getElementById('gender');
const birthEl = document.getElementById('birth-year');
const homeworldEl = document.getElementById('homeworld');

btn.addEventListener('click', async () => {
  try {
    // Masquer les infos précédentes et afficher "Loading..."
    info.classList.add('hidden');
    errorMsg.classList.add('hidden');
    loading.classList.remove('hidden');

    // Choisir un personnage aléatoire (1–83)
    const randomId = Math.floor(Math.random() * 83) + 1;

    // Récupération du personnage
    const res = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
    if (!res.ok) throw new Error('Network error');
    const data = await res.json();
    const person = data.result.properties;

    // Récupération du monde natal
    const homeRes = await fetch(person.homeworld);
    const homeData = await homeRes.json();
    const homeName = homeData.result.properties.name;

    // Mise à jour du DOM
    nameEl.textContent = person.name;
    heightEl.textContent = person.height;
    genderEl.textContent = person.gender;
    birthEl.textContent = person.birth_year;
    homeworldEl.textContent = homeName;

    loading.classList.add('hidden');
    info.classList.remove('hidden');
  } catch (error) {
    console.error(error);
    loading.classList.add('hidden');
    errorMsg.textContent = 'Oops! Could not fetch character data.';
    errorMsg.classList.remove('hidden');
  }
});
