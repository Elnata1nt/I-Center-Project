<template>
    <div class="pageSignup">
        <form @submit.prevent="onSignup()" method="POST" class="formSignup">

            <h1>Criar uma conta</h1>

            <div class="form-signup">
            <label for="name">Name</label>
                <input type="text" id="name" class="form-control" placeholder="Name" v-model="name" />
            </div>

            <div class="form-signup">
                <label for="cpf_cnpj">CPF/CNPJ</label>
                <input type="text" id="cpf_cnpj" class="form-control" placeholder="CPF/CNPJ" v-model="cpf_cnpj" />
            </div>

            <div class="form-signup">
                <label for="address">Address</label>
                <input type="text" id="address" class="form-control" placeholder="Address" v-model="address" />
            </div>

            <div class="form-signup">
                <label for="tel">Phone</label>
                <input type="text" id="tel" class="form-control" placeholder="Phone" v-model="tel" />
            </div>

            <div class="form-signup">
                <label for="email">E-mail</label>
                <input type="text" id="email" class="form-control" placeholder="E-mail" v-model="email" />
                <div class="error" v-if="errors.email"> {{ errors.email }} </div>
            </div>

            <div class="form-signup">
                <label for="password">Senha</label>
                <input type="password" id="password" class="form-control" placeholder="Senha" v-model="password" />
                <div class="error" v-if="errors.password"> {{ errors.password }} </div>
            </div>


            <div class="form-signup">
                <label for="confirm_senha">Confirm Password</label>
                <input type="password" id="confirm_senha" class="form-control" placeholder="Confirm Password" v-model="confirmSenha" />
            </div>

            <div class="my-signup">
                <button v-on:click="onClick()" type="submit" class="btn btn-signup">Cadastrar</button>
            </div>

            <!-- Display errors if any -->
            <div v-if="errors.length" class="alert alert-danger">
                <ul>
                    <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </div>
        </form>
    </div>
</template>

<script>
import SignupValidations from "../services/SignupValidations";

export default {
    data() {
        return {
            name: '',
            cpf_cnpj: '',
            address: '',
            district: '',
            city: '',
            state: '',
            uf: '',
            tel: '',
            senha: '',
            confirmSenha: '',
            errors: [],
        }
    },

    methods: {
        onSignup() {
            let validations = new SignupValidations(
                this.email,
                this.password
            );

            this.errors = validations.checkValidations();
            if (this.errors.length) {
                return false;
            }
        },
    }
}
</script>

<style>
.pageSignup {
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column; 
    border-radius:3px; 
    padding:1em;
}
.pageSignup h1 {
    color: #ffffff;
    margin-bottom: 2px;
    border-bottom: 1px #f0eded solid;
    padding-bottom: 10px;
    font-size: 2.3em;
    text-align: center;
}
.formSignup {
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.199);
    background-color: #ffffff44;
    flex-direction:column;
    border-radius: 10px;
    margin: 0 auto;
    padding: 28px;
    width: 40%;
}
@media screen and (max-width: 730px) {
    .formSignup {
        width: 50%; /* Reduz a largura para 80% quando a tela for menor que 600px */
    }
}
@media screen and (max-width: 775px) {
    .formSignup {
        width: 50%; /* Reduz a largura para 80% quando a tela for menor que 600px */
    }
}
@media screen and (max-width: 880px) {
    .formSignup {
        width: 50%; /* Reduz a largura para 80% quando a tela for menor que 600px */
    }
}

@media screen and (max-width: 520px) {
    .formSignup {
        width: 80%; /* Reduz a largura para 70% quando a tela for menor que 450px */
    }
}

@media screen and (max-width: 430px) {
    .formSignup {
        width: 50%; /* Reduz a largura para 70% quando a tela for menor que 450px */
    }
}


.form-signup {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
}
.form-signup input {
    border: 1px solid #ccc;
    border-radius: 13px;
    outline: none;
    font-size: 15px;
    padding: 7px;
    margin: 5px 0;
    width: 100%;
}
.form-signup label {
    color: #ffffff;
    margin-bottom: -10px;
}
@media screen and (max-width: 430px) {
    .formSignup{
        width: 90%;
    }
    .form-signup {
        width: 100%;
    }
}
.my-signup {
    width: 100%;
    text-align: center;
}

</style>
