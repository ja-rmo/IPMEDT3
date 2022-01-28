class Interval {
    constructor(name){
        this.name = name
    }

    start_interval = (pos, dur1, dur2, el_light, set_on) => {
        console.warn("START INTERVAL REACHED")
        this.name = setInterval(() => {
            teleportCamera(pos, dur1)
            if(set_on){
                end_start()
                setupLight(el_light, set_on)
            }else{
                ambientLight(false)
                scene1()
            }
            this.stop_interval()
        }, dur2)
    }

    play_audio_interval = (num_audio, dur) => {
        this.name = setInterval(() => {
            console.warn("AUDIO HAS STARTED")
            audio[num_audio]()
            this.stop_interval()
        }, dur)
    }

    wait_interval = (dur, func, el_light1, el_light2) => {
        this.name = setInterval(() => {
            console.warn("SCENE TRANSITION")

            try{
                setupLight(el_light1, false)
                setupLight(el_light2, true)
            } catch (error){
                console.warn(`EXCEPTION CATCH, ONLY FOR END GAME, ELSE ERROR: ${error}`)
            }

            if(func){func()}
            this.stop_interval()
        }, dur)
    }

    animation_interval = (el, duration) => {
        this.name = setInterval(() => {
            el.start()
            this.stop_interval()
        }, duration)
    }

    walk_interval = (pos, dur1, dur2) => {
        this.name = setInterval(() => {
            teleportCamera(pos, dur1)
            this.stop_interval()
        }, dur2)
    }

    stop_interval = () => {
        clearInterval(this.name)
    }
}