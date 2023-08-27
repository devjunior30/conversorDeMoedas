let convertButton = document.querySelector("#buttonConvertValues")
let selectsReplace = document.querySelector(".selects")

function converted() {
    let inputValue = document.querySelector("#inputValues").value
    let dolarToday = 5.2
    let euroToday = 5.20

    if (selectsReplace.value == "dolar") {

        US.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "UDS"
        }).format(inputValue / dolarToday)

        BRL.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)

    }

    if (selectsReplace.value == "euro") {

        US.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)

        BRL.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }

}

function changeSelect() {
    let textCurrency = document.getElementById("changeValue")
    let image = document.getElementById("usa")

    if (selectsReplace.value == "dolar") {
        textCurrency.innerHTML = "Dolar Americano"
        image.src = "/assets/usa.png"
    }

    if (selectsReplace.value == "euro") {
        textCurrency.innerHTML = "Euro"
        image.src = "/assets/euro.png"
    }

    converted()

}

selectsReplace.addEventListener("change", changeSelect)
convertButton.addEventListener("click", converted)

