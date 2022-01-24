window.onload = function() {
    const theetuinKnop = document.getElementById("js--theetuinKnop");
    const bodegaKnop = document.getElementById("js--bodegaKnop");
    const terugKnop = document.getElementById("js--terugKnop");
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
    terugKnop.onclick = () => {
        theetuin.style.display = "none";
        bodega.style.display = "none";
        home.style.display = "flex";
    }
}