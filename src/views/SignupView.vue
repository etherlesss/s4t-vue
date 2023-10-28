<template>
    <div class="d-flex flex-row">
        <SignupSidebar/>
        <signupForm :schema="formSchema"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import * as Yup from 'yup';
import SignupSidebar from '@/components/sidebars/Signup.vue';
import signupForm from '@/Forms/signupForm.vue';

export default defineComponent({
    name: 'SignupView',
    components: {
        SignupSidebar,
        signupForm
    },
    // SEO
    mounted() {
        document.title = 'S4T | Creación de cuenta';
    },
    data: () => {
        const formSchema = {
            fields: [
                {
                    label: 'Usuario',
                    name: 'User',
                    as: 'input',
                    class: 'form-control',
                    rules: Yup.string().max(30, "El usuario no debe tener más de 30 caracteres").min(3, "El usuario debe tener al menos 3 caracteres").required("Campo Obligatorio")
                },
                {
                    label: 'Rut (sin puntos y con guión)',
                    name: 'Rut',
                    as: 'input',
                    class: 'form-control',
                    rules: Yup.string().matches(/^[0-9]+-[0-9kK]{1}$/, 'Ingresa un Rut válido').required('Campo Obligatorio')
                },
                {
                    label: 'Correo Electronico',
                    name: 'email',
                    as: 'input',
                    class: 'form-control',
                    help: 'Nunca compartiremos su correo con terceros.',
                    rules: Yup.string().email("Ingresar un Correo Valido").required("Campo Obligatorio")
                },
                {
                    label: 'Contraseña',
                    name: 'Password',
                    as: 'input',
                    type:'password',
                    class: 'form-control',
                    rules: Yup.string()
                        .matches(
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                            'La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula y un número'
                        )
                        .required('Campo Obligatorio')
                },
                {
                    label: 'Confirmar contraseña',
                    name: 'ConfirmPassword',
                    as: 'input',
                    type:'password',
                    class: 'form-control',
                    rules: Yup.string()
                        .oneOf([Yup.ref('Password')], 'Las contraseñas no coinciden')
                        .required('Campo Obligatorio')
                },
                
            ],
        };
        return{
            formSchema
        };
    }
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