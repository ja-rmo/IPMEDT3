window.onload = function () {
    const theetuinKnop = document.getElementById("js--theetuinKnop");
    const bodegaKnop = document.getElementById("js--bodegaKnop");
    const terugKnop1 = document.getElementById("js--terugKnop1");
    const terugKnop2 = document.getElementById("js--terugKnop2");
    const theetuin = document.getElementById("js--theetuin");
    const bodega = document.getElementById("js--bodega");
    const home = document.getElementById("js--home");
    const body = document.getElementById("js--body");

    theetuinKnop.addEventListener("click", function () {
        fadeIn(home, theetuin);
        body.className = "theetuin"
    });
    bodegaKnop.addEventListener("click", function () {
        fadeIn(home, bodega);
        body.className = "bodega"
    });
    terugKnop1.addEventListener("click", function () {
        fadeIn(theetuin, home);
        body.className = "home"
    });
    terugKnop2.addEventListener("click", function () {
        fadeIn(bodega, home)
        body.className = "home"
    });
}

function fadeIn(first, second) {
    first.style.opacity = 0;
    first.style.transition = "opacity 0.3s";
    setTimeout(() => {
        first.style.display = "none"; second.style.display = "flex";
        second.style.opacity = 1;
        second.style.transition = "opacity 0.5s";
    }, 300);
}
