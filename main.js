function changeColor(newColor) {
    var elem = document.getElementById('para');
    elem.style.color = newColor;
}

function myFunctionYes() {
    var checkYes = document.getElementById("yes");
    var checkNo = document.getElementById("no");

    if (checkYes.checked == true) {
        checkNo.checked = false
            //text.style.display = "block";
    }
}

function myFunctionNo() {
    var checkYes = document.getElementById("yes");
    var checkNo = document.getElementById("no");

    if (checkNo.checked == true) {
        checkYes.checked = false
            //text.style.display = "block";
    }
}