
// cette fonction permet de vérifier si un chiffre est présente dans un tableau composé de sous tableau
function isOmnipresent(array, number) {
    let found = 0;
    for(let item of array) {
        for(let i of item) {
            if(i == number) {
                found++;
            }
        }
    }
    if(found >= array.length)
        return true;
    else
        return false;

}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6))