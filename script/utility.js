
function hideElementById(elementId){
    const  element = document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getRandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    // console.log(alphabets);

    const getRandom = Math.random()*25;
    const index = Math.round(getRandom);
    const alphabet = alphabets[index];
    
    return alphabet;
}