

// return true si le paramètre est vide
function isBlank(character){
    if(character.toString().length == "")
        return true;
    else
        return false;
}

console.log(isBlank(''))