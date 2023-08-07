async function convertToARS() {
    let usdValue = document.getElementById("usdValue").textContent;
    usdValue = usdValue.replace("El valor en USD es: $", "");

    try {
        const response = await fetch(`https://api.cclapi.com/dolar-crypto/ars?value=${usdValue}`);
        const data = await response.json();
        const arsValue = data.value;

        document.getElementById("arsValue").textContent = `Cotización del Dólar Crypto (CCL): $${arsValue.toFixed(2)}`;
    } catch (error) {
        console.error("Error al obtener la cotización del Dólar Crypto:", error);
        document.getElementById("arsValue").textContent = "Error al obtener la cotización. Intente de nuevo más tarde.";
    }
}
