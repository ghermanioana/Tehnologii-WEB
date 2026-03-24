const View = {

  elementExpresie: document.getElementById("display-expression"),
  elementValoare: document.getElementById("display-value"),
  toateButoanele: document.querySelectorAll(".btn"),
  actualizeazaEcran: function(valoare, expresie, esteEroare) {
    this.elementExpresie.textContent = expresie;
    this.elementValoare.textContent = valoare;
    this.elementValoare.classList.remove("small", "xsmall", "error");

    if (esteEroare) {
      this.elementValoare.classList.add("error");

    } else {
      const lungime = valoare.length;

      if (lungime > 12) {
        this.elementValoare.classList.add("xsmall");
      } else if (lungime > 8) {
        this.elementValoare.classList.add("small");
      }
    }
  },

  marcheazaOperator: function(operator) {
    this.toateButoanele.forEach(function(buton) {

      if (buton.dataset.type === "operator") {
        buton.classList.remove("active");
      }
      if (
        operator !== null &&
        buton.dataset.type  === "operator" &&
        buton.dataset.value === operator
      ) {
        buton.classList.add("active");
      }
    });
  }
};