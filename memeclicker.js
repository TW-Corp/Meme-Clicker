//Plans: make images for memes,
//Variables
var memes = 0;
var memesPC = 1;
var memesPS = 0;

//Gaining memes per click
function gainMemes() {
    memes += memesPC;
}
//Rendering Functions
var renderMemes = function renderMemes() {
    document.getElementById("memeamount").innerHTML = "Memes: " + memes;
};
var renderMemesPC = function () {
    document.getElementById("pcamount").innerHTML = "Memes Per Click: " + memesPC;
};

//Set H3 texts to the values - Runs the renders
setInterval(renderMemes);
setInterval(renderMemesPC);


function plus1memesPC() {
    if (memes >= 100) {
        memes = memes - 100;
        renderMemes;
        memesPC += 1;
        renderMemesPC;
    }
}

