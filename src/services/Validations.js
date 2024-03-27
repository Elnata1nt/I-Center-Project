/*
[X]Esta class está fornecendo funções de validação comuns para entradas de formulário.

[X]checkEmail: Valida se o endereço de e-mail fornecido está em um formato correto.
minLength: Verifica se o comprimento de uma entrada fornecida é maior ou igual a um comprimento mínimo especificado.
*/

export default class Validations {
  static checkEmail(email, companyEmail) {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email, companyEmail)
    ) {
      return emailRegex.test(email) && email === companyEmail;
      // return true;
    }
    return false;
  }

  static minLength(name, minLength) {
    if (name.length < minLength) {
      return false;
    }
    return true;
  }
}
