// Get the element you want to rotate
const elements1 = document.getElementsByClassName("kaleidoscope-inner");
const elements2 = document.getElementsByClassName("kaleidoscope-inner-flowers");

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Get the current vertical scroll position
    const scrollPosition = window.pageYOffset;

    // Calculate the rotation angle based on scroll position
    // You can adjust the divisor to control the rotation speed
    const rotationAngleStart = 30;
    const rotationAngle1 = rotationAngleStart + (scrollPosition / 50); // Example: 1 degree per 5px scrolled
    const rotationAngle2 = rotationAngleStart + (scrollPosition / 25); // Example: 1 degree per 5px scrolled

    for (let i = 0; i < elements1.length; i++) {
        const element1 = elements1[i];
        const element2 = elements2[i];

        if (i == 0) {
            // Apply the rotation to the element's transform style
            element1.style.transform = `rotate(${rotationAngle1}deg)`;
            element2.style.transform = `rotate(${rotationAngle2}deg)`;
        } else if (i == 1) {
            element1.style.transform = `scaleX(-1) rotate(${rotationAngle1}deg)`;
            element2.style.transform = `scaleX(-1) rotate(${rotationAngle2}deg)`;
        } else if (i == 2) {
            element1.style.transform = `scaleY(-1) rotate(${rotationAngle1}deg)`;
            element2.style.transform = `scaleY(-1) rotate(${rotationAngle2}deg)`;
        } else {
            element1.style.transform = `scaleX(-1) scaleY(-1) rotate(${rotationAngle1}deg)`;
            element2.style.transform = `scaleX(-1) scaleY(-1) rotate(${rotationAngle2}deg)`;
        }
    }
});