// COLE AQUI O LINK REAL DO CHECKOUT DA KIWIFY.
const CHECKOUT_URL = "https://pay.kiwify.com.br/cypFHjp";

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll(".checkout-link").forEach((link) => {
  if (CHECKOUT_URL.startsWith("https://")) {
    link.href = CHECKOUT_URL;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.href = "#oferta";
    link.addEventListener("click", (event) => {
      event.preventDefault();
      alert("O checkout ainda não foi configurado. Edite o arquivo script.js e cole seu link da Kiwify na variável CHECKOUT_URL.");
    });
  }
});