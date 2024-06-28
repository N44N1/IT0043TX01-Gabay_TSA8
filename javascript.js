let x = document.getElementById("con2");
let i;


function resetFlexbox(){
    x.style.flexDirection = "row";
    x.style.justifyContent = 'start';
    x.style.alignItems = 'start';
    let gapSize = document.getElementById('gap');
    let initialGap = 0;
    gapSize.value = initialGap;
    x.style.gap = `${initialGap}px`;
    document.getElementById('b1').style.flexGrow = 0;
    document.getElementById('b2').style.flexGrow = 0;
    document.getElementById('b3').style.flexGrow = 0;
}

function gapSize(){
    let gapSize = document.getElementById('gap').value;
    x.style.gap = `${gapSize}px`;
}

function flexPositions(i){
if (i==1){
    x.style.flexDirection = "column";
}
else if (i==2){
    x.style.flexDirection = "row";
}
else if (i==3){
    x.style.justifyContent = "start";
}
else if (i==4){
    x.style.justifyContent = "center";
}
else if (i==5){
    x.style.justifyContent = "end";
}
else if (i==6){
    x.style.justifyContent = "space-between";
}
else if (i==7){
    x.style.justifyContent = "space-around";
}
else if (i==8){
    x.style.justifyContent = "space-evenly";
}
else if (i==9){
    x.style.alignItems = "start";
}
else if (i==10){
    x.style.alignItems = "center";
}
else if (i==11){
    x.style.alignItems = "end";
}
}

function resetFlexGrow() {
    document.getElementById('b1').style.flexGrow = 0;
    document.getElementById('b2').style.flexGrow = 0;
    document.getElementById('b3').style.flexGrow = 0;
}

function growAll() {
    document.getElementById('b1').style.flexGrow = 2;
    document.getElementById('b2').style.flexGrow = 2;
    document.getElementById('b3').style.flexGrow = 2;
}

function changeFlexGrow(itemId) {
    let inputId = `box${itemId.charAt(itemId.length - 1).toLowerCase()}`;
    let inputValue = document.getElementById(inputId).value;
    x.style.flexGrow = inputValue || 1;
}