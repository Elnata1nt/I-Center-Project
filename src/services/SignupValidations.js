/*
[X]Classe para validar formulários de inscrição.
[x]Verifica se o e-mail é válido e se a senha tem pelo menos 6 caracteres.
[X]Retorna os erros encontrados, se houverem.
*/

import Validations from "./Validations.js";

export default class SignupValidations {
  constructor(
    email,
    companyEmail,
    password,
    confirmPassword,
    companyPassword,
    companyConfirmPassword
  ) {
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;

    this.companyEmail = companyEmail;
    this.companyPassword = companyPassword;
    this.companyConfirmPassword = companyConfirmPassword;
  }

  checkValidations() {
    let errors = {}; // Inicialize como um objeto, não como um array

    //email validations
    if (!Validations.checkEmail(this.email)) {
      errors["email"] = "Email inválido";
    }

    //password validations
    if (!Validations.minLength(this.password, 6)) {
      errors["password"] = "Pelo menos 6 caracteres";
    }

    if (this.password !== this.confirmPassword) {
      errors["confirmPassword"] = "Senha incorreta";
    }

    if (!Validations.checkEmail(this.companyEmail)) {
      errors["companyEmail"] = "Email inválido";
    }

    if (!Validations.minLength(this.companyPassword, 6)) {
      errors["companyPassword"] = "Pelo menos 6 caracteres";
    }

    if (this.companyPassword !== this.companyConfirmPassword) {
      errors["companyConfirmPassword"] = "Senha incorreta";
    }

    return errors;
  }
}
