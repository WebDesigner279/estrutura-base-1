# 🐾 AuMiau Store – Loja de Pets e Adoção

Loja online de pets com informações sobre raças de cães e gatos, além de integração com uma API de adoção de animais reais. Desenvolvido em React com TypeScript, Redux e LocalStorage.

---

## 🚀 Tecnologias Utilizadas

- ⚛️ React
- 🟦 TypeScript
- 📦 Redux Toolkit
- 🎨 SCSS Modules
- 💾 LocalStorage
- 🐶 [The Dog API](https://thedogapi.com/)
- 🐱 [The Cat API](https://thecatapi.com/)
- 🐕‍🦺 [Petfinder API](https://www.petfinder.com/developers/)

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
│   │   │   ├── InstallButton.module.scss
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
````

## 📦 Instalação

### 1- Clone o repositório:

```bash
git clone https://github.com/seu-usuario/petzi.git
cd petzi
````

### 2- Instale as dependências:

```bash
npm install
````

### 3- Crie um arquivo .env com as chaves:

````ini
VITE_PETFINDER_API_KEY=sua_api_key
VITE_PETFINDER_SECRET=sua_secret
````
### 4- Rode o projeto:

```bash
npm run dev
````

## 🧪 Funcionalidades

✅ Listagem de raças de cães e gatos com detalhes

✅ Favoritar pets no LocalStorage

✅ Lista de animais reais disponíveis para adoção

✅ Layout responsivo e acessível

✅ Filtros por raça, tipo e localização
