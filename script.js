
const searchInput = document.getElementById("eventSearch");
const eventCards = document.querySelectorAll(".event-card");
const eventCount = document.getElementById("eventCount");
const noResults = document.getElementById("noResults");
const toast = document.getElementById("toast");

let toastTimer;

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2500);
}

// Search events
searchInput.addEventListener("input", function () {
    const searchText = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    eventCards.forEach(function (card) {
        const eventText = card.textContent.toLowerCase();
        const matches = eventText.includes(searchText);

        card.style.display = matches ? "" : "none";

        if (matches) {
            visibleCount++;
        }
    });

    eventCount.textContent = visibleCount + " events";
    noResults.hidden = visibleCount !== 0;
});

// Join event buttons
document.querySelectorAll(".join-btn").forEach(function (button) {
    button.addEventListener("click", function () {
        const eventName = button
            .closest(".event-card")
            .querySelector("h3").textContent;

        showToast("You selected: " + eventName +
                  ". Registration feature coming soon!");
    });
});

// Smooth navigation active links
document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        document.querySelectorAll("nav a").forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});
