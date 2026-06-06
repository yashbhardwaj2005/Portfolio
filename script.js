
    // Typing effect
    const textArray = [
        "Aspiring Software Engineer",
        "Problem Solver",
        "Cloud Enthusiast",
        "DSA Learner"
    ];
    let index = 0, charIndex = 0, isDeleting = false;

    function typeEffect() {
        const el = document.getElementById("typing");
        const current = textArray[index % textArray.length];
        el.textContent = current.substring(0, charIndex + (isDeleting ? 0 : 0));

        if (!isDeleting) {
            el.textContent = current.substring(0, ++charIndex);
        } else {
            el.textContent = current.substring(0, --charIndex);
        }

        if (charIndex === current.length + 1) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
        if (charIndex === 0) {
            isDeleting = false;
            index++;
        }
        setTimeout(typeEffect, isDeleting ? 40 : 90);
    }
    typeEffect();

    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) e.target.classList.add("show");
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".section").forEach(el => {
        el.classList.add("hidden");
        observer.observe(el);
    });
