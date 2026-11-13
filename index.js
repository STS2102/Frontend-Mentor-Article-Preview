let sharePointer = document.getElementsByClassName("Share-Banner");
let identityPointer = document.getElementsByClassName("Identity-Banner");

let shareButton1 = document.getElementsByClassName("Share-img-box1");
let shareButton2 = document.getElementsByClassName("Share-img-box2");

shareButton1[0].addEventListener("click", function() {
    identityPointer[0].style.display = "none";
    sharePointer[0].style.display = "flex";
})

shareButton2[0].addEventListener("click", function() {
    sharePointer[0].style.display = "none";
    identityPointer[0].style.display = "flex";
})