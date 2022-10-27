
let person = {
  vorname: 'Anton',
  nachname: 'Nüssler',
  alter: 34,
  familienstand: 'ledig',
  groesse: '178cm',
  profil: function() {
    return this.vorname + " " + this.nachname + " ist " + this.alter + " Jahre alt." + " Er ist " + this.familienstand + " und " + this.groesse + " groß.";
  }
};
//gib das Profil von Anton mit diesem Code im Element mit der "person" aus.
document.getElementById("person").innerHTML = person.profil();