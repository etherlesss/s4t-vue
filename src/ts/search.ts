import { defineComponent } from "vue";

export default defineComponent({
    data() {
        return {
            brands: ['Logitech', 'Razer', 'HyperX', 'Gear', 'Viewsonic', 'Samsung', 'NZXT', 'Seagate', 'Gigabyte', 'EVGA', 'Be quiet!', 'Spektra', 'MSI'], // Añadir más quizás
            categories: ['Accesorios', 'Componentes']
        }
    },
    name: 'Filters'
})