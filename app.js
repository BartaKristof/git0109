let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let count = 0;

function resultColor(){
    if(count == 0){
        result.style.color = "black";
    }

    else if(count < 0){
        result.style.color = "red";
    }

    else if(count > 0){
        document.getElementById("result").style.color = "green";
    }
}

function addResult(){
    count++;
    result.textContent = count;
    resultColor();
}

function subResult(){
    count--;
    result.textContent = count;
    resultColor();
}

plus.addEventListener("click", addResult);

minus.addEventListener("click", subResult);

