import { defineComponent } from 'vue';

export default defineComponent({
    data() {
        return {
            questions: [
                { pregunta: 'Pregunta 1', respuesta: 'Respuesta 1' },
                { pregunta: 'Pregunta 2', respuesta: 'Respuesta 2' },
                { pregunta: 'Pregunta 3', respuesta: 'Respuesta 3' },
                { pregunta: 'Pregunta 4', respuesta: 'Respuesta 4' },
                { pregunta: 'Pregunta 5', respuesta: 'Respuesta 5' },
                { pregunta: 'Pregunta 6', respuesta: 'Respuesta 6' },
            ]
        }
    },
    name: 'Qna'
});