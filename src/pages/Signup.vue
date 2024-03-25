<template>
    <div class="pageSignup">
        <form @submit.prevent="onSignup()" method="POST" class="formSignup">

            <div>SignUp Page</div>

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
                <label for="bairro">District</label>
                <input type="text" id="bairro" class="form-control" placeholder="District" v-model="district" />
            </div>

            <div class="form-signup">
                <label for="cidade">City</label>
                <input type="text" id="cidade" class="form-control" placeholder="City" v-model="city" />
            </div>

            <div class="form-signup">
                <label for="estado">State</label>
                <input type="text" id="estado" class="form-control" placeholder="State" v-model="state" />
            </div>

            <div class="form-signup">
                <label for="uf">UF</label>
                <input type="text" id="uf" class="form-control" placeholder="UF" v-model="uf" />
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

            <div class="form-signup">
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
    display: flex;
    align-items: center;
    height: 100vh; 
    background-color: rgb(45, 72, 228)
}
.formSignup {
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.199);
    background-color: #ffffff44;
    flex-direction:column;
    border-radius: 10px;
    margin: 0 auto;
    padding: 28px;
    width: 30%;
}
@media screen and (max-width: 730px) {
    .formSignupn {
        width: 50%; /* Reduz a largura para 80% quando a tela for menor que 600px */
    }
}
@media screen and (max-width: 775px) {
    .fformSignup {
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
        width: 70%; /* Reduz a largura para 70% quando a tela for menor que 450px */
    }
}

@media screen and (max-width: 430px) {
    .formSignup {
        width: 60%; /* Reduz a largura para 70% quando a tela for menor que 450px */
    }
}

</style>
