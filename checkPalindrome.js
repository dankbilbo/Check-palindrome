function isPalindrome(str) {
    if (str.length == 1 || str.length == 0) {
        return true;
    }
    if (str.charAt(0) != str.charAt(str.length - 1)) {
        return false;
    }
    return isPalindrome(str.substring(1, str.length - 1));
}

function checkPalindrome() {
    let strEntered = document.getElementById("stringEntered").value
    if (isPalindrome(strEntered) == true) {
        document.getElementById("result").innerHTML = "TRUE";
    } else {
        document.getElementById("result").innerHTML = "false";
    }
}