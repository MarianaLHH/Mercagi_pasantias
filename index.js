document.getElementById("inputOrigen").addEventListener("input", function () {
  const texto = this.value;
  document.getElementById("inputDestino").value = texto;
});
