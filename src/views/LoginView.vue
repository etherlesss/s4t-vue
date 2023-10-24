<template>
    <div class="d-flex flex-row">
        <LoginSidebar />
        <main class="form-content">
            <div class="main-content container-md w-75">
                <h2 class="w-25">Iniciar sesión</h2>
                <form class="row g-3">
                    <div class="mb-3 col-12">
                        <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">Nunca compartiremos su correo con terceros.</div>
                    </div>
                    <div class="mb-3 col-12">
                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                        <div id="passwordHelp" class="form-text">Nunca le preguntaremos por su contraseña.</div>
                    </div>
                    <div class="mb-3 col-12">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Recuérdame</label>
                        </div>
                        <label class="form-check-label" for="exampleCheck1">¿No tienes cuenta? Registrate 
                            <router-link to="/signup">aquí</router-link>.</label>
                    </div>
                    <div class="mb-3 col-12">
                        <button type="submit" class="btn btn-primary main-btn">Iniciar sesión</button>
                    </div>
                </form>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginSidebar from '@/components/sidebars/Login.vue';

export default defineComponent({
    name: 'LoginView',
    components: {
        LoginSidebar
    },
    // SEO
    mounted() {
        document.title = 'S4T | Inicio de sesión';
    },
});
</script>

<style lang="less">
.form-content {
    flex-grow: 1;
}

.form-title {
    font-size: 24px;
    width: 100%;
    padding: 0 0 10px;
    border-bottom: 2px solid #121212;
    text-align: center;
}

.main-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
</style>