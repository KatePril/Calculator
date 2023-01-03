const input = document.querySelector("#input");

const btnAC = document.querySelector("#btnAC"); //*
const btnC = document.querySelector("#btnC"); //*
const btnPercentage = document.querySelector("#btnPercentage"); //*
const btnDiv = document.querySelector("#btnDiv"); //*

const btn7 = document.querySelector("#btn7"); //*
const btn8 = document.querySelector("#btn8"); //*
const btn9 = document.querySelector("#btn9"); //*
const btnMult = document.querySelector("#btnMult"); //*

const btn4 = document.querySelector("#btn4"); //*
const btn5 = document.querySelector("#btn5"); //*
const btn6 = document.querySelector("#btn6"); //*
const btnMin = document.querySelector("#btnMin"); //*

const btn1 = document.querySelector("#btn1"); //*
const btn2 = document.querySelector("#btn2"); //*
const btn3 = document.querySelector("#btn3"); //*
const btnPlus = document.querySelector("#btnPlus"); //*

const btnM = document.querySelector("#btnM"); //*
const btn0 = document.querySelector("#btn0"); //*
const btnP = document.querySelector("#btnP"); //*
const btnRes = document.querySelector("#btnRes"); //*

const btnRoot2 = document.querySelector("#btnRoot2");
const btnPow2 = document.querySelector("#btnPow2");
const btnRoot3 = document.querySelector("#btnRoot3");
const btnPow3 = document.querySelector("#btnPow3");
const btnRootN = document.querySelector("#btnRootN");
const btnPowN = document.querySelector("#btnPowN");

const btnSin = document.querySelector("#btnSin");
const btnCos = document.querySelector("#btnCos");
const btnTg = document.querySelector("#btnTg");
const btnCtg = document.querySelector("#btnCtg");

const btnLog2 = document.querySelector("#btnLog2");
const btnLog10 = document.querySelector("#btnLogX");
const btnModule = document.querySelector("#btnModule");
const btnDiv1 = document.querySelector("#btnDiv1");

let firstNumberData;
let secondNumberData;
let actionData = "";
let resultData;

btnAC.addEventListener('click', AC);
btnC.addEventListener('click', C);
btnPercentage.addEventListener('click', Percentage);
btn0.addEventListener('click', printNum0);
btn1.addEventListener('click', printNum1);
btn2.addEventListener('click', printNum2);
btn3.addEventListener('click', printNum3);
btn4.addEventListener('click', printNum4);
btn5.addEventListener('click', printNum5);
btn6.addEventListener('click', printNum6);
btn7.addEventListener('click', printNum7);
btn8.addEventListener('click', printNum8);
btn9.addEventListener('click', printNum9);
btnM.addEventListener('click', printM);
btnP.addEventListener('click', printP);

btnDiv.addEventListener('click', Div);
btnMult.addEventListener('click', Mult);
btnPlus.addEventListener('click', Plus);
btnMin.addEventListener('click', Min);
btnRes.addEventListener('click', Result);

btnRoot2.addEventListener('click', Root2);
btnRoot3.addEventListener('click', Root3);
btnRootN.addEventListener('click', RootN);
btnPow2.addEventListener('click', Pow2);
btnPow3.addEventListener('click', Pow3);
btnPowN.addEventListener('click', PowN);

btnSin.addEventListener('click', Sin);
btnCos.addEventListener('click', Cos);
btnTg.addEventListener('click', Tg);
btnCtg.addEventListener('click', Ctg);

btnLog2.addEventListener('click', Log2);
btnLog10.addEventListener('click', Log10);
btnModule.addEventListener('click', Module);
btnDiv1.addEventListener('click', Div1);

function printP(){
    let tmp = input.value;
    if(!tmp.includes(".")){
        if(tmp == "" || tmp == "-"){
            input.value += "0.";
        }else {
            input.value += ".";
        }
    }
}
function printM(){
    let tmp = input.value;
    if(!tmp.includes("-")){
        if(tmp == "" || tmp == "0"){
            input.value = "-";
        }else {
            input.value = "-" + input.value;
        }
    }
}

