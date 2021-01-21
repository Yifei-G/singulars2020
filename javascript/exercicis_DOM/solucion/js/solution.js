const ex1Button = document.querySelector("#ex1");
ex1Button.addEventListener('click', ()=>{
    console.log(`%c  Ex1: Hola Usuario!!`, 'color:green');
});


const ex2Input = document.querySelector("#ex2");
const ex2Button = document.querySelector("#ex2-button");
ex2Input.addEventListener('keyup',()=>{
    ex2Input.value ? ex2Button.disabled = false : ex2Button.disabled = true;
})
ex2Button.addEventListener('click', ()=>{
    console.log(`%c Ex2: Hola ${ex2Input.value}`, 'color:green');
});

const ex3Input = document.querySelector("#ex3");
const ex3Button = document.querySelector("#ex3-button");
const ex3Span = document.querySelector("#ex3-span");
ex3Input.addEventListener('keyup',()=>{
    ex3Input.value ? ex3Button.disabled = false : ex3Button.disabled = true;
})
ex3Button.addEventListener('click', ()=>{
    ex3Span.textContent = `Ex3: Hola ${ex3Input.value}`
})

const ex4Input = document.querySelector("#ex4");
const ex4Button = document.querySelector("#ex4-button");
const ex4Span = document.querySelector("#ex4-span");
ex4Input.addEventListener('keyup',()=>{
    ex4Input.value ? ex4Button.disabled = false : ex4Button.disabled = true;
})
ex4Button.addEventListener('click', ()=>{
    const ex4RadioBtn = document.querySelector("#ex4-radio-button");
    ex4Span.textContent = `Ex4: Hola ${ex4RadioBtn.checked ? ex4RadioBtn.value : ""}: ${ex4Input.value}`
})


const ex5Button = document.querySelector("#ex5-button");
const ex5Input = document.querySelector("#ex5");
ex5Input.addEventListener('keyup',()=>{
    ex5Input.value ? ex5Button.disabled = false : ex5Button.disabled = true;
});
ex5Button.addEventListener('click', ()=>{
    const ex5ColorSelect = document.querySelector("#ex5-color-select");
    console.log(`%c Ex5: Hola ${ex5Input.value}`, `color: ${ex5ColorSelect.value}`);
})


const ex6Button = document.querySelector("#ex6-button");
const ex6Input = document.querySelector("#ex6");
const ex6Span = document.querySelector("#ex6-span");
ex6Input.addEventListener('keyup',()=>{
    ex6Input.value ? ex6Button.disabled = false : ex6Button.disabled = true;
});
ex6Button.addEventListener('click', ()=>{
    const ex6ColorSelect = document.querySelector("#ex6-color-select");
    ex6Span.style.color = ex6ColorSelect.value;
    ex6Span.textContent = `Ex6: Hola : ${ex6Input.value}`
})

const ex7Input = document.querySelector("#ex7");
const ex7Button = document.querySelector("#ex7-button");
const ex7Span = document.querySelector("#ex7-span");
ex7Input.addEventListener('keyup',()=>{
    ex7Input.value ? ex7Button.disabled = false : ex7Button.disabled = true;
});
ex7Button.addEventListener('click', ()=>{
    const ex7ColorPicker = document.querySelector("#ex7-color-picker");
    ex7Span.style.color = ex7ColorPicker.value;
    ex7Span.textContent = `Ex7: Hola : ${ex7Input.value}`
})

const ex8Input = document.querySelector("#ex8");
const ex8Button = document.querySelector("#ex8-button");
const ex8Span = document.querySelector("#ex8-span");
ex8Input.addEventListener('keyup',()=>{
    ex8Input.value ? ex8Button.disabled = false : ex8Button.disabled = true;
});
ex8Button.addEventListener("click", () => {
    if(isNaN(ex8Input.value)){
        ex8Span.style.color = 'red';
        ex8Span.textContent = `Error: Please enter a valid number!`
    }
    else{
        const fahrenheit = convertCTemp(ex8Input.value, "F");
        ex8Span.style.color = 'black'
        ex8Span.textContent = `Result: ${fahrenheit} F`
    }   
})

function convertCTemp(temp, destUnit){
    if(destUnit == 'F'){
        const fahrenheit = temp * (9/5) + 32;
        return Math.round((fahrenheit + Number.EPSILON) * 100) / 100;
    }
    else if(destUnit == 'C'){
        return temp;
    }
    else{
        const kelvin = temp + 273.15;
        return Math.round((kelvin + Number.EPSILON) * 100) / 100;;
    }
}

function convertFTemp(temp, destUnit){
    if(destUnit == 'C'){
        const celsius = (temp - 32) * (5/9);
        return Math.round((celsius + Number.EPSILON) * 100) / 100;
    }
    else if(destUnit == 'F'){
        return temp;
    }
    else{
        const celsius = (temp - 32) * (5/9);
        const kelvin = celsius + 273.15;
        return Math.round((kelvin + Number.EPSILON) * 100) / 100;
    }
}

