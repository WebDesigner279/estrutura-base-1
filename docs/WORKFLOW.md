Fluxo de Trabalho Recomendado para Colaboração em Equipe.

Este guia ajuda a Eduarda e Valter a manterem um fluxo de trabalho colaborativo organizado usando Git e GitHub.

---

## 👥 Colaboração entre Parceiros

**Ambos (Eduarda e Valter) são revisores ativos.**  
Ambos têm liberdade e responsabilidade para:

- Revisar o código do parceiro nos Pull Requests
- Comentar, sugerir melhorias e tirar dúvidas
- Ajudar a resolver conflitos de merge
- Solicitar ajustes antes do merge, se necessário
- Contribuir com feedbacks para melhorar o projeto

---
### 1. **Clonar o Repositório**

Ambas devem clonar o repositório para suas máquinas locais:

``` bash
git clone https://github.com/Eduarda-frontend/AuMiau-Store.git
```

### 2. **Criar Branches Individuais (uma vez por funcionalidade ou tarefa)**

Para evitar conflitos, cada um deve trabalhar em sua própria branch:

``` bash
git checkout -b nome-da-sua-branch
```


Por exemplo:

- Eduarda: `git checkout -b eduarda-home`
    
- Valter: `git checkout -b valter-produtos`
    

### 3. **Fluxo de Trabalho Diário**

Antes de começar a trabalhar:

``` bash
git checkout main 
git pull origin main 
git checkout sua-branch 
git merge main
```

Após finalizar uma tarefa:

``` bash
git add . 
git commit -m "Descrição clara da alteração" 
git push origin sua-branch
```

### 4. **Criar Pull Requests (PRs)**

No GitHub:

1. Vá até a aba "Pull requests".
    
2. Clique em "New pull request".
    
3. Selecione sua branch como base e `main` como comparação.
    
4. Adicione uma descrição clara do que foi feito.
    
5. Solicite a revisão do seu parceiro antes de mesclar.
    

### 5. **Revisar e Mesclar PRs**

O parceiro revisa o PR:

- Se aprovado: clica em "Merge pull request".
    
- Se houver ajustes: comenta no PR para que sejam realizados.
    

Após o merge:

``` bash
git checkout main 
git pull origin main
```

### **6. Começar uma nova tarefa?**

Criar uma nova branch a partir da `main` atualizada:

``` bash
git checkout -b nova-tarefa
```

---
### **✅ Escalabilidade da Estrutura**

| Nº de Parceiros | Funciona bem?     | Observações                                                           |
| --------------- | ----------------- | --------------------------------------------------------------------- |
| **2 a 3**       | ✅ Ótimo           | Comunicação rápida, revisão mais simples                              |
| **4 a 6**       | ✅ Funciona bem    | Exige mais organização com branches, PRs e revisões                   |
| **7 ou mais**   | ⚠️ Requer ajustes | Usar ferramentas como _Code Owners_, _GitHub Projects_, _CI/CD_, etc. |

