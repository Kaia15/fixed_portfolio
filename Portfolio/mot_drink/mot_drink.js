var banner_text = "Welcome to my journey";
var arr1 = banner_text.split("");

function textLoop() {
    if (arr1.length > 0) {
        document.getElementsById("banner").innerHTML += arr1.shift();
    } else {
        document.getElementsById("banner") = "";
        arr1 = banner_text.split("");
    }
    loopTimer = setTimeout('frameLooper()',70);
}
textLoop();
