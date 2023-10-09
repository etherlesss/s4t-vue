<template>
    <aside>
        <div class="sidebarBig d-none d-md-block">

            <div class="container">
                <h1>Bienvenido</h1>
            </div>

            <div class="secondary-container">
                <p>Continuar usando</p>
                <ul class="list-unstyled">
                    <li>
                        <a class="link-light" href="#"><i class="bi bi-google"></i></a>
                    </li>
                    <li>
                        <a class="link-light" href="#"><i class="bi bi-facebook"></i></a>
                    </li>
                </ul>
                <div class="back-btn">
                    <a class="link-light bottom-hint d-flex align-items-center p-2 gap-2" href="/index.html">
                        <i class="bi bi-arrow-left fs-5"></i>
                        <p class="mb-0 fs-5">Volver al inicio</p>
                    </a>
                </div>
            </div>
        </div>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SignupSidebar'
});
</script>