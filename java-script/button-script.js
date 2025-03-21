window.onscroll = function () {
    let button = document.querySelector(".back-to-top");
    let footer = document.querySelector("footer");
    let footerRect = footer.getBoundingClientRect();

    // Show button when scrolling down
    if (document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }

    // Adjust position if button would overlap footer
    if (footerRect.top < window.innerHeight) {
        button.style.bottom = (window.innerHeight - footerRect.top + 20) + "px";
    } else {
        button.style.bottom = "20px";
    }

    // === Best Fix for Magic Page ===
    if (document.body.classList.contains("magic-page")) {
        let table = document.querySelector(".shards-table");
        if (table) { // Make sure table exists
            let tableRect = table.getBoundingClientRect();
            let buttonBottom = parseInt(button.style.bottom, 10);

            // Only move button up if it's actually overlapping the table
            if (tableRect.top < window.innerHeight - 40) {
                button.style.bottom = Math.min(50, buttonBottom + 10) + "px"; // Small lift
            } else {
                button.style.bottom = "20px"; // Default position
            }
        }
    }
};
