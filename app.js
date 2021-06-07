function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        
        navLinks.forEach(link => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade ease forwards`;
            }
        });
        burger.classList.toggle("toggle");
    });
    
}

navSlide();