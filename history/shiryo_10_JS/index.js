function hello() {
    alert("Hello!");
}

function color() {
    document.getElementById("color").style.color = "green";
}

function color_2() {
    document.getElementById("color_2").classList.toggle("color_2");
}

function bottom() {
    document.getElementById("bottom").scrollIntoView(
        {
            behavior: 'smooth',
        }
    );
}

function jump() {
    document.getElementById("jump").scrollIntoView(
        {
            behavior: 'smooth',
        }
    );
}
