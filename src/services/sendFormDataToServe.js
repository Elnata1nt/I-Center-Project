// Defina a função sendFormDataToServer
function sendFormDataToServer(formData) {
  // URL do endpoint no servidor
  const endpointUrl = "https://example.com/api/signup";

  // Opções da requisição
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  // Enviar a requisição para o servidor
  fetch(endpointUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao enviar os dados para o servidor.");
      }
      return response.json(); // Analisar a resposta JSON
    })
    .then((data) => {
      // Tratar a resposta do servidor, se necessário
      console.log("Resposta do servidor:", data);
      // Por exemplo, exibir uma mensagem de sucesso para o usuário
      alert("Cadastro realizado com sucesso!");
    })
    .catch((error) => {
      // Lidar com erros de requisição
      console.error("Erro ao enviar os dados para o servidor:", error.message);
      // Por exemplo, exibir uma mensagem de erro para o usuário
      alert(
        "Ocorreu um erro ao enviar os dados para o servidor. Por favor, tente novamente mais tarde."
      );
    });
}
