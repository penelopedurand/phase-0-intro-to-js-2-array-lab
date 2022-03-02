// Write your solution here!
const cats = [
    "Milo",
    "Otis", 
    "Garfield"
];


//append new value 
function destructivelyAppendCat (name) {
     cats.push(name)
}
function destructivelyPrependCat (name){
    cats.unshift(name)
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat (name) {
    const allCats = [...cats]
    allCats.push(name)
    return allCats;
}
function prependCat (name) {
    const allCats = [...cats]
    allCats.unshift(name)
    return allCats;
}
function removeLastCat (name) {
    const allCats = [...cats]
    allCats.pop(name)
    return allCats;
}
function removeFirstCat (name) {
    const allCats = [...cats]
    allCats.shift(name)
    return allCats;
}