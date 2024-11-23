function toggleMenu() {
    const menu = document.querySelector('.menu');
    const menuPopup = document.querySelector('.menu-popup');
    menu.classList.toggle('menu-active');
    menuPopup.classList.toggle('menu-active');
}

function showContent(section) {
    var contents = document.getElementsByClassName('content');
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    document.getElementById(section).classList.add('active');
}
document.addEventListener("DOMContentLoaded", function() {
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easedProgress = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
            obj.innerHTML = Math.floor(easedProgress * (end - start) + start).toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onVisibilityChange(el, callback) {
        let old_visible;
        return function() {
            let visible = isElementInViewport(el);
            if (visible != old_visible) {
                old_visible = visible;
                if (visible) {
                    callback();
                }
            }
        }
    }

    const animateNumbers = document.querySelectorAll(".animate-number");

    animateNumbers.forEach(function(element) {
        const target = parseInt(element.getAttribute("data-target"));
        const animate = onVisibilityChange(element, function() {
            animateValue(element, 0, target, 3000);
        });
        window.addEventListener('scroll', animate);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easedProgress = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
            obj.innerHTML = Math.floor(easedProgress * (end - start) + start).toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function onVisibilityChange(el, callback) {
        let old_visible;
        return function() {
            let visible = isElementInViewport(el);
            if (visible != old_visible) {
                old_visible = visible;
                if (visible) {
                    callback();
                }
            }
        }
    }

    const animateNumbers = document.querySelectorAll(".animate-number");

    animateNumbers.forEach(function(element) {
        const target = parseInt(element.getAttribute("data-target"));
        const animate = onVisibilityChange(element, function() {
            animateValue(element, 0, target, 3000);
        });
        window.addEventListener('scroll', animate);
    });
});
document.addEventListener("DOMContentLoaded", function() {
    function animateValue(id, start, end, duration) {
        let range = end - start;
        let current = start;
        let increment = end > start ? 1 : -1;
        let stepTime = Math.abs(Math.floor(duration / range));
        let obj = document.getElementById(id);
        let timer = setInterval(function() {
            current += increment;
            obj.innerHTML = current;
            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    animateValue("number1", 0, 54, 2000);
    animateValue("number2", 0, 38, 2000);
});
const counters = document.querySelectorAll('.number_two');
const speed = 200; // The lower the slower

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;

        // Lower inc to slow and higher to slow
        const inc = target / speed;

        // Check if target is reached
        if (count < target) {
            // Add inc to count and output in counter
            counter.innerText = Math.ceil(count + inc);
            // Call function every ms
            setTimeout(updateCount, 1);
        } else {
            counter.innerText = target;
        }
    };

    // Check if the element is in view
    const isInView = () => {
        const rect = counter.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Add scroll event listener
    window.addEventListener('scroll', () => {
        if (isInView()) {
            updateCount();
        }
    });

    // Initial check
    if (isInView()) {
        updateCount();
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const partners = document.querySelectorAll('.partner');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    partners.forEach(partner => {
        observer.observe(partner);
    });
});

function openPopup(popupId) {
    document.getElementById(popupId).classList.add('show');
}

function closePopup(popupId) {
    document.getElementById(popupId).classList.remove('show');
}
document.addEventListener("DOMContentLoaded", function() {
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.innerText = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    const numbers = [{
        selector: ".n_c-1",
        end: 18
    }, {
        selector: ".n_c-2",
        end: 22
    }, {
        selector: ".n_c-3",
        end: 18746
    }, {
        selector: ".n_c-4",
        end: 675
    }, {
        selector: ".n_c-5",
        end: 18
    }, {
        selector: ".n_c-6",
        end: 18
    }, {
        selector: ".n_c-7",
        end: 70
    }];

    numbers.forEach(num => {
        const element = document.querySelector(num.selector);
        animateValue(element, 0, num.end, 2000);
    });
});

function showContentnew(contentClass) {
    var contents = document.querySelectorAll('.content_v');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });
    document.querySelector('.' + contentClass).style.display = 'block';
}

function scrollLeft() {
    document.querySelector('.news .cards').scrollBy({
        left: -320,
        behavior: 'smooth'
    });
}

function scrollRight() {
    document.querySelector('.news .cards').scrollBy({
        left: 320,
        behavior: 'smooth'
    });
}
document.addEventListener('DOMContentLoaded', function() {
    var splide = new Splide('.splide', {
        type: 'loop',
        perPage: 2,
        gap: 20,
        breakpoints: {
            784: {
                perPage: 1
            }
        }

    });
    splide.mount();
});