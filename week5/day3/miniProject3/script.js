const fromSelect = document.getElementById("from-currency");
const toSelect = document.getElementById("to-currency");
const amountInput = document.getElementById("amount");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convert-btn");
const switchBtn = document.getElementById("switch-btn");
const loading = document.getElementById("loading");
const errorMsg = document.getElementById("error");

const apiKey = "ec033fa3d2bcb9f09a59aaa5";
const url = `https://v6.exchangerate-api.com/v6/${apiKey}`;

// Charger les devises disponibles
async function loadCurrencies() {
  try {
    loading.classList.remove("hidden");
    const res = await fetch(`${url}/codes`);
    const data = await res.json();

    const currencies = data.supported_codes;
    currencies.forEach(([code, name]) => {
      const option1 = document.createElement("option");
      option1.value = code;
      option1.textContent = `${code} - ${name}`;
      fromSelect.appendChild(option1);

      const option2 = option1.cloneNode(true);
      toSelect.appendChild(option2);
    });

    // valeurs par défaut
    fromSelect.value = "USD";
    toSelect.value = "EUR";
    loading.classList.add("hidden");
  } catch (error) {
    showError("Unable to load currencies.");
  }
}

// Conversion
async function convertCurrency() {
  const from = fromSelect.value;
  const to = toSelect.value;
  const amount = parseFloat(amountInput.value);

  if (isNaN(amount) || amount <= 0) {
    showError("Please enter a valid amount.");
    return;
  }

  try {
    loading.classList.remove("hidden");
    result.textContent = "";
    errorMsg.classList.add("hidden");

    const res = await fetch(`${url}/pair/${from}/${to}/${amount}`);
    const data = await res.json();

    if (data.result === "error") throw new Error(data["error-type"]);

    result.textContent = `${amount} ${from} = ${data.conversion_result.toFixed(2)} ${to}`;
    loading.classList.add("hidden");
  } catch (error) {
    showError("Conversion failed. Please try again.");
  }
}

// Inverser les devises (bonus)
switchBtn.addEventListener("click", () => {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  if (amountInput.value) convertCurrency();
});

// Bouton Convertir
convertBtn.addEventListener("click", convertCurrency);

// Gestion des erreurs
function showError(message) {
  loading.classList.add("hidden");
  result.textContent = "";
  errorMsg.textContent = message;
  errorMsg.classList.remove("hidden");
}

// Charger les devises au démarrage
loadCurrencies();
