let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == '*') {
            buttonText = '*';
            screenValue+=buttonText;
            console.log(screenValue);
             screen.value = screenValue;
        }
        else if(buttonText == 'DEL'){
            screenValue=screenValue.substring(0,screenValue.length-1)
            screen.value=screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = "0";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}






