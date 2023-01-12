
// fonction de remplacement de tout les majuscules en minuscules et l'inverse
function swapCase(character) {
    let wordTable = character.split(" ");
    let neWordTableFormated = [];
    for(let word of wordTable) {
        if(word.charAt(0) == word.charAt(0).toUpperCase()) {
            word = word.charAt(0).toLowerCase() + word.substring(1).toUpperCase();
            neWordTableFormated.push(word);
        }
        else {
            word = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
            neWordTableFormated.push(word);
        }
    }
    return neWordTableFormated.join(" ");
}

console.log(swapCase('Heu , BnJour Le mOndE'))