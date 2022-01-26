audio = {
    1: () => {
        audioimport = new Audio("theetuin_modellen/theetuin1.mp3")
        audioimport.play()
    },
    2: () => {
        audioimport = new Audio("theetuin_modellen/theetuin2.mp3")
        audioimport.play()
    }
}

locatie = {
    locatie1: "-5.60 1.6 0.50",
    locatie2: "4.60 1.5 5.70",
    locatie3: "2.60 1.5 5.63"
}

start_scene = () => {
    walk_interval(locatie.locatie1, 5000, 2000, "walk1")
    play_audio_interval(1, 9000, "audio1")
    wait_interval(43000, "wait1", scene2)
}

scene2 = () => {
    walk_interval(locatie.locatie2, 6000, 2000, "walk2")
    play_audio_interval(2, 10000, "audio2")
    wait_interval(20000, "wait2", scene3)
}

scene3 = () => {
    walk_interval(locatie.locatie3, 7000, 0, "walk3")
    tonenstapblokken(12000)
}

teleportCamera = (new_camera_position, duration) => {
    const ingame_camera_element = document.getElementById("js--camera")
    let movement_animation = document.createAttribute("animation")
    movement_animation.value = `property: position; easing: linear; dur: ${duration}; to: ${new_camera_position}`
    ingame_camera_element.setAttribute("animation", movement_animation.value)
}

play_audio_interval = (num_audio, dur, intervalnaam) => {
    intervalnaam = setInterval(() => {
        audio[num_audio]()
        stop_interval(intervalnaam)
    }, dur)
}

wait_interval = (dur, intervalnaam, func) => {
    intervalnaam = setInterval(() => {
        if (func) { func() }
        stop_interval(intervalnaam)
    }, dur)
}

walk_interval = (pos, dur1, dur2, intervalnaam) => {
    intervalnaam = setInterval(() => {
        teleportCamera(pos, dur1)
        stop_interval(intervalnaam)
    }, dur2)
}

stop_interval = (intervalnaam) => {
    clearInterval(intervalnaam)
}

setInterval(() => {
    console.log(document.querySelector('#js--camera').getAttribute('position'))
}, 5000)

AFRAME.registerComponent("lopen", {
    init: function () {
        this.lopen = () => {
            teleportCamera(`${this.el.getAttribute("position").x} 1.5 ${this.el.getAttribute("position").z}`, 4000)
        }

        this.el.addEventListener("mouseenter", this.lopen)
    }
});

tonenstapblokken = (dur) => {
    intervallopen = setInterval(() => {
        const tiles = document.querySelectorAll("[lopen]");
        for (i = 0; i < tiles.length; i++) {
            tiles[i].setAttribute("position", `${tiles[i].getAttribute("position").x} 0 ${tiles[i].getAttribute("position").z}`)
        }
        clearInterval(intervallopen)
    }, dur)
}

main = () => {
    start_scene()
}