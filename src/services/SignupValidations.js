/*
[X]Classe para validar formulários de inscrição.
[x]Verifica se o e-mail é válido e se a senha tem pelo menos 6 caracteres.
[X]Retorna os erros encontrados, se houverem.
*/

import Validations from "./Validations.js";

export default class SignupValidations {
    constructor(email,password)  {
        this.email = email;
        this.password = password;
    }

    checkValidations() {
        let errors = [];

        //email validations
        if (!Validations.checkEmail(this.email)) {
            errors['email'] = 'Email Invalidado';
        }

        //password validations
        if(!Validations.minLength(this.password, 6)) {
            errors['password'] = 'A senha precisa de 6 Carácteres';
        }

        return errors;
    }

}