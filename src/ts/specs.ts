import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            specLbls: ['Categoria1', 'Categoria2', 'Categoria3'],
            specs: [
                { titulo: 'Titulo1', descripcion: 'Descripcion1' },
                { titulo: 'Titulo2', descripcion: 'Descripcion2' },
                { titulo: 'Titulo3', descripcion: 'Descripcion3' },
                { titulo: 'Titulo4', descripcion: 'Descripcion4' },
                { titulo: 'Titulo5', descripcion: 'Descripcion5' },
                { titulo: 'Titulo6', descripcion: 'Descripcion6' },
                { titulo: 'Titulo7', descripcion: 'Descripcion7' },
            ]
        }
    },
    name: 'Specs'
})