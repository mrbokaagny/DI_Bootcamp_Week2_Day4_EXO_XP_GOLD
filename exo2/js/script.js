function abbrevName(character) {
    let abreviation = character.toString().split(" ");
    if(abreviation.length > 1) {
        return `${abreviation[0]} ${abreviation[1].charAt(0)}.`;
    }
    return character;
}

console.log(abbrevName("Robin Singh"))