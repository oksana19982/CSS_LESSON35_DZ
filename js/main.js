// Тренировочка

// let sign_up = document.getElementById("sign_up")
// sign_up.style.backgroundColor = "transparent"
// sign_up.style.color = "#DD3142"
// sign_up.style.border = "1px solid black"
//
// let first_input = document.getElementsByTagName("input")
// first_input[0].placeholder = ""
//
// let second_input = document.getElementsByTagName("input")
// second_input[1].placeholder = "example"
//
// let third_input = document.getElementsByTagName("input")
// third_input[2].placeholder = "email@email.com"
//
// let repeat = document.getElementsByTagName("label")
// repeat[4].remove()
//
// let repeat2 = document.getElementById("repeat_password")
// repeat2.remove()
//
// let a = document.getElementById("checkbox")
// a.checked = true
//
// let border = document.getElementsByTagName("input")
// let el = 0;
// for (el in border){
//     border[el].style.borderBottomColor = "red"
// }


$(document).ready(() => {
    $("#name").keypress(function (event) {
        let letter = parseInt(event.key)
        if (isNaN(letter)) {
        } else {
            event.preventDefault()
        }
    });
    $("#username").keypress(function (event) {
        if (event.key === "." || event.key === ",") {
            event.preventDefault()
        }
    })
    let checkbox = $("#checkbox").bind('click', () => {
        if (checkbox.is(":checked")) {
            console.log("Флажок установлен");
        } else {
            console.log("Флажок не установлен");
        }
    })

    $($('#sign_up')).click(() => {
        let input = $("input")
        if ($(input[0]).val() === "") {
            alert("Введите имя")
            return false
        } else if ($(input[1]).val() === "") {
            alert("Введите username")
            return false
        } else if ($(input[2]).val() === "") {
            alert("Введите почту")
            return false
        } else if ($(input[3]).val() === "") {
            alert("Введите пароль")
            return false
        } else if ($(input[4]).val() === "") {
            alert("Повторите пароль")
            return false
        } else if ($(input[3]).val() !== $(input[4]).val()) {
            alert("Пароли не совпадают")
            return false
        } else if ($("#checkbox").prop('checked') === false) {
            alert("Установите флажок")
        } else {
            alert("OKAY")
            return false
        }
    })

    let account = $("#checking")
    account.bind('click', () => {
        $("#title").text("Log in to the system")
        $("#sign_up").text("Sign in")
        let input = $("input")
        input[0].remove()
        input[3].remove()
        input[1].remove()
        let label = $("label")
        label[3].remove()
        label[0].remove()
        label[1].remove()
        $("#check").remove()
        $("#checkbox").remove()
        $("#checking").remove()
    })
})



