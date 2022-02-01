new Vue({
    el: "#app",
    data: {
        enlace: "http://www.quinteroalejandro.com",
        baseUrl: "https://placekitten.com",
        ancho : 50,
        alto : 50
    },
    computed: {
        urlCompleta(){
            return `${this.baseUrl}/${this.ancho * 5}/${this.alto *5}`
        }
    }
})
Vue.config.devtools = true