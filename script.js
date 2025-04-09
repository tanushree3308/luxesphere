function hamburger() {
    const navbar = document.querySelector(".dropdown");

    // Toggle class to show/hide dropdown
    if (navbar.style.transform === "translateY(0px)") {
        navbar.style.transform = "translateY(-500px)"; // Hide dropdown
    } else {
        navbar.style.transform = "translateY(0px)"; // Show dropdown
    }
}

// Close dropdown when clicking the "X" button
document.querySelector(".cancel").addEventListener("click", function () {
    document.querySelector(".dropdown").style.transform = "translateY(-500px)";
});