function printNum0(){
    if(input.value != "0"){
        input.value += 0;
    }
}
function printNum1(){
    if(input.value == 0){
        input.value = 1; 
    } else{
      input.value += 1;  
    }
}
function printNum2(){
    if(input.value == 0){
        input.value = 2; 
    } else{
      input.value += 2;  
    }
}
function printNum3(){
    if(input.value == 0){
        input.value = 3; 
    } else{
      input.value += 3;  
    }
}
function printNum4(){
    if(input.value == 0){
        input.value = 4; 
    } else{
      input.value += 4;  
    }
}
function printNum5(){
    if(input.value == 0){
        input.value = 5; 
    } else{
      input.value += 5;  
    }
}
function printNum6(){
    if(input.value == 0){
        input.value = 6; 
    } else{
      input.value += 6;  
    }
}
function printNum7(){
    if(input.value == 0){
        input.value = 7; 
    } else{
      input.value += 7;  
    }
}
function printNum8(){
    if(input.value == 0){
        input.value = 8; 
    } else{
      input.value += 8;  
    }
}
function printNum9(){
    if(input.value == 0){
        input.value = 9; 
    } else{
      input.value += 9;  
    }
}

function C(){
    input.value = "";
}
function AC(){
    firstNumberData = "";
    secondNumberData = "";
    actionData = "";
    input.value = "";
}
function Percentage() {
    input.value = input.value/100;
}

function Count(act, num1, num2) {
    // let n1 = parseInt(num1);
    // let n2 = parseInt(num2);
    let res;
    switch(act){
        case "/":
            if(num2 != 0) {
                res = num1/num2;
            } else {
                res = "";
            }
            break;
        case "*":
            res = num1*num2;
            break;
        case "+":
            res = num1+num2;
            break;
        case "-":
            res = num1-num2;
            break;
        case "√":
            res = Math.pow(num1, (1/num2));
            break;
        case "^":
            res = Math.pow(num1, num2);
            break;
    }
    return res;
}

function Div(){
    // if (firstNumberData != NaN && firstNumberData != undefined && input.value != undefined) {
    // // if (firstNumberData.includes(NaN) && firstNumberData.includes(undefined) && input.value.includes(undefined)) {
    //     secondNumberData = parseInt(input.value, 10);
    //     // secondNumberData = Number(input.value);
    //     console.log(firstNumberData +" "+ actionData +" "+ secondNumberData +" = "+ Count(actionData, firstNumberData, secondNumberData));
    //     input.value = Count(actionData, firstNumberData, secondNumberData);
    // }
    actionData = "/";
    firstNumberData = parseInt(input.value, 10);
    input.value = "";
}
function Mult(){
    // if (firstNumberData != "" && input.value != "") {
    //     secondNumberData = parseInt(input.value, 10);
    //     console.log(firstNumberData +" "+ actionData +" "+ secondNumberData +" = "+ Count(actionData, firstNumberData, secondNumberData));
    //     input.value = Count(actionData, firstNumberData, secondNumberData);
    // }
    actionData = "*";
    firstNumberData = parseInt(input.value, 10);
    input.value = "";
}
function Min(){
    // if (firstNumberData != "" && input.value != "") {
    //     secondNumberData = parseInt(input.value, 10);
    //     console.log(firstNumberData +" "+ actionData +" "+ secondNumberData +" = "+ Count(actionData, firstNumberData, secondNumberData));
    //     input.value = Count(actionData, firstNumberData, secondNumberData);
    // }
    actionData = "-";
    firstNumberData = parseInt(input.value, 10);
    input.value = "";
}
function Plus(){
    // if (firstNumberData != "" && input.value != "") {
    //     secondNumberData = parseInt(input.value, 10);
    //     console.log(firstNumberData +" "+ actionData +" "+ secondNumberData +" = "+ Count(actionData, firstNumberData, secondNumberData));
    //     input.value = Count(actionData, firstNumberData, secondNumberData);
    // }
    actionData = "+";
    firstNumberData = parseInt(input.value, 10);
    input.value = "";
}

