<template>
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-6 offset-md-3">
                <div class="content d-flex flex-column text-center">
                    <h1 id="section-title">PREGUNTAS FRECUENTES</h1>
                    <ul class="qna list-unstyled mt-4">
                        <li v-for="question in questions">
                            <h2>{{ question.pregunta }}</h2>
                            <p>{{ question.respuesta }}</p>
                        </li>
                    </ul>
                    <p class="mt-4">¿Tiene una duda y no está aquí? Escríbanos <a href="#">aquí</a>.</p>
                    <a href="#">Términos y condiciones.</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
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
</script>