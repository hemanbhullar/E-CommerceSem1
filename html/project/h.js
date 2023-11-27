var progressBars=document.querySelectorAll('.skill-progress>div');
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;
function initialiseBars(){
    for(let bar of progressBars){
        bar.style.width=0+"%";
    }
};
initialiseBars();
function fillBars(){
    for(let bar of progressBars){
    let targetwidth=bar.getAttribute('data-bar-width');
    let currentwidth=0;
    let interval=setInterval(function(){
        if(currentwidth>targetwidth){
            clearInterval(interval);
            return;
        }currentwidth++;
        bar.style.width=currentwidth+'%';
    },5);
};
};
function checkScroll(){
    var coordinates=skillsContainer.getBoundingClientRect();
    if(!animationDone && coordinates.top<=window.innerHeight){
        animationDone=true;
        fillBars();
    }else if(coordinates.top>window.innerHeight){
        animationDone=true;
        initialiseBars();
    };
};