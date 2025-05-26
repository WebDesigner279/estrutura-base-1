
# 🌐 Estrutura Base - Next.js + TypeScript

Este projeto é uma estrutura base para aplicações modernas em **Next.js** com **TypeScript**, **SCSS Modules**, suporte a **PWA (Progressive Web App)** e organização de componentes reutilizáveis. Ideal para desenvolvimento ágil, responsivo e escalável.

## ✅ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/) 14+
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS Modules](https://sass-lang.com/)
- [PWA (Service Worker + Manifest)](https://web.dev/progressive-web-apps/)
- [ESLint + Prettier](https://prettier.io/)

---

## 📁 Estrutura de Pastas

```bash
estrutura-base-1/
│
├── .next/                                # Pasta gerada automaticamente (ignorada no Git)
├── .vscode/                              # Configurações do VSCode (opcional)
├── app/
│   ├── components/                       # Componentes reutilizáveis
│   │   ├── Footer/
│   │   │   ├── Footer.module.scss
│   │   │   ├── Footer.tsx
│   │   │   └── index.ts
│   │   ├── InstallButton/
│   │   │   ├── InstallButton.tsx
│   │   │   ├── IntallButton.module.scss
│   │   │   └── index.tsx
│   │   ├── Navbar/
│   │   │   ├── Navbar.module.scss
│   │   │   ├── Navbar.tsx
│   │   │   └── index.ts
│   ├── contato/
│   │   ├── Contato.module.scss
│   │   └── page.tsx
│   ├── home/
│   │   ├── Home.module.scss
│   │   └── page.tsx
│   ├── sobre/
│   │   ├── Sobre.module.scss
│   │   └── page.tsx
│   ├── styles/
│   │   └── globals.scss
│   └── layout.tsx
│
├── public/
│   ├── icons/
│   ├── images/
│   ├── manifest.json
│   ├── sw.js
│   ├── sw.js.map
│   ├── workbox-e43f5367.js
│   └── workbox-e43f5367.js.map
│
├── next-env.d.ts
├── next.config.js
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── .gitignore
```

---

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/estrutura-base-1.git
cd estrutura-base-1
```

### 2. Instalar as dependências

```bash
npm install
# ou
yarn
```

### 3. Rodar o servidor de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

---

## ⚙️ Scripts Disponíveis

| Comando         | Descrição                            |
|----------------|----------------------------------------|
| `dev`          | Inicia o servidor de desenvolvimento   |
| `build`        | Cria a build de produção               |
| `start`        | Inicia a aplicação em produção         |
| `lint`         | Verifica problemas de lint no código   |
| `format`       | Formata o código com Prettier          |

---

## 📦 Deploy

Você pode fazer o deploy facilmente na [Vercel](https://vercel.com/) (recomendado). O projeto já está preparado para isso.

---

## 📱 Suporte a PWA

- Arquivo `manifest.json` já incluído.
- Service Worker configurado para permitir instalação como app mobile.
- Ideal para performance offline e experiência nativa em dispositivos móveis.

---

## ✍️ Estilização

- Utiliza SCSS Modules em cada componente para escopo local e organização.
- Estilo global em `app/styles/globals.scss`.

---

## 💡 Boas Práticas

- Estrutura limpa e modular
- Componentes reutilizáveis
- SEO-friendly (Next.js)
- Código formatado com Prettier e checado com ESLint

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 👨‍💻 Autor

**Valter Vieira Gomes Junior**

- 💼 Desenvolvedor Front-End Júnior
- 📧 valtervieira.dev@gmail.com
- 🌐 [portfolio-valter-dev.vercel.app](https://portfolio-valter-dev.vercel.app)
- 📱 WhatsApp: (11) 9 7756-7993
