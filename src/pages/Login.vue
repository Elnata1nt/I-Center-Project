<template>
    <div class="page">
        <form @submit.prevent="onLogin()" method="POST" class="formLogin">
            <h1>FAÇA SEU LOGIN</h1>
            <div class="form-group">
                <label for="email">E-mail</label>
                <input type="text" id="email" class="form-control" placeholder="E-mail" v-model="email"  />
                <div class="error" v-if="errors.email"> {{ errors.email }} </div>
            </div>
            <div class="form-group">
                <label for="password">Senha</label>
                <input type="password" id="password" class="form-control" placeholder="Senha" v-model="password"  />
                <div class="error" v-if="errors.password"> {{ errors.password }} </div>
            </div>
            <div class="forgot-password">
                <a href="#">Esqueci minha senha</a>
            </div>
            <div class="my-3">
                <button type="submit" class="btn btn-primary">Login</button>
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
        if ( this.errors.length) {
            return false;
        }

        //signup registre

    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
}

.page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #477079;
}
.formLogin {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 7px;
    padding: 40px;
    width: 300px;
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
}

.formLogin h1 {
    color: rgb(57, 179, 220);
    margin-bottom: 20px;
    font-size: 24px;
}

.form-group {
    margin: 10px 0;
    flex-direction: column;
}

.form-group input[type="text"],
.form-group input[type="password"] {
    width: 90%;
    padding: 10px;
    margin: 5px 0 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    /* transition: all linear 160ms; */
    outline: none;
}

.forgot-password {
    display: inline; 
    text-align: right; 
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
    color: #131212;
}

a { 
    display: inline-block;
    margin-bottom: 20px;
    font-size: 16px;
    color: #555;
    transition: all linear 160ms;
}
a:hover {
    transform: scale(1.05);
    color: #d48b43;
}
.error {
    display: inline-block;
    font-size: 15px;
    color: #cf0000;
    display: inline; 
    text-align: right; 
}
.btn-primary {
    padding: 10px 20px;
    font-size: 0.9rem;
    font-weight: 300;
    background-color: #0492de;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all linear 160ms;
    border: none !important;
    margin: 0 !important;
}

.btn-primary:hover {
    transform: scale(1.05);
    background-color: #439cd4;
}

</style>