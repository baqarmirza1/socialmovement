document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to M->ap!");
    const houses = document.querySelectorAll(".house");

    houses.forEach((house) => {
        house.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.2s";
        });

        house.addEventListener("mouseout", function() {
            this.style.transform = "scale(1)";
            this.style.transition = "transform 0.2s";
        });
        house.addEventListener("click", function() {
            this.classList.toggle("selected");
        });
    });
  
});