import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            productos: [
                { titulo: 'Producto1', precio: 'Precio1', descripcion: 'Descripción1'},
                { titulo: 'Producto2', precio: 'Precio2', descripcion: 'Descripción2'},
                { titulo: 'Producto3', precio: 'Precio3', descripcion: 'Descripción3'}
            ]
        }
    },
    name: 'Cards'
});