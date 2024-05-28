document.addEventListener("DOMContentLoaded", () => {
    const makeMoneyBar = document.getElementById("make-money-bar");

    function animateBar() {
        makeMoneyBar.style.transition = "transform 1s linear";
        makeMoneyBar.style.transform = "rotate(360deg)";
        setTimeout(() => {
            makeMoneyBar.style.transition = "none";
            makeMoneyBar.style.transform = "rotate(0deg)";
            animateBar();
        }, 1000);
    }

    animateBar();
});
