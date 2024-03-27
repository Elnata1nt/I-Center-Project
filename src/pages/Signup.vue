<template>
    <div class="pageSignup">
        <form @submit.prevent="onSignup()" method="POST" class="formSignup">

            <h1>Criar uma conta</h1>

            <!-- Select type of account -->
            <div class="form-cont">
                <input type="radio" id="client" name="accountType" v-model="accountType" value="client">
                <label for="client">Cliente</label><br>
                <input type="radio" id="company" name="accountType" v-model="accountType" value="company">
                <label for="company">Empresa</label>
            </div>

            <!-- Fields for Client/Personal Account -->
            <div v-if="accountType === 'client'">
                <div class="form-signup">
                    <label for="name">Nome</label>
                    <input type="text" id="name" class="form-control" placeholder="Nome" v-model="name" />
                </div>

                <div class="form-signup">
                    <label for="lastname">Sobrenome</label>
                    <input type="text" id="lastname" class="form-control" placeholder="Sobrenome" v-model="lastname" />
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
                    <label for="confirmPassword">Confirmar Senha</label>
                    <input type="password" id="confirmPassword" class="form-control" placeholder="Confirmar Senha"
                        v-model="confirmPassword" />
                    <div class="error" v-if="errors.confirmPassword"> {{ errors.confirmPassword }} </div>
                </div>
            </div>

            <!-- Fields for Company/Professional Account -->
            <div v-if="accountType === 'company'">
                <div class="form-signup">
                    <label for="companyName">Nome da Empresa</label>
                    <input type="text" id="companyName" class="form-control" placeholder="Nome da Empresa"
                        v-model="companyName" />
                </div>

                <div class="form-signup">
                    <label for="cnpj">CNPJ</label>
                    <input type="text" id="cnpj" class="form-control" placeholder="CNPJ" v-model="cnpj" />
                </div>

                <div class="form-signup">
                    <label for="companyEmail">E-mail Comercial</label>
                    <input type="text" id="companyEmail" class="form-control" placeholder="E-mail Comercial"
                        v-model="companyEmail" />
                    <div class="error" v-if="errors.companyEmail"> {{ errors.companyEmail }} </div>
                </div>

                <div class="form-signup">
                    <label for="companyPassword">Senha</label>
                    <input type="password" id="companyPassword" class="form-control" placeholder="Senha"
                        v-model="companyPassword" />
                    <div class="error" v-if="errors.companyPassword"> {{ errors.companyPassword }} </div>
                </div>

                <div class="form-signup">
                    <label for="companyConfirmPassword">Confirmar Senha</label>
                    <input type="password" id="companyConfirmPassword" class="form-control"
                        placeholder="Confirmar Senha" v-model="companyConfirmPassword" />
                    <div class="error" v-if="errors.companyConfirmPasswordd"> {{ errors.companyConfirmPassword }} </div>
                </div>

                <!-- Address Fields -->
                <div class="form-signup">
                    <label for="street">Rua</label>
                    <input type="text" id="street" class="form-control" placeholder="Rua" v-model="street" />
                </div>

                <div class="form-signup">
                    <label for="streetNumber">Número da residência</label>
                    <input type="text" id="streetNumber" class="form-control" placeholder="Número"
                        v-model="streetNumber" />
                </div>

                <div class="form-signup">
                    <label for="neighborhood">Bairro</label>
                    <input type="text" id="neighborhood" class="form-control" placeholder="Bairro"
                        v-model="neighborhood" />
                </div>

                <div class="form-signup">
                    <label for="cep">CEP</label>
                    <input type="text" id="cep" class="form-control" placeholder="CEP" v-model="cep" />
                </div>
            </div>

            <div class="my-signup">
                <button type="submit" class="btn btn-signup">Cadastrar</button>
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
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default {
    data() {
        return {
            accountType: 'client', // Default to client
            // Client/Personal Account fields
            name: '',
            lastname: '',
            email: '',
            password: '',
            confirmPassword: '',
            // Company/Professional Account fields
            companyName: '',
            cnpj: '',
            companyEmail: '',
            companyPassword: '',
            companyConfirmPassword: '',
            // Address fields
            street: '',
            streetNumber: '',
            neighborhood: '',
            cep: '',
            errors: []
        }
    },

    methods: {
        onSignup() {
            let validations = new SignupValidations(
                this.email,
                this.companyEmail,
                this.password,
                this.confirmPassword,
                this.companyPassword,
                this.companyConfirmPassword
            );

            this.errors = validations.checkValidations();

            // Verifica se há erros
            if (Object.keys(this.errors).length > 0) {
                return false;
            }

            // Outras validações específicas do cliente
            if (this.accountType === 'client') {
                if (!this.name || !this.lastname || !this.email || !this.password || !this.confirmPassword) {
                    this.errors['client'] = "Por favor, preencha todos os campos.";
                }
            }
            // Outras validações específicas da empresa
            else if (this.accountType === 'company') {
                if (!this.companyName || !this.cnpj || !this.companyEmail || !this.companyPassword || !this.companyConfirmPassword || !this.street || !this.streetNumber || !this.neighborhood || !this.cep) {
                    this.errors['company'] = "Por favor, preencha todos os campos."; // Adicionado um identificador de erro 'company'
                }
            }

            if (Object.keys(this.errors).length === 0) {
                this.sendFormDataToServer(); // Função para enviar dados para o servidor
            }
        },

        sendFormDataToServer() {
            // Lógica para enviar os dados do formulário para o servidor
            console.log('Enviando dados do formulário para o servidor...');
        }

    }
}
</script>

<style>
.pageSignup {
    display: flex;
    align-items: center;
    width: 100%;
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
    display: flex;
    flex-direction: column;
    background-color: #ffffff44;
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.199);
    border-radius: 10px;
    padding: 28px;
    width: 40%;
    margin: 60px auto;
    margin-right: 7rem;
    margin-top: 5rem;
}
@media screen and (max-width: 1024px) {
    .formSignup {
        width: 60%;
        margin-right: 6%;
    }
}

@media screen and (max-width: 750px) {
    .formSignup {
        width: 80%;
        margin-right: 10%;
        margin-top: 5rem;
    }
}

@media screen and (max-width: 550px) {
    .formSignup {
        width: 70%;
        margin: 80px;
    }
}

@media screen and (max-width: 450px) {
    .formSignup {
        width: 80%;
        margin: 50px;
    }
}

.form-cont {
    margin: 10px 0;
    display: flex;
    align-items: center;
}

.form-cont label {
    color: rgb(254, 254, 254);
}

.form-signup {
    margin: 10px 0;
    display: flex;
    flex-direction: column;
}

.form-signup input {
    border: 1px solid #ccc;
    border-radius: 7px;
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

.my-signup {
    text-align: center;
}
</style>
