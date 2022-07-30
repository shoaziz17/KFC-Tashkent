// STATE
const btnBasket = document.querySelector(".basket");
const btnCart = document.querySelector(".cart");
const btnCancel = document.querySelector(".cancel");
// Logic
btnBasket.addEventListener("click",function () {
    btnCart.classList.toggle("hidden")
});

btnCancel.addEventListener("click", function() {
    btnCart.classList.toggle("hidden")
})