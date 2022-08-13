function openMobileMenu() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("menu-background").style.display = "block";
}

function closeMobileMenu() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("menu-background").style.display = "none";
}

let i = 0;
const txt = 'Dakota Hanks';
const speed = 50;


// Add typerwriter animation to hero text
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("hero-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// set the display of hero text to block so that the animation doesnt play while invisible
function setBlock() {
    document.getElementById("hero-text").style.display = "block";
    typeWriter();
}
setTimeout(setBlock, 2000);