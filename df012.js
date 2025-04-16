function contar() {
  let ini = document.getElementById("txti");
  let fi = document.getElementById("txtf");
  let pas = document.getElementById("txtp");
  let res = document.getElementById("resultado");

  if (ini.value.length == 0 || fi.value.length == 0 || pas.value.length == 0) {
    alert("[ERRO Faltam dados!!!]");
  } else {
    res.innerHTML = "Contando: <br>";
    let i = Number(ini.value);
    let f = Number(fi.value);
    let p = Number(pas.value);

    if (i < f) {
      // contagem Crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} ➡️`;
      }
    } else {
      // Conatagem Regressiva
      for (let c = i; c >= f; c += p) {
        res.innerHTML += `${c} ➡️`;
      }
    }
    res.innerHTML += "🏴‍☠️";
  }
}
