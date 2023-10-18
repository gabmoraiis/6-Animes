const styleSheet = document.styleSheets[1];

function boxColor1(){
    let newRule = "section { box-shadow: 20px 20px 100px rgba(255, 221, 153, 0.85); border-color: rgb(255, 221, 153); }"
    styleSheet.insertRule(newRule, styleSheet.cssRules.length);
}
function boxColor2(){
    let newRule = "section { box-shadow: 20px 20px 100px rgba(230, 0, 0, 0.85); border-color: rgb(230, 0, 0);}"
    styleSheet.insertRule(newRule, styleSheet.cssRules.length);
}
function boxColor3(){
    let newRule = "section { box-shadow: 20px 20px 100px rgba(0, 128, 255, 0.85); border-color: rgb(0, 128, 255); }"
    styleSheet.insertRule(newRule, styleSheet.cssRules.length);
}
function boxColor4(){
    let newRule = "section { box-shadow: 20px 20px 100px rgba(255, 153, 0, 0.85); border-color: rgb(255, 153, 0); }"
    styleSheet.insertRule(newRule, styleSheet.cssRules.length);
}
function boxColor5(){
    let newRule = "section { box-shadow: 20px 20px 100px rgba(255, 255, 255, 0.85); border-color: rgb(255, 255, 255); }"
    styleSheet.insertRule(newRule, styleSheet.cssRules.length);
}
function boxColor6(){
    let newRule = "section { box-shadow: 20px 20px 100px rgba(51, 204, 51, 0.85); border-color: rgb(51, 204, 51); }"
    styleSheet.insertRule(newRule, styleSheet.cssRules.length);
}
function boxColorPadrao(){
    let newRule = "section { box-shadow: 4px 4px 20px rgba(115, 115, 115, 0.85); border-color: rgba(115, 115, 115, 0.85); }"
    styleSheet.insertRule(newRule, styleSheet.cssRules.length);
}
