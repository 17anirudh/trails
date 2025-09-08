const button = document.getElementById('double-click');
const root = document.documentElement; // Select the root element
const mainColor = getComputedStyle(root).getPropertyValue('--main-color').trim();

    
button.addEventListener('dblclick', () => {
    setTimeout(() => {
        let color = document.body.style.backgroundColor;
        document.body.style.backgroundColor = color === "white" ? "#0F0E0E" : "white";
    }, 1000);
}) 