<template>
    <div class="w-100" v-for="specLbl in specLbls">
        <h5 class="fw-bold">{{ specLbl }}</h5>
        <ul class="spec-list list-unstyled d-flex flex-wrap gap-5">
            <li v-for="spec in specs">
                <p class="fw-bold">{{ spec.titulo }}</p>
                <p>{{ spec.descripcion }}</p>
            </li>
        </ul>
    </div>
</template>

<script src="../ts/specs.ts"></script>

<style></style>