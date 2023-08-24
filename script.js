let convertButton = document.querySelector("#buttonConvertValues")

function converted() {

    let inputValue = document.querySelector("#inputValues").value

    let dolarToday= 4.65

    let result = inputValue / dolarToday

    BRL.innerHTML = inputValue

    US.innerHTML = result
    
}

convertButton.addEventListener("click", converted)