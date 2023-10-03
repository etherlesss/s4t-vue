import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            products: [
                { nombre: 'Nombre del Producto', precio: '$20.00', cantidad: '2', total: '$40.00' },
                { nombre: 'Nombre del Producto2', precio: '$10.00', cantidad: '1', total: '$10.00' }
            ]
        }
    },
    name: 'Products'
});