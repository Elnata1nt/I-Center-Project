<template>
     <div class="signup">
        <div class="logoIcenter">
        <img src="/public/logolo.svg" alt="">
    </div>
        <router-link to="/signup" class="btn btn-secundary">Cadastro</router-link>
     </div>

    <div class="pageLogin">
        <form @submit.prevent="onLogin()" method="POST" class="formLogin">
            <h1>FAÇA SEU LOGIN</h1>

            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="text" id="email" class="form-control" placeholder="E-mail" v-model="email" />
                <div class="error" v-if="errors.email"> {{ errors.email }} </div>
            </div>

            <div class="form-group">
                <label for="password">Senha</label>
                <input type="password" id="password" class="form-control" placeholder="Senha" v-model="password" />
                <div class="error" v-if="errors.password"> {{ errors.password }} </div>
            </div>

            <div class="my-3">
                <button v-on:click="onClick()" type="submit" class="btn btn-primary">Login</button>
            </div>

            <div class="forgot-password">
                <a href="#">Esqueci minha senha</a>
            </div>
        </form>
    </div>
</template>



<script>
import SignupValidations from "../services/SignupValidations";

export default {
    data() {
        return {
            email: '',
            password: '',
            errors: [],
        };
    },

    methods: {
        onLogin() {
            let validations = new SignupValidations(
                this.email,
                this.password
            )

            this.errors = validations.checkValidations();
            if (this.errors.length) {
                return false;
            }

            //signup registre
        },
        onClick(){
            console.log('Click');
        }
    }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Estilos globais */
body {
    font-family: 'Inter', sans-serif;
    background-color: #07324d;
    /* background-image: url('../src/img/backgroundLogin.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100vh; */
}


/* Container principal da página de login */
.pageLogin {
    margin-top: 30px;
    display: flex;
    align-items: center;
    height: 80vh;
}

.formLogin {
    display: flex;
    flex-direction: column;
    background-color: #ffffff44;
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.199);
    border-radius: 10px;
    padding: 28px;
    width: 30%;
    margin: 0 auto;
    margin-right: 10rem;
}

@media screen and (max-width: 1024px) {
    .formLogin {
        width: 30%;
        margin-top: -5%;
        margin-right: 6%;
    }
}

@media screen and (max-width: 750px) {
    .formLogin {
        width: 50%;
    }
}

@media screen and (max-width: 550px) {
    .formLogin {
        width: 70%;
        margin: 80px;
    }
}

@media screen and (max-width: 450px) {
    .formLogin {
        width: 80%;
        margin: 50px;
    }
}

.formLogin h1 {
    border-bottom: 1px #f0eded solid;
    padding-bottom: 10px;
    outline: none;
    color: #ffffff;
    margin-bottom: 20px;
    font-size: 27px;
    text-align: center;
}

.form-group {
    margin: 10px 0;
    flex-direction: column;
}

.form-group input[type="text"],
.form-group input[type="password"] {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    font-size: 18px;
    font-weight: 300;
    border: 1px solid #ccc;
    border-radius: 7px;
    outline: none;
}

.my-3 {
    width: 100%;
    text-align: center;
}

label {
    font-size: 17px;
    font-weight: 600;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    color: #ffffff;
}

.forgot-password {
    text-align: center;
    margin: 0 auto;
    margin-top: 10px;
}

a {
    display: inline-block;
    font-size: 16px;
    color: #ffffff;
    transition: all linear 160ms;
    padding: 10px;
    text-decoration: none;
    text-align: center;
    margin: 0 auto;
}

a:hover {
    transform: scale(1.05);
    color: #0492de;
}

.error {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    display: inline-block;
    font-size: 17px;
    color:rgb(247, 37, 0);
    text-align: right;
    margin-right: 8px;
}

.btn-primary {
    padding: 10px;
    font-size: 18px;
    font-weight: 300;
    background-color: #0492de;
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.199);
    color: #fff;
    border: none;
    border-radius: 7px;
    cursor: pointer;
    transition: all linear 160ms;
    width: 100%;
    margin: 10px auto 0;
}

.btn-primary:hover {
    background-color: #439cd4;
}

.signup {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-left: 20px;
}

.btn-secundary {
    padding: 10px;
    font-size: 18px;
    background-color: #0492de;
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.199);
    color: #fff;
    border: none;
    border-radius: 13px;
    cursor: pointer;
    transition: all linear 160ms;
    margin: 10px 60px 0 0;
}

.signup a {
    color: #fffefe;
}

.btn-secundary:hover {
    background-color: #439cd4;
}

@media screen and (max-width: 520px) {
    .btn.btn-secundary {
        width: 40%;
        margin-right: 10%;
    }
}

@media screen and (max-width: 430px) {
    .btn.btn-secundary {
        width: 30%;
    }
}

@media screen and (max-width: 1024px) {
    .btn-secundary {
        width: 10%;
        margin-right: 5%;
    }
}

@media screen and (max-width: 775px) {
    .btn-secundary {
        width: 30%;
        margin-right: 30%;
    }
}

@media screen and (max-width: 880px) {
    .btn-secundary {
        width: 20%;
        margin-right: 30%;
    }
}

.signup img {
    margin-top: 10px;
    width: 25%;
}

</style>