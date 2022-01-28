AFRAME.registerComponent("painting", {
    init:  function() {
        const BASE_URL = "https://random.imagecdn.app/500/500";
        var image = document.getElementById("js--painting")
    
        this.new_image = () => {
            fetch(BASE_URL)
                // .then(response => response.json())
                .then(data => image.setAttribute("src", data.url))
        }
        this.new_image()
    }
});

AFRAME.registerComponent("door", {
    init:  function() {
    
        this.back_to_main = () => {
            window.location.href = "index.html";
        }
        this.el.addEventListener("mouseenter", this.back_to_main)
    }
});

AFRAME.registerComponent("walk", {
    init:  function() {
        this.walk_function = () => {
            const id1 = document.getElementById("js--tile1")
            const id2 = document.getElementById("js--tile2")
            if(this.el == id1){
                teleportCamera("-26.25 1.6 -7.21", 4000)
            }
            else if(this.el == id2){
                teleportCamera("-14.22 1.6 -7.21", 4000)
            }
            else{
                teleportCamera("-1.8 1.6 -7.21", 4000)
            }
        }
        this.el.addEventListener("mouseenter",this.walk_function);
    }
});


AFRAME.registerComponent("crown_animation", {
    init:  function() {
        this.go_up_animation = () => {
            this.el.removeAttribute("animation")
            animation_value = "property: position; easing: linear; dur: 4000; to: 0 0.5 -31.5"
            this.el.setAttribute("animation", animation_value)

            ani_interval = setInterval(() => {
                this.set_rotation()
                clearInterval(ani_interval)
            }, 4001);
        }

        this.set_rotation = () => {
            this.el.removeAttribute("animation")
            animation_value = "property: rotation; easing: linear; dur: 10000; to: 0 180 0; loop: true"
            this.el.setAttribute("animation", animation_value)
        }
    },

    start: function() {
        this.go_up_animation()
    }
});


AFRAME.registerComponent("image_animation", {
    init:  function() {
        this.rotate_animation = () => {
            animation_value1 = "property: position; easing: linear; dur: 4000; to: 6.8 0.4 -9.5"
            animation_value2 = "property: rotation; easing: linear; dur: 3000; to: 0 90 0"
            this.el.setAttribute("animation", animation_value1)
            anm_interval = setInterval(() =>{
                this.el.removeAttribute("animation")
                this.el.setAttribute("animation", animation_value2)
                clearInterval(anm_interval)
            }, 4001)
        }
    },

    start: function() {
        this.rotate_animation()
    }
});

// 6.8 0 -9.5
//  0 90 0
