# 📘 Git e GitHub: Comando e Funções entre Commit, Pull, Pull Request, Merge e Compare & Pull Request

Este guia explica de forma clara o papel de cada comando e funcionalidade do Git e GitHub no **fluxo de colaboração entre Eduarda e Valter**, com base no fluxo de trabalho colaborativo recomendado.

---

## 🟡 1. `git commit` — **Salvando Alterações Localmente**

- **O que é?**  
  Um commit registra as alterações feitas no seu código **apenas no seu computador**, de forma organizada e com uma mensagem explicando o que foi feito.

- **Quando usar?**  
  Sempre que concluir uma pequena parte da tarefa, antes de enviar para o GitHub.

- **Exemplo:**
  ```bash
  git add .
  git commit -m "Ajusta layout da página de produtos"
🔵 2. git pull — Atualizando seu Projeto com Alterações do Time
O que é?
O git pull traz as últimas alterações do repositório remoto (GitHub) para o seu código local.

Quando usar?
Antes de começar a trabalhar ou antes de fazer merge com a main.

Exemplo:

bash
Copiar
Editar
git pull origin main
🟢 3. Pull Request (PR) — Solicitando Revisão e Mesclagem
O que é?
Um Pull Request é uma solicitação de revisão de código feita diretamente pelo GitHub. Ele propõe que as mudanças da sua branch sejam mescladas com a main.

Quando usar?
Após terminar sua tarefa e enviar para o GitHub.

Etapas:

Suba sua branch:

bash
Copiar
Editar
git push origin nome-da-sua-branch
No GitHub, vá até a aba Pull Requests e clique em "New pull request".

🟣 4. Compare & Pull Request — Criando um PR no GitHub
O que é?
É a interface do GitHub que aparece após o push, permitindo comparar sua branch com a main e abrir um Pull Request.

O que fazer nessa tela?

Escolher sua branch (ex: valter-produtos)

Verificar a comparação com main

Escrever uma descrição clara

Solicitar a revisão de Eduarda ou Valter

🔴 5. Merge — Unindo Branches Após Revisão
O que é?
Merge significa juntar o código da sua branch com outra (geralmente com a main), incorporando todas as mudanças.

Quando usar?
Após o Pull Request ser aprovado.

Como fazer no GitHub?

Dentro do Pull Request, clique em "Merge pull request"

Em seguida, "Confirm merge"

🧩 Resumo Visual: Fluxo Simplificado
plaintext
Copiar
Editar
1. git checkout -b valter-produtos       ← Crie sua branch
2. git add . && git commit -m "..."      ← Faça commits locais
3. git pull origin main                  ← Traga alterações da main
4. git push origin valter-produtos       ← Envie para o GitHub
5. Compare & Pull Request (GitHub)       ← Crie o PR
6. Revisão e Merge                       ← Após aprovação, mescle
7. git checkout main && git pull         ← Atualize sua main local
📌 Dica Final: Um Commit ≠ Um Push
commit = salva localmente

push = envia para o GitHub

pull = recebe do GitHub
