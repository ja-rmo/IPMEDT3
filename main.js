let positions = {
    1: "0 0 -3.7",
    2: "7.8 0 -3.7",
    2.1: "13.7 0 -16.3",
    3: "-6.6 0 -21"
}

light_elements = {
    1: document.getElementById("js--light1"),
    2: document.getElementById("js--light2"),
    3: document.getElementById("js--light3")
}

audio = {
    1: new Audio("lecture_sound/text_1.mp3"),
    2: new Audio("lecture_sound/text_2.mp3"),
    3: new Audio("lecture_sound/text_3.mp3")
}

scene_counter = [null]
open_interval = [true]

main = () => {
    setup_scene_onload = setInterval(() =>{
        setupLight(light_elements[1], true)
        scene_counter[0] = 1
        console.warn("SCENE SETUP COMPLETED")
        loadScene();
        clearInterval(setup_scene_onload)
    },5000)
}

loadScene = () =>{
    switch(scene_counter[0]){
        case 1:
            teleportCamera(positions[1], 2000)

            scene_1_start = setInterval(() => {
                if (open_interval[0]){
                    console.warn("SCENE 1 START");
                    audio[1].play()
                    open_interval[0] = false
                }
            },2500 )

            scene_1_end = setInterval(() =>{
                clearInterval(scene_1_start)
                setupLight(light_elements[1], false)

                teleportCamera(positions[2], 2000)
                scene_counter[0]++
                loadScene();
            }, 13500)
            break
        

        case 2:
            clearInterval(scene_1_end)
            console.warn("SCENE 2 APPLIED");
            open_interval[0] = true
            
            scene_2_on_move = setInterval(() =>{
                setupLight(light_elements[2], true)
                teleportCamera(positions[2.1], 4000)
            }, 2000)

            scene_2_start = setInterval(() =>{
                if (open_interval[0]){
                    clearInterval(scene_2_on_move)
                    console.warn("SCENE 2 START")
                    audio[2].play()
                    open_interval[0] = false
                }
            }, 6000)

            scene_2_end = setInterval(() =>{
                setupLight(light_elements[2], false)
                clearInterval(scene_2_start)
                teleportCamera(positions[3], 3000)
                scene_counter[0]++
                loadScene();
            },20000)


            break

        
        case 3:
            clearInterval(scene_2_end)
            console.warn("SCENE 3 APPLIED");
            open_interval[0] = true
            
            scene_3_start = setInterval(() =>{
                if (open_interval[0]){
                    console.warn("SCENE 3 START");
                    setupLight(light_elements[3], true)
                    audio[3].play()
                    open_interval[0] = false
                }   
            }, 3000)

            scene_3_end = setInterval(() =>{
                clearInterval(scene_3_start)
                scene_counter[0]++
                loadScene();
            }, 14000)

            break

        
        case 4:
            clearInterval(scene_3_end)
            setupLight(light_elements[3], false)
            console.warn("THE END")
            break

        default:
            console.error(`INVALID SCENE VALUE: ${scene_counter[0]}`)
        }
}

teleportCamera = (new_camera_position, duration) =>{
    const ingame_camera_element = document.getElementById("js--camera")
    let movement_animation = document.createAttribute("animation")
    movement_animation.value = `property: position; easing: linear; dur: ${duration}; to: ${new_camera_position}`
    ingame_camera_element.setAttribute("animation", movement_animation.value)
}

setupLight = (el_light, set_switch_to) => {
    if(set_switch_to){
        el_light.setAttribute("light", "type: point; intensity: 2; distance: 30; decay: 5;")
    }
    
    else{
        el_light.setAttribute("light", "type: point; intensity: 0; distance: 30; decay: 5;")
    }
}

setInterval(() =>{
    console.log(document.querySelector('#js--camera').getAttribute('position'))
}, 5000)