function getPin() {
    const getNumber = Math.random() * 10000;
    const pin = (getNumber + '').split('.')[0];

    if (pin.length === 4) {
        return pin; 
    }
    else {
        return getPin();
    }
}

   // Display Generate Pin

function generatePin() {
    const inputPin = document.querySelector('#input-pin').value = getPin();
}

// input box Type Number Event Listener 

const buttonNumber = document.querySelector('#digits-clicks').addEventListener('click', function (number) {
    const digit = number.target.innerText;
    if (isNaN(digit)) {
        // clearIt()
        // backSpace() 
        console.log('This is Not a Number');
    }
    
    else{
        const typeInput = document.querySelector('#type-pin');
        typeInput.value = typeInput.value + digit;
        
    }
})

// submit Button machin "varifiy Pin" Pin Number

function varifiyPin() {
    const generatePin = document.querySelector('#input-pin').value;
    const typePin = document.querySelector('#type-pin').value;
    if (generatePin === typePin) {
     
        displayRagelt("block", "none");

           // const pinCrest = document.querySelector('#pin-match');
        // pinCrest.style.display = "block";
        
        // const panInkret = document.querySelector('#pindid-match');
        // panInkret.style.display = "none";

    }
    else {
        
        displayRagelt("none", "block");
        // const panInkret = document.querySelector('#pindid-match');
        // panInkret.style.display = "block";

        // const pinCrest = document.querySelector('#pin-match');
        // pinCrest.style.display = "none";


    }
    countButton()
}

// display Notification Massage

function displayRagelt(crestPine, increstPin) {
    const pinCrest = document.querySelector('#pin-match');
    pinCrest.style.display = crestPine;
        
    const panInkret = document.querySelector('#pindid-match');
    panInkret.style.display = increstPin;
}

//button counter

function countButton() {
    let clicks = 0;
    // clicks += 1;
    clicks = +1;

    document.getElementById("action-click").innerHTML = clicks;

}

//clear Button (C)
function clearIt() {
    document.getElementById('type-pin').value = "";
}

//bakspace Button (B)
function backSpace() {
    var bsp = document.getElementById("type-pin").value;
    document.getElementById("type-pin").value = bsp.substring(0, bsp.length - 1);
}