// Componente local

const texto = {
    template : `<span>Hola</span>`,
}

// Componente global donde hemos establecido también el componente 'texto' para poder utilizarlo dentro del componente 'boton'

Vue.component('boton',{
    // props: ["color", "enlace", "anchorText"],
    props: {
        color: String,
        enlace: {
            type: String,
            default: "https://www.escuelavue.es"
        },
        anchorText: String
    },
    components:{
        texto
    },
    // template: `<a class="boton" :style="'background-color:' + color" :href="enlace"> {{ anchorText }} </a>`,
    template: `<a class="boton" :style="'background-color:' + color" :href="enlace"> <texto></texto> </a>`,
});


new Vue({
    el: "#app",
    data:{},
    components:{
        texto
    }
})

 Vue.config.devtools = true;