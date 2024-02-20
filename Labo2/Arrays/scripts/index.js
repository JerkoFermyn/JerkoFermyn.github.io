let familyMembers = ["John", "Alice", "Bob", "Emily", "Michael"]

function voegNaamToe(naam) {
    familyMembers.push(naam);
}

console.log("Aantal famimlieleden: ", familyMembers.length);

console.log("Eerste familielid:", familyMembers[0]);
console.log("Derde familielid:", familyMembers[2]);
console.log("Vijfde familielid:", familyMembers[4]);

let nieuweNaam = prompt("Voer een naam in om toe te voegen aan de familie:");
voegNaamToe(nieuweNaam);
console.log("Familieleden na toevoeging:", familyMembers);

let familyString = familyMembers.join(", ");
console.log("Familieleden als string:", familyString);