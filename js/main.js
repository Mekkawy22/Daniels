var typed = new Typed(".animation-js", {
    strings: ["Larry Daniels", "Developer", "Designer"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-end');
            const count = +counter.innerText;

            const increment = target / 200; // You can adjust the increment value for speed

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1); // Adjust the duration as needed
            } else {
                counter.innerText = target; // Ensure it ends at the target
            }
        };

        updateCount();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const firstSection = document.getElementById("Home");
    const firstSectionHeight = firstSection.offsetHeight;

    window.addEventListener("scroll", function () {
        if (window.scrollY > firstSectionHeight) {
            document.querySelector(".navbar").classList.add("scrolled");
        } else {
            document.querySelector(".navbar").classList.remove("scrolled");
        }
    });
});

window.addEventListener('load', () => {
    const loadingOverlay = document.getElementById('loading');
    const content = document.getElementById('content');

    loadingOverlay.classList.add('hidden');
    content.style.display = 'block'; 
});
