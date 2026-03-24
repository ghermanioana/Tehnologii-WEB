const Controller = {

  init: function() {

    const toateButoanele = document.querySelectorAll(".btn");
    toateButoanele.forEach(function(buton) {
      buton.addEventListener("click", function() {
        Controller.gestioneazaClick(buton);
      });
    });
    this.actualizeazaView();

    console.log("Calculator MVC pornit cu succes!");
  },

  gestioneazaClick: function(buton) {

    const tip    = buton.dataset.type;
    const valoare = buton.dataset.value;

    if (tip === "number") {
      Model.adaugaCifra(valoare);

    } else if (tip === "decimal") {
      Model.adaugaVirgula();

    } else if (tip === "operator") {
      Model.seteazaOperator(valoare);

    } else if (tip === "equals") {
      Model.calculeaza();

    } else if (tip === "clear") {
      Model.reseteaza();

    } else if (tip === "sign") {
      Model.schimbaSemn();

    } else if (tip === "percent") {
      Model.aplicaProcent();
    }

    this.actualizeazaView();
  },

  actualizeazaView: function() {

    const valoareAfisata = Model.displayValue;
    const expresieAfisata = Model.getExpresie();
    const esteEroare     = Model.hasError;

    View.actualizeazaEcran(valoareAfisata, expresieAfisata, esteEroare);

    View.marcheazaOperator(Model.operator);
  }

};

document.addEventListener("DOMContentLoaded", function() {
  Controller.init(); // Pornim calculatorul!
});