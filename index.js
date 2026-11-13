let sharePointer = document.getElementsByClassName("Share-Banner");
let identityPointer = document.getElementsByClassName("Identity-Banner");
let authorBadge = document.getElementsByClassName("Icon-Box");
let nameDateBadge = document.getElementsByClassName("Name-Date-Box");
let buttonImage1 = document.getElementsByClassName("B1");

let shareButton1 = document.getElementsByClassName("Share-img-box1");
let shareButton2 = document.getElementsByClassName("Share-img-box2");

let count = 0;

shareButton1[0].addEventListener("click", function() {
    if (matchMedia("(max-width: 26.874rem)").matches) {
        identityPointer[0].style.display = "none";
        sharePointer[0].style.display = "flex";
    }
    if (matchMedia("(min-width: 26.875rem)").matches && count == 0) {
        identityPointer[0].style.display = "flex";
        sharePointer[0].style.display = "flex";
        shareButton1[0].style.backgroundColor = "hsl(212, 23%, 69%)";
        buttonImage1[0].style.filter = "brightness(0) invert(1)";
        count = 1;
    }

    else if (matchMedia("(min-width: 26.875rem)").matches && count == 1) {
        identityPointer[0].style.display = "flex";
        sharePointer[0].style.display = "none";
        shareButton1[0].style.backgroundColor = "hsl(210, 46%, 95%)";
        buttonImage1[0].style.filter = "";
        count = 0;
    }
})

shareButton2[0].addEventListener("click", function() {
    sharePointer[0].style.display = "none";
    identityPointer[0].style.display = "flex";
})