function convertKTemp(temp, destUnit){
    if(destUnit == 'C'){
        const celsius = temp - 273.15;
        return Math.round((celsius + Number.EPSILON) * 100) / 100;;
    }
    else if(destUnit == 'K'){
        return temp;
    }
    else{
        const celsius = temp - 273.15;
        const fahrenheit = celsius * 9/5 + 32;
        return Math.round((fahrenheit + Number.EPSILON) * 100) / 100;
    }
}

function convertTemperature(tempValue,originUnit, destUnit){
    
    if(isNaN(tempValue)){
        ex9Output.style.color = "red";
        ex9Output.value = `You didn't enter a number!`;
    }
    else{
        let result = undefined;
        const temp = parseFloat(tempValue,10);
        switch(originUnit){
            case 'C':
                result = convertCTemp(temp, destUnit);
                break;
            case 'F':
                result = convertFTemp(temp, destUnit);
                break;
            case 'K':
                result = convertKTemp(temp, destUnit);
                break;
            default:
                console.log("Opss.. something wrong happened!")
        }

        if(result){
            ex9Output.style.color = "black";
            ex9Output.value = `${result} ${outputUnit.value}`
        }

        
    }
}
const ex9Input = document.querySelector("#ex9");
const ex9Button = document.querySelector("#ex9-button");
const ex9Output = document.querySelector("#ex9-output");
const inputUnit = document.querySelector("#ex9-input-unit");
const outputUnit = document.querySelector("#ex9-output-unit")
ex9Input.addEventListener('keyup',()=>{
    ex9Input.value ? ex9Button.disabled = false : ex9Button.disabled = true;
});
ex9Button.addEventListener("click",() => convertTemperature(ex9Input.value, inputUnit.value, outputUnit.value))


const ex10Input1 = document.querySelector("#ex10-input1");
const ex10Input2 = document.querySelector("#ex10-input2");
let isNum1 = false;
let isNum2 = false;
const ex10Button = document.querySelector("#ex10-button");
const ex10Span1 = document.querySelector("#ex10-span1");
const ex10Span2 = document.querySelector("#ex10-span2");
const ex10Span3 = document.querySelector("#ex10-span3");
const operator = document.querySelector("#ex10-calc-select");

ex10Input1.addEventListener('keyup',()=>{
    isNum1 = !(isNaN(ex10Input1.value) || ex10Input1.value == "");
    if(isNum1){
        ex10Span1.textContent = "";
    }
    if(isNum1 && isNum2){
        ex10Button.disabled = false;   
    }
    else{
        ex10Button.disabled = true;
        if(!isNum1){
            ex10Span1.style.color = 'red';
            ex10Span1.textContent = `Please enter a number!`
        }
    }
})
ex10Input2.addEventListener('keyup',()=>{
    isNum2 = !(isNaN(ex10Input2.value) || ex10Input2.value == "");
    if(isNum2){
        ex10Span2.textContent = "";
    }
    if(isNum1 && isNum2){
        ex10Button.disabled = false;
    }
    else{
        ex10Button.disabled = true;
        if(!isNum2){
            ex10Span2.style.color = 'red';
            ex10Span2.textContent = `Please enter a number!`
        } 
    }
})

function sum(a, b){
	return a + b;
}

function sub(a, b){
	return a - b;
}

function multi(a, b){
	return a * b;
}

function div(a, b){
	return a / b;
}

function calculator(operator, num1, num2){
    switch(operator){
        case "+":
            return sum(num1,num2);
        case "-":
            return sub(num1,num2);
        case "*":
            return multi(num1,num2);
        case "/":
             return div(num1, num2);
        default:
            console.log("ops... something went wrong");
    }
}

ex10Button.addEventListener('click',()=>{
    const result = calculator(operator.value,  parseInt(ex10Input1.value, 10), parseInt(ex10Input2.value, 10));
    ex10Span3.textContent = result;
});



let input="";
let answer = undefined;
const result = document.querySelector("#calc-result");
const btn0 = document.querySelector("#ex11-btn-0");
btn0.addEventListener('click',()=> {
    if((answer || (result.textContent == 'Result: Please enter 2 numbers!!!')) && (!calcOperator)){
        clear();
    }
    display(btn0.value);
    input += btn0.value;
    //nums.push(parseInt(btn0.value, 10));
});

const btn1 = document.querySelector("#ex11-btn-1");
btn1.addEventListener('click', ()=> {
    if((answer || (result.textContent == 'Result: Please enter 2 numbers!!!')) && (!calcOperator)){
        clear();
    }
    display(btn1.value);
    input += btn1.value;
    //nums.push(parseInt(btn1.value, 10));
});

const btn2 = document.querySelector("#ex11-btn-2");
btn2.addEventListener('click', ()=> {
    if((answer || (result.textContent == 'Result: Please enter 2 numbers!!!')) && (!calcOperator)){
        clear();
    }
    display(btn2.value);
    input += btn2.value;
    //nums.push(parseInt(btn2.value, 10));
});

const btn3 = document.querySelector("#ex11-btn-3");
btn3.addEventListener('click', ()=> {
    if((answer || (result.textContent == 'Result: Please enter 2 numbers!!!')) && (!calcOperator)){
        clear();
    }
    display(btn3.value);
    input += btn3.value;
    //nums.push(parseInt(btn3.value, 10));
});

const btn4 = document.querySelector("#ex11-btn-4");
btn4.addEventListener('click', ()=> {
    if((answer || (result.textContent == 'Result: Please enter 2 numbers!!!')) && (!calcOperator)){
        clear();
    }
    display(btn4.value);
    input += btn4.value;
    //nums.push(parseInt(btn4.value,10));
});


const btn5 = document.querySelector("#ex11-btn-5");
btn5.addEventListener('click', ()=> {
    if((answer || (result.textContent == 'Result: Please enter 2 numbers!!!')) && (!calcOperator)){
        clear();
    }
    display(btn5.value);
    input += btn5.value;
    //nums.push(parseInt(btn5.value,10));
});


const btn6 = document.querySelector("#ex11-btn-6");
btn6.addEventListener('click', ()=> {
    if((answer || (result.textContent == 'Result: Please enter 2 numbers!!!')) && (!calcOperator)){
        clear();
    }
    display(btn6.value);
    input += btn6.value;
    //nums.push(parseInt(btn6.value,10));
});


const btn7 = document.querySelector("#ex11-btn-7");
btn7.addEventListener('click', ()=> {
    if((answer || (result.textContent == 'Result: Please enter 2 numbers!!!')) && (!calcOperator)){
        clear();
    }
    display(btn7.value);
    input += btn7.value;
    //nums.push(parseInt(btn7.value,10));

});


const btn8 = document.querySelector("#ex11-btn-8");
btn8.addEventListener('click', ()=> {
    if( (answer || (result.textContent == 'Result: Please enter 2 numbers!!!')) && (!calcOperator)){
        clear();
    }
    display(btn8.value);
    input += btn8.value;
    //nums.push(parseInt(btn8.value,10));
});



const btn9 = document.querySelector("#ex11-btn-9");
btn9.addEventListener('click', ()=> {
    if((answer || (result.textContent == 'Result: Please enter 2 numbers!!!')) && (!calcOperator)){
        clear();
    }
    display(btn9.value);
    input += btn9.value;
    //nums.push(parseInt(btn9.value,10));
});


const btnSum = document.querySelector("#ex11-btn-sum");
btnSum.addEventListener('click', ()=> {
    display(btnSum.value);
    input += btnSum.value;
    catchOperator(btnSum.value)
})


const btnSub = document.querySelector("#ex11-btn-sub");
btnSub.addEventListener('click', ()=> {
    display(btnSub.value);
    input += btnSub.value;
    catchOperator(btnSub.value)
})


const btnMul = document.querySelector("#ex11-btn-mul");
btnMul.addEventListener('click', ()=> {
    display(btnMul.value);
    input += btnMul.value;
    catchOperator(btnMul.value)
})

const btnDiv = document.querySelector("#ex11-btn-div");
btnDiv.addEventListener('click', ()=> {
    display(btnDiv.value);
    input += btnDiv.value;
    catchOperator(btnDiv.value)
})

const equalBtn = document.querySelector("#ex11-btn-equ");
equalBtn.addEventListener('click' , ()=>{
    const nums = input.split(calcOperator);
    const [num1, num2] = nums;
    if((nums.length == 2) && (num1 != "") && (num2 !== "") ){
        //debugger;
        answer  = calculator(calcOperator, parseFloat(num1, 10), parseFloat(num2, 10));
        result.textContent = `Result: ${answer}`;
        input = "";
        input += answer.toString();
    }else{
        result.textContent = 'Result: Please enter 2 numbers!!!';
        input = "";

    }
    
    calcOperator = "";

})

const pointBtn = document.querySelector("#ex11-btn-point");
pointBtn.addEventListener('click', ()=>{
    input += pointBtn.value;
    display(pointBtn.value);
    console.log(input);
    //debugger;
})


const clearBtn = document.querySelector("#ex11-btn-c");
clearBtn.addEventListener("click", ()=>{
    clear();
})


function display(value){
    result.textContent += value;
}

function clear(){
    result.textContent = "Result:";
    answer = undefined;
    input = "";
}

let calcOperator="";
function catchOperator(value){
    calcOperator = value;
}
