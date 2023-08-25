let convertButton = document.querySelector("#buttonConvertValues")

function converted() {

    let inputValue = document.querySelector("#inputValues").value
    let selectsReplace = document.querySelector(".selects")

    let dolarToday = 4.65
    let euroToday = 5.20

    if (selectsReplace.value == "dolar") {

        BRL.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

        let result = inputValue / dolarToday
        US.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "UDS"
        }).format(result)

    }

    if (selectsReplace.value == "euro") {

        BRL.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

        let result = inputValue / euroToday

        US.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(result)
    }

}

convertButton.addEventListener("click", converted)