<template>
    <div class="d-flex flex-row">
        <SignupSidebar />
        <main class="form-content">
            <div class="main-content container-md w-75">
                <h2 class="w-25 form-title">Registro</h2>
                <form class="row g-3" id="formSignUp">
                    <div class="col-md-6">
                        <label for="exampleInputName1" class="form-label">Nombre</label>
                        <input type="text" class="form-control" name="exampleInputName1" id="exampleInputName1"
                            aria-describedby="emailHelp">
                    </div>
                    <div class="col-md-6">
                        <label for="exampleInputLastName1" class="form-label">Apellido</label>
                        <input type="text" class="form-control" name="exampleInputLastName1" id="exampleInputLastName1"
                            aria-describedby="emailHelp">
                    </div>
                    <div class="col-12">
                        <label for="exampleInputAddress1" class="form-label">Dirección</label>
                        <input type="text" class="form-control" name="exampleInputAddress1" id="exampleInputAddress1"
                            aria-describedby="emailHelp">
                    </div>
                    <div class="col-12">
                        <label for="exampleInputEmail1" class="form-label">Correo electrónico</label>
                        <input type="email" class="form-control" name="exampleInputEmail1" id="exampleInputEmail1"
                            aria-describedby="emailHelp">
                    </div>
                    <div class="col-md-6">
                        <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" name="exampleInputPassword1" id="exampleInputPassword1">
                    </div>
                    <div class="col-md-6">
                        <label for="exampleInputConfirmPassword1" class="form-label">Verificar contraseña</label>
                        <input type="password" class="form-control" name="exampleInputConfirmPassword1"
                            id="exampleInputConfirmPassword1">
                    </div>
                    <div class="col-12">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">Acepto los <a href="#">términos y
                                    condiciones</a>.</label>
                        </div>
                        <label class="form-check-label" for="exampleCheck1">¿Ya tienes cuenta? Inicia sesión <a
                                href="/pages/login.html">aquí</a>.</label>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary main-btn" id="btnSignUp">Registrarse</button>
                    </div>
                </form>
            </div>
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SignupSidebar from '@/components/sidebars/Signup.vue';

export default defineComponent({
    name: 'SignupView',
    components: {
        SignupSidebar
    },
    // SEO
    mounted() {
        document.title = 'S4T | Creación de cuenta';
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