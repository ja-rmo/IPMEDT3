let positions = {
    "start":"7.21 -1.5 -26.24",
    1:"-16.93, 1.6, -3.87",
    2:"-11.83, 1.6, -9.53",
    3:"1.6 1.6 -7.1",
}

audio = {
    1: () => {
        let audio = new Audio('sounds/bodega1.mp3');
        audio.play();
    },
    2: () => {
        let audio = new Audio('sounds/bodega2.mp3');
        audio.play();
    },
    3: () => {
        let audio = new Audio('sounds/bodega3.mp3');
        audio.play();
    }
}

start_scene = () => {
    console.warn("GAME START")
    const intv_start = new Interval("intv_start")
    intv_start.start_interval(positions[3], 3000, 5000, document.getElementById("js--light1"), true)
}

end_start = () => {
    const end_start = new Interval("end_start")
    end_start.start_interval(positions[1], 4000, 3000)
}

scene1 = () => {
    const audio1 = new Interval("audio1")
    const wait1 = new Interval("wait1")
    audio1.play_audio_interval(1, 4000)
    wait1.wait_interval(43000, scene2, document.getElementById("js--light1"), document.getElementById("js--light2"))
}

scene2 = () => {
    const walk2 = new Interval("walk2")
    const audio2 = new Interval("audio2")
    const wait2 = new Interval("wait2")
    walk2.walk_interval(positions[2], 3000, 2000)
    audio2.play_audio_interval(2, 6500)
    wait2.wait_interval(40000, scene3, document.getElementById("js--light2"), document.getElementById("js--light3"))
}

scene3 = () => {
    const walk3 = new Interval("walk3")
    const audio3 = new Interval("audio3")
    const wait3 = new Interval("wait3")
    walk3.walk_interval(positions[3], 5000, 2000)
    audio3.play_audio_interval(3, 8500)

    anm_crown = setInterval(() => {
        const el = document.querySelector("[crown_animation]").components.crown_animation
        el.start()
        clearInterval(anm_crown)
    }, 10000)

    wait3.wait_interval(33000, end_game)
}

end_game = () => {
    const tiles = document.querySelectorAll("[walk]");
    for(let i = 0; i<tiles.length; i++){
        tiles[i].setAttribute("position", `0 -3.5 ${tiles[i].getAttribute("position").z}`)
    }
    ambientLight(true)
}

teleportCamera = (new_camera_position, duration) =>{
    const ingame_camera_element = document.getElementById("js--camera")
    let movement_animation = document.createAttribute("animation")
    movement_animation.value = `property: position; easing: linear; dur: ${duration}; to: ${new_camera_position}`
    ingame_camera_element.setAttribute("animation", movement_animation.value)
}

setupLight = (el_light, set_on) => {
    if(set_on){
        el_light.setAttribute("light", "type: point; intensity: 2; distance: 35; decay: 5")
    }
    
    else{
        el_light.setAttribute("light", "type: point; intensity: 0; distance: 30")
    }
}

ambientLight = (ligth_on) => {
    const light = document.getElementById("js--ambient")
    if (ligth_on) {
        light.setAttribute("light", "type: ambient; color: #d9d9d9")
    }
    else{light.setAttribute("light", "type: ambient; color: #333333")}
}

// setInterval(() =>{
//     console.log(document.querySelector('#js--camera').getAttribute('position'))
// }, 5000)

main = () =>{
    start_scene();
}