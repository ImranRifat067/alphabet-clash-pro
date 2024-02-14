// function play(){
//     // hide home
//     const homeSection = document.getElementById('home');
//     // console.log(homeSection.classList);
//     homeSection.classList.add('hidden');

//     // show playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }
function continueGame(){
    getRandomAlphabet();
} 


function play(){
    hideElementById('home');
    showElementById('play-ground');
    getRandomAlphabet();
}