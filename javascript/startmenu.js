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
        body.style.backgroundSize = "100vw 100vh";
        body.style.backgroundPosition = 0;
        // body.style.backgroundImage = null;
        body.style.backgroundImage = "repeating-radial-gradient(circle at 0 0, transparent 0, #f5f5f5 23px), repeating-linear-gradient(#edebe755, #edebe7)";
    });
    bodegaKnop.addEventListener("click", function () {
        fadeIn(home, bodega);
        body.style.backgroundSize = "36px 36px"
        body.style.backgroundPosition = 0
        body.style.backgroundImage = "linear-gradient(135deg, #edebe755 25%, transparent 25%) -18px 0/ 36px 36px, linear-gradient(225deg, #edebe7 25%, transparent 25%) -18px 0/ 36px 36px, linear-gradient(315deg, #edebe755 25%, transparent 25%) 0px 0/ 36px 36px, linear-gradient(45deg, #edebe7 25%, #f5f5f5 25%) 0px 0/ 36px 36px;";
    });
    terugKnop1.addEventListener("click", function () {
        fadeIn(theetuin, home);
        body.style.backgroundSize = "20px 35px"
        body.style.backgroundPosition = "0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px";
        body.style.backgroundImage = null;
        body.style.backgroundImage = "linear-gradient(30deg, #edebe7 12%, transparent 12.5%, transparent 87%, #edebe7 87.5%, #edebe7), linear-gradient(150deg, #edebe7 12%, transparent 12.5%, transparent 87%, #edebe7 87.5%, #edebe7), linear-gradient(30deg, #edebe7 12%, transparent 12.5%, transparent 87%, #edebe7 87.5%, #edebe7), linear-gradient(150deg, #edebe7 12%, transparent 12.5%, transparent 87%, #edebe7 87.5%, #edebe7), linear-gradient(60deg, #edebe777 25%, transparent 25.5%, transparent 75%, #edebe777 75%, #edebe777), linear-gradient(60deg, #edebe777 25%, transparent 25.5%, transparent 75%, #edebe777 75%, #edebe777);"
    });
    terugKnop2.addEventListener("click", function () {
        fadeIn(bodega, home)
        body.style.backgroundSize = "20px 35px"
        body.style.backgroundPosition = "0 0, 0 0, 10px 18px, 10px 18px, 0 0, 10px 18px";
        body.style.backgroundImage = null;
        body.style.backgroundImage = "linear-gradient(30deg, #edebe7 12%, transparent 12.5%, transparent 87%, #edebe7 87.5%, #edebe7), linear-gradient(150deg, #edebe7 12%, transparent 12.5%, transparent 87%, #edebe7 87.5%, #edebe7), linear-gradient(30deg, #edebe7 12%, transparent 12.5%, transparent 87%, #edebe7 87.5%, #edebe7), linear-gradient(150deg, #edebe7 12%, transparent 12.5%, transparent 87%, #edebe7 87.5%, #edebe7), linear-gradient(60deg, #edebe777 25%, transparent 25.5%, transparent 75%, #edebe777 75%, #edebe777), linear-gradient(60deg, #edebe777 25%, transparent 25.5%, transparent 75%, #edebe777 75%, #edebe777);"
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
