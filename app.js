const user = document.querySelector(".insideText");
const toFar = document.getElementById("Celcious");
const toCelci = document.getElementById("Fahrenheite");
const result = document.querySelector(".result");
const but = document.querySelector(".buttonType");
let temp;
function convert(){
    if(toFar.checked){
        temp = (Number(user.value) * (9/5)) + 32
        result.textContent = `${temp} F`;
    }
    else if(toCelci.checked){
        temp = (5/9)*(Number(user.value)-32);
        result.textContent = `${temp} C`;
    }
}
