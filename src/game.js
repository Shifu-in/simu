document.addEventListener("DOMContentLoaded", () => {
    let xp = 0;
    let money = 0;
    let macdActive = false;
    let rsiActive = false;

    const xpWidget = document.getElementById("xp-widget");
    const moneyWidget = document.getElementById("money-widget");

    // Add event listener for tapping on character
    document.getElementById("character").addEventListener("click", (event) => {
        xp += 1;
        displayXp(event.clientX, event.clientY);
        updateWidgets();
    });

    function displayXp(x, y) {
        const xpElement = document.createElement("div");
        xpElement.textContent = "+1 XP";
        xpElement.style.position = "absolute";
        xpElement.style.left = `${x}px`;
        xpElement.style.top = `${y}px`;
        xpElement.style.opacity = 1;
        document.body.appendChild(xpElement);

        setTimeout(() => {
            xpElement.style.transition = "opacity 1s";
            xpElement.style.opacity = 0;
            setTimeout(() => {
                document.body.removeChild(xpElement);
            }, 1000);
        }, 500);
    }

    function updateWidgets() {
        xpWidget.textContent = `XP: ${xp}`;
        moneyWidget.textContent = `$: ${money}`;
    }

    // Income logic
    setInterval(() => {
        let income = 0;
        if (macdActive) income += 10;
        if (rsiActive) income += 4;
        money += income;
        updateWidgets();
    }, 3600000); // Update every hour

    // Make $ section
    document.getElementById("macd-toggle").addEventListener("change", (event) => {
        macdActive = event.target.checked;
    });

    document.getElementById("rsi-toggle").addEventListener("change", (event) => {
        rsiActive = event.target.checked;
    });

    // Work section
    document.getElementById("green-button").addEventListener("click", () => {
        alert("Вы ещё не готовы к этому разговору");
    });

    document.getElementById("red-button").addEventListener("click", () => {
        alert("Вы ещё не готовы к этому разговору");
    });

    // Task section
    document.getElementById("subscribe-button").addEventListener("click", () => {
        // Logic for subscribing to channels and earning coins
        xp += 10000; // Assuming coins are added to xp for simplicity
        updateWidgets();
    });
});
