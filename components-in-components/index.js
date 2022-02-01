const usuario = {
    props: ['info'],
    template: "#template-usuario",
    computed:{
        nombreCompleto(){
            return `${this.info.title} : ${this.info.name} ${this.info.lastname}`
        }
    },
    methods:{
        buscarUsuario(){
            this.$emit('buscar', this.info.username)
        }
    }
}

const usuarios = {
    props: ['listado','moverA'],
    template: "#template-usuarios",
    components:{
        usuario
    },
    methods:{
        moverUsuario(username){
            // Buscamos en todas las instancias ese índice de usuario
            var indice = this.listado.findIndex(elemento => {
                return elemento.username === username
            })

            if(indice > -1){

                //Eliminamos de la matriz el usuario seleccionado
                const elemento = this.listado.splice(indice, 1)[0];
                //Insertamos en la nueva matriz el usuario seleccionado
                this.$root[this.moverA].unshift(elemento)
            }
        
        }
    }
    
}

new Vue({
    created(){
        fetch('https://randomuser.me/api/?results=50')
            .then(res => res.json())
            .then(res => {
                this.usuariosDisponibles = res.results.map( infoUsuario => {
                    return {
                        username: infoUsuario.login.username,
                        email: infoUsuario.email,
                        title: infoUsuario.name.title,
                        name: infoUsuario.name.first,
                        lastname: infoUsuario.name.last,
                        picture: infoUsuario.picture.large
                    }
                })
            })
    },
    el : "#app",
    data:{
        usuariosDisponibles : [],
        usuariosSeleccionados: []
    },
    components:{
        usuarios
    }

});

Vue.config.devtools = true;