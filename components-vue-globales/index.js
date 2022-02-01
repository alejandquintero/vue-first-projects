Vue.component('gato', {
    template: `<img :src="urlCompleta">`,
    data(){
        return{
            ancho: Math.floor(Math.random() * 600) + 100,
            alto: Math.floor(Math.random() * 600) + 100
        }
    },
    computed: {
        urlCompleta(){
            return `https://placekitten.com/${this.ancho}/${this.alto}`
        }
    }
})

Vue.component('boton', {
    // props: ["color", "enlace", "anchorText"],
    props: {
        color: String,
        enlace: {
            type: String,
            default: "https://www.escuelavue.es"
        },
        anchorText: String
    },
    template: `<a class="boton" :style="'background-color:' + color" :href="enlace">{{ anchorText }}</a>`,
});


new Vue({
    el: "#app",
    data: {
        botones: [
            {enlace: "http://www.wmedia.es", anchorText: "Wmedia", color: "red"},
            {enlace: "http://www.escuelavue.es", anchorText: "Escuela Vue", color: "blue"},
            {enlace: "http://www.vuejs.org", anchorText: "Vue.js", color: "purple"},
        ]
    }
})

 Vue.config.devtools = true;