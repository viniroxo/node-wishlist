import app from "./app"; // Importando o arquivo que configura o Express app

const port = process.env.PORT || 3000; // Definindo a porta. Usa a variável de ambiente ou 3000 como padrão.

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
