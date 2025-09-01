// Layout Control Functions
function showSecond() {
    document.querySelector('.second-layout').style.display = 'flex';
    toggleLayoutsBasedOnFirstBtnPopup();
}

function showFirstLayout() {
    document.querySelector('.first-layout').style.display = 'flex';
    toggleLayoutsBasedOnLastBtnPopup();
}

// Popup Control Functions
function showFirstPopup() {
    document.querySelector('.first-popup').style.display = 'block';
    toggleLayoutsBasedOnFirstPopup();
}

function showSecondPopup() {
    document.querySelector('.second-popup').style.display = 'block';
    toggleLayoutsBasedOnSecondPopup();
}

function showLastPopup() {
    document.querySelector('.last-popup').style.display = 'block';
    toggleLayoutsBasedOnLastPopup();
}

// Toggle Logic Helpers
function toggleLayoutsBasedOnFirstPopup() {
    if (isVisible('.first-popup')) {
        showElements('.second-bg');
        hideElements('.first-layout', '.first-bg');
    }
}

function toggleLayoutsBasedOnSecondPopup() {
    if (isVisible('.second-popup')) {
        showElements('.second-bg');
        hideElements('.second-layout', '.first-bg');
    }
}

function toggleLayoutsBasedOnLastPopup() {
    if (isVisible('.last-popup')) {
        showElements('.second-bg');
        hideElements('.first-layout', '.second-layout', '.first-bg');
    }
}

function toggleLayoutsBasedOnLastBtnPopup() {
    if (isVisible('.last-popup')) {
        hideElements('.second-bg', '.last-popup');
        showElements('.first-layout', '.first-bg');
    }
}

function toggleLayoutsBasedOnFirstBtnPopup() {
    if (isVisible('.first-popup')) {
        hideElements('.second-bg');
        showElements('.second-layout', '.first-bg');
        hideElements('.first-popup');
    }
}

// Utility Functions
function isVisible(selector) {
    const el = document.querySelector(selector);
    return el && window.getComputedStyle(el).display === 'block';
}

function showElements(...selectors) {
    selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            el.style.display = sel.includes('layout') ? 'flex' : 'block';
        });
    });
}

function hideElements(...selectors) {
    selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            el.style.display = 'none';
        });
    });
}

// One-Time Audio on First Interaction
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const audio = document.getElementById("first-click-sound");
    let hasPlayed = false;

    container.addEventListener("click", function () {
        if (!hasPlayed) {
            audio.play().catch(() => {});
            hasPlayed = true;
        }
    }, { once: true });
});
