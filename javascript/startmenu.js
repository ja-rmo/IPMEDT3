window.onload = function() {
    const theetuinKnop = document.getElementById("js--theetuinKnop");
    const bodegaKnop = document.getElementById("js--bodegaKnop");
    const terugKnop1 = document.getElementById("js--terugKnop1");
    const terugKnop2 = document.getElementById("js--terugKnop2");
    const theetuin = document.getElementById("js--theetuin");
    const bodega = document.getElementById("js--bodega");
    const home = document.getElementById("js--home");

    theetuinKnop.onclick = () => {
        home.style.display = "none";
        theetuin.style.display = "flex";
    }
    bodegaKnop.onclick = () => {
        home.style.display = "none";
        bodega.style.display = "flex";
    }
    terugKnop1.onclick = () => {
        theetuin.style.display = "none";
        bodega.style.display = "none";
        home.style.display = "flex";
    }
    terugKnop2.onclick = () => {
        theetuin.style.display = "none";
        bodega.style.display = "none";
        home.style.display = "flex";
    }
}