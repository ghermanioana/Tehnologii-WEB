const Model = {

  operand1:    null,
  operand2:    null,
  operator:    null,
  displayValue: "0",
  isNewNumber:  true,
  hasError:     false,

  adaugaCifra: function(cifra) {

    if (this.hasError) return;

    if (this.isNewNumber) {
      this.displayValue = cifra;
      this.isNewNumber  = false;
    } else {
      if (this.displayValue === "0" && cifra === "0") return;
      if (this.displayValue === "0" && cifra !== ".") {
        this.displayValue = cifra;
      } else {
        this.displayValue = this.displayValue + cifra;
      }
    }
  },

  adaugaVirgula: function() {

    if (this.hasError) return;

    if (this.isNewNumber) {
      this.displayValue = "0.";
      this.isNewNumber  = false;
      return;
    }

    if (this.displayValue.includes(".")) return;

    this.displayValue = this.displayValue + ".";
  },

  seteazaOperator: function(op) {

    if (this.hasError) return;

    if (this.operator !== null && !this.isNewNumber) {
      this.calculeaza();
      if (this.hasError) return;
    }

    this.operand1   = parseFloat(this.displayValue);
    this.operator   = op;
    this.isNewNumber = true;
  },

  calculeaza: function() {

    if (this.hasError) return;

    if (this.operator === null || this.operand1 === null) return;

    this.operand2 = parseFloat(this.displayValue);

    let rezultat;

    if (this.operator === "+") {
      rezultat = this.operand1 + this.operand2;

    } else if (this.operator === "-") {
      rezultat = this.operand1 - this.operand2;

    } else if (this.operator === "*") {
      rezultat = this.operand1 * this.operand2;

    } else if (this.operator === "/") {
      if (this.operand2 === 0) {
        this.hasError     = true;
        this.displayValue = "Eroare: ÷ 0";
        this.operand1  = null;
        this.operand2  = null;
        this.operator  = null;
        return;
      }
      rezultat = this.operand1 / this.operand2;
    }

    rezultat = parseFloat(rezultat.toFixed(10));

    this.displayValue = String(rezultat);

    this.operand1    = rezultat;
    this.operand2    = null;
    this.operator    = null;
    this.isNewNumber = true;
  },

  schimbaSemn: function() {

    if (this.hasError) return;
    if (this.displayValue === "0") return;

    if (this.displayValue.startsWith("-")) {
      this.displayValue = this.displayValue.slice(1);
    } else {
      this.displayValue = "-" + this.displayValue;
    }
  },

  aplicaProcent: function() {

    if (this.hasError) return;

    const numar   = parseFloat(this.displayValue);
    const rezultat = numar / 100;
    this.displayValue = String(parseFloat(rezultat.toFixed(10)));
  },

  reseteaza: function() {
    this.operand1     = null;
    this.operand2     = null;
    this.operator     = null;
    this.displayValue = "0";
    this.isNewNumber  = true;
    this.hasError     = false;
  },

  getExpresie: function() {

    if (this.hasError) return "";

    if (this.operator === null) return "";

    const simboluri = { "+": "+", "-": "−", "*": "×", "/": "÷" };
    const simbol    = simboluri[this.operator] || this.operator;

    if (this.isNewNumber) {
      return this.operand1 + " " + simbol + " ";
    }

    return this.operand1 + " " + simbol + " " + this.displayValue;
  }
};