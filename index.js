const cardPointer = document.querySelector(".Card");

const shareButton1 = document.querySelector(".Share-img-box1");
const shareButton2 = document.querySelector(".Share-img-box2");

let count = 0;

shareButton1.addEventListener("click", function() {
    if (matchMedia("(max-width: 26.874rem)").matches) {
        cardPointer.classList.add("is-sharing");
    }
    if (matchMedia("(min-width: 26.875rem)").matches && count == 0) {
        cardPointer.classList.add("is-sharing");
        count = 1;
    }

    else if (matchMedia("(min-width: 26.875rem)").matches && count == 1) {
        cardPointer.classList.remove("is-sharing");
        count = 0;
    }
})

shareButton2.addEventListener("click", function() {
    cardPointer.classList.remove("is-sharing");
})