function Result(){
    secondNumberData = parseInt(input.value, 10);
    console.log(firstNumberData +" "+ actionData +" "+ secondNumberData +" = "+ Count(actionData, firstNumberData, secondNumberData));
    history.innerHTML += "<tr><th scope=\"col\">"+firstNumberData +" "+ actionData +" "+ secondNumberData +" = "+ Count(actionData, firstNumberData, secondNumberData)+"</th></tr>";

    input.value = Count(actionData, firstNumberData, secondNumberData)
}

function Root2() {
    let tmp = input.value;
    input.value = Math.sqrt(input.value);
    history.innerHTML += "<tr><th scope=\"col\">"+" "+"<sup>2</sup>√"+ tmp +" = "+ input.value+"</th></tr>";

}
function Root3() {
    let tmp = input.value;
    input.value = Math.cbrt(input.value);
    history.innerHTML += "<tr><th scope=\"col\">"+" "+"<sup>3</sup>√"+ tmp +" = "+ input.value+"</th></tr>";
}
function RootN() {
    actionData = "√";
    firstNumberData = parseInt(input.value, 10);
    input.value = "";
}
function Pow2() {
    let tmp = input.value;
    input.value = Math.pow(input.value, 2);
    history.innerHTML += "<tr><th scope=\"col\">"+" "+ tmp +"<sup>2</sup> = "+ input.value+"</th></tr>";
}
function Pow3() {
    let tmp = input.value;
    input.value = Math.pow(input.value, 3);
    history.innerHTML += "<tr><th scope=\"col\">"+" "+ tmp +"<sup>3</sup> = "+ input.value+"</th></tr>";
}
function PowN() {
    actionData = "^";
    firstNumberData = parseInt(input.value, 10);
    input.value = "";
}

function Sin() {
    let tmp = input.value;
    input.value = Math.sin(input.value);
    history.innerHTML += "<tr><th scope=\"col\">"+" " +"sin "+ tmp + " = "+ input.value+"</th></tr>";
}
function Cos() {
    let tmp = input.value;
    input.value = Math.cos(input.value);
    history.innerHTML += "<tr><th scope=\"col\">"+" " +"cos "+ tmp + " = "+ input.value+"</th></tr>";
}
function Tg() {
    let tmp = input.value;
    input.value = Math.tan(input.value);
    history.innerHTML += "<tr><th scope=\"col\">"+" " +"tg "+ tmp + " = "+ input.value+"</th></tr>";
}
function Ctg() {
    let tmp = input.value;
    input.value = 1 / Math.tan(input.value);
    history.innerHTML += "<tr><th scope=\"col\">"+" " +"ctg "+ tmp + " = "+ input.value+"</th></tr>";
}

function Log2() {
    let tmp = input.value;
    input.value = Math.log2(input.value);
    history.innerHTML += "<tr><th scope=\"col\">"+" " +"log<sub>2</sub> "+ tmp + " = "+ input.value+"</th></tr>";
}
function Log10() {
    let tmp = input.value;
    input.value = Math.log10(input.value);
    history.innerHTML += "<tr><th scope=\"col\">"+" " +"log<sub>10</sub> "+ tmp + " = "+ input.value+"</th></tr>";
}
function Module() {
    let tmp = input.value;
    input.value = Math.abs(input.value);
    history.innerHTML += "<tr><th scope=\"col\">"+" " +"| "+ tmp +" |"+ " = "+ input.value+"</th></tr>";
}
function Div1() {
    let tmp = input.value;
    input.value = 1 / input.value;
    history.innerHTML += "<tr><th scope=\"col\">"+" " +"1 / "+ tmp + " = "+ input.value+"</th></tr>";
}

const history = document.querySelector("#history");
console.log(history);