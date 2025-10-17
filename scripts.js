// Get the element you want to rotate
const elements = document.getElementsByClassName("kaleidoscope-inner");

// Add a scroll event listener to the window
window.addEventListener('scroll', () => {
    // Get the current vertical scroll position
    const scrollPosition = window.pageYOffset;

    // Calculate the rotation angle based on scroll position
    // You can adjust the divisor to control the rotation speed
    const rotationAngleStart = 30;
    const rotationAngle = rotationAngleStart + (scrollPosition / 50); // Example: 1 degree per 5px scrolled

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        if (i == 0) {
            // Apply the rotation to the element's transform style
            element.style.transform = `rotate(${rotationAngle}deg)`;
        } else if (i == 1) {
            element.style.transform = `scaleX(-1) rotate(${rotationAngle}deg)`;
        } else if (i == 2) {
            element.style.transform = `scaleY(-1) rotate(${rotationAngle}deg)`;
        } else {
            element.style.transform = `scaleX(-1) scaleY(-1) rotate(${rotationAngle}deg)`;
        }
    }

    console.log(rotationAngle);
});