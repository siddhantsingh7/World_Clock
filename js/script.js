//select all the DOM

const display1E1 = document.querySelector('.display-1');
const display2E1 = document.querySelector('.display-2');
const tempResultE1 = document.querySelector('.temp-result');
const numbersE1 = document.querySelectorAll('.number');
const operationE1 = document.querySelectorAll('.operation');
const equalE1 = document.querySelector('.equal');
const clearAllE1 = document.querySelector('.all-clear');
const clearLastE1 = document.querySelector('.last-entity-clear');

//declare required variable

let dis1Num = '';
let dis2Num = '';
let result = null;
let lastOperation = '';
let haveDot = false;

//add event listener to every number

numbersE1.forEach( number => {
    number.addEventListener('click', (e)=> {
        if (e.target.innerText === '.' && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === '.' && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        display2E1.innerText = dis2Num;
    })
});

// add event listerner to every operation
operationE1.forEach( operation => {
    operation.addEventListener('click', (e) => {
        if (!dis2Num) {
            return;
        }
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            //user defined function call
            mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }
        //user defined function call
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    })
});

//clearing and shifting value from 2 to 1 & showing temporerly
function clearVar(name = '') {
    dis1Num += dis2Num + '' + name + '';
    display1E1.innerText = dis1Num;
    display2E1.innerText = '';
    dis2Num = '';
    tempResultE1.innerText = result;
}

//function defination
function mathOperation() {
    if (lastOperation === '*') {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === '+') {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === '-') {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === '/') {
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === '%') {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}

//event listner for equal button
equalE1.addEventListener('click', (e) => {
    if (!dis1Num || !dis2Num) {
        return;
    }
    haveDot = false;
    mathOperation();
    clearVar();
    display2E1.innerText = result;
    tempResultE1.innerText = '';
    dis2Num = result;
    dis1Num = '';
});

clearAllE1.addEventListener('click', (e) => {
    display1E1.innerText = '0';
    display2E1.innerText = '0';
    dis1Num = '';
    dis2Num = '';
    result = '';
    tempResultE1.innerText = '0';
});

clearLastE1.addEventListener('click', (e) => {
    display2E1.innerText = '';
    dis2Num = '';
});

//use keyword to get number
window.addEventListener('keydown', (e) => {
    if (
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9'
    ) {
        clickButtonE1(e.key);
    } else if (
      
        e.key === '+' ||
        e.key === '-' ||
        e.key === '/'
    ) {
        clickOperation(e.key);
    } else if (e.key === '*') {
        clickOperation('X');
    } else if (e.key === 'Enter' || e.key === '=') {
        clickEqual();
    } 

});

function clickButtonE1(key) {
    numbersE1.forEach(button => {
        if (button.innerText === key) {
            button.click();
        }
    })
}

function clickOperation(key) {
    operationE1.forEach(button => {
        if (button.innerText ===key) {
            button.click();
        }
    })
}

function clickEqual() {
    equalE1.click();
}

//Word Counter
let textbox = document.getElementById("textbox");

textbox.addEventListener('input', function(){
    var text = this.value;
    let char = text.length;
    document.getElementById("char").innerHTML = char;

    text = text.trim();
    let words = text.split(" ");
    let cleanlist = words.filter(function(elm){
        return elm != " ";
    }) 
        document.getElementById("word").innerHTML = cleanlist.length;
)};

//Temperature convertor
var cel = document.getElementById("cel");
var fah = document.getElementById("fah");
var kel = document.getElementById("kel");
    
cel.addEventListener('input', function(){
    let c = this.value;
    let f = (c * 9/5) + 32;
    let k = (c * 1) + 273.15;
    
    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }
    fah.value = f;
    
    if(!Number.isInteger(k)){
        k = k.toFixed(4);
    }
        kel.value = k;
});
    
fah.addEventListener('input', function(){
    let f = this.value;
    let c = (f - 32) * 5/9;
    let k = (f - 32) * 5/9 + 273.15;
    
    if(!Number.isInteger(c)){
    c = c.toFixed(4);
    }
        cel.value = c; 
    
    if(!Number.isInteger(k)){
        k = k.toFixed(4);
    }
    kel.value = k;
});
    
 kel.addEventListener('input', function(){
    let k = this.value;
    let c = (c * 1) - 273.15;
    let f = (f - 273.15) * 9/5 + 32 ;
    
    if(!Number.isInteger(c)){
        c = c.toFixed(4);
    }
        cel.value = c; 
    
    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }
    fah.value = f; 
});
    