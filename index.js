let display = document.getElementById('display')

// line1
function clearAll(){
    display.value = ''
}

function negate(){
    // display.value += ''
    let currentValue = parseFloat (display.value);

    if (currentValue !== 0){
        // Negate the value
        currentValue = -currentValue;
    }

    display.value = currentValue
}

function percent(){
    display.value += '%'
}

function divide(){
    display.value += '/'
}

// line2
function seven(){
    display.value += '7'
}

function eight(){
    display.value += '8'
}

function nine(){
    display.value += '9'
}

function times(){
    display.value += '*'
}

// line3
function four(){
    display.value += '4'
}

function five(){
    display.value += '5'
}

function six(){
    display.value += '6'
}

function minus(){
    display.value += '-'
}

// line4
function one(){
    display.value += '1'
}

function two(){
    display.value += '2'
}

function three(){
    display.value += '3'
}

function add(){
    display.value += '+'
}

// line5
function zero(){
    display.value += '0'
}

function point(){
    display.value += '.'
}

function equals(){
    display.value = eval(document.getElementById('display').value);
}