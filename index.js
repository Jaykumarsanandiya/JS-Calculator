
let memory = 0;

function toRadians(angle) {
    return angle * (Math.PI / 180);
}

function toDegree(angle) {
    return angle * (180 / Math.PI);
}


let output = document.getElementById("output");

let buttons = document.querySelectorAll("button");


let screenValue = "";
for (button of buttons) {
    button.addEventListener('click', (e) => {
        buttontext = e.target.innerText;
        console.log("button is ", buttontext);

        if (buttontext == 'X') {
            buttontext = '*';
            screenValue += buttontext;

        }
        // Row 1

        else if (buttontext == 'MC') {

            memory = 0;
        }
        else if (buttontext == 'MS' || buttontext == 'M+') {



            screenValue = eval(screenValue);
            memory += screenValue;
            screenValue = eval(screenValue).toString();


        }
        else if (buttontext == 'M-') {

            screenValue = eval(screenValue);
            memory += - screenValue;
            screenValue = eval(screenValue).toString();


        }
        else if (buttontext == 'MR') {

            screenValue = memory;
            screenValue = eval(screenValue).toString();
        }


        else if (buttontext == '<-') {
            screenValue = screenValue.substring(0, screenValue.length - 1);

        }
        else if (buttontext == 'C') {
            screenValue = "";
        }
        else if (buttontext == '=') {
            try {
                screenValue = eval(screenValue).toString();
            }
            catch (e) {
                screenValue = "Error";
            }


        }
        else if (buttontext == 'console') {
            console.log(typeof (screenValue));
        }
        else if (buttontext == 'sin') {
            screenValue = eval(screenValue);
            let trigoRadio = document.querySelector('input[name="trigoRadio"]:checked').value;
            let radian = screenValue;
            if (trigoRadio == 'degree') {
                radian = toRadians(screenValue);
            }

            screenValue = Math.sin(radian).toString();
        }

        else if (buttontext == 'sin-1') {
            screenValue = eval(screenValue);
            let trigoRadio = document.querySelector('input[name="trigoRadio"]:checked').value;
            if (trigoRadio == 'degree')
                screenValue = toDegree(Math.asin(screenValue)).toString();
            else {
                screenValue = Math.asin(screenValue).toString();
            }

        }
        else if (buttontext == 'cos') {
            screenValue = eval(screenValue);
            let trigoRadio = document.querySelector('input[name="trigoRadio"]:checked').value;
            let radian = screenValue;
            if (trigoRadio == 'degree') {
                radian = toRadians(screenValue);
            }

            screenValue = Math.cos(radian).toString();
        }

        else if (buttontext == 'cos-1') {
            screenValue = eval(screenValue);
            let trigoRadio = document.querySelector('input[name="trigoRadio"]:checked').value;
            if (trigoRadio == 'degree')
                screenValue = toDegree(Math.acos(screenValue)).toString();
            else {
                screenValue = Math.acos(screenValue).toString();
            }

        }
        else if (buttontext == 'tan') {
            screenValue = eval(screenValue);
            let trigoRadio = document.querySelector('input[name="trigoRadio"]:checked').value;
            let radian = screenValue;
            if (trigoRadio == 'degree') {
                radian = toRadians(screenValue);
            }

            screenValue = Math.tan(radian).toString();
        }

        else if (buttontext == 'tan-1') {
            screenValue = eval(screenValue);
            let trigoRadio = document.querySelector('input[name="trigoRadio"]:checked').value;
            if (trigoRadio == 'degree')
                screenValue = toDegree(Math.atan(screenValue)).toString();
            else {
                screenValue = Math.atan(screenValue).toString();
            }

        }
        else if (buttontext == 'π') {
            screenValue += Math.PI;
        }
        else if (buttontext == 'e') {
            screenValue += Math.E;
        }
        else if (buttontext == 'x^2') {
            screenValue = eval(screenValue).toString();
            screenValue = Math.pow(screenValue, 2).toString();
        }
        else if (buttontext == '√x') {
            screenValue = eval(screenValue).toString();
            screenValue = Math.sqrt(screenValue).toString();
        }
        else if (buttontext == '1/x') {
            screenValue = eval(screenValue).toString();
            if (screenValue != 0) {
                screenValue = 1 / screenValue;
            } else {
                screenValue = "can't divide by 0 ";
            }
        }
        else if (buttontext == '|x|') {
            screenValue = eval(screenValue).toString();
            if (screenValue < 0) {
                screenValue *= -1;
            }
        }
        else if (buttontext == 'x^y') {
            buttontext = '**';
            screenValue += buttontext;
            console.log(screenValue);
        }
        else if (buttontext == 'exp') {
            screenValue = eval(screenValue).toString();
            screenValue = Math.pow(Math.E, screenValue).toString();
        }
        else if (buttontext == '10^x') {
            screenValue = eval(screenValue).toString();
            screenValue = Math.pow(10, screenValue).toString();
        }
        else if (buttontext == 'log') {
            screenValue = eval(screenValue).toString();
            screenValue = Math.log10(screenValue).toString();
        }
        else if (buttontext == 'ln') {
            screenValue = eval(screenValue).toString();
            screenValue = Math.log(screenValue).toString();
        }
        else if (buttontext == 'mod') {
            buttontext = '%';
            screenValue += buttontext;


        }
        else if (buttontext == '+/-') {
            if (screenValue >= 0) {
                screenValue = '-' + screenValue
            } else {
                screenValue = (screenValue) * -1;
            }

        }
        else if (buttontext == 'n!') {
            screenValue = eval(screenValue).toString();
            let mul = 1;
            for (let i = 1; i <= screenValue; i++) {
                mul *= i;
            }
            if (screenValue - Math.floor(screenValue) > 0) {
                screenValue = "Not Integer!";
            } else {
                screenValue = mul.toString();
            }

            console.log(screenValue);
        }
        else if (buttontext != 'INV') {
            screenValue += buttontext;
        }
        output.value = screenValue;
    })
}

