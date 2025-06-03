# 🐾 AuMiau Store – Loja de Pets e Adoção

Loja online de pets com informações sobre raças de cães e gatos, além de integração com uma API de adoção de animais reais. Desenvolvido em React com TypeScript, Redux e LocalStorage.
=======
# 🌐 Estrutura Base - Next.js + TypeScript
> 🚀 Base moderna e escalável para aplicações web com Next.js 14+, SCSS e suporte PWA

<p align="center">
  <img src="https://a.imagem.app/BKaHX1.png" alt="Banner Estrutura Base Next.js" style="max-width: 100%; height: auto;" />
</p>

## 📚 Sumário

- [✨ Funcionalidades](#-funcionalidades)
- [✅ Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📁 Estrutura de Pastas](#-estrutura-de-pastas)
- [🚀 Como Executar o Projeto](#-como-executar-o-projeto)
- [⚙️ Scripts Disponíveis](#️-scripts-disponíveis)
- [📦 Deploy](#-deploy)
- [📱 Suporte a PWA](#-suporte-a-pwa)
- [✍️ Estilização](#️-estilização)
- [💡 Boas Práticas](#-boas-práticas)
- [📄 Licença](#-licença)
- [👨‍💻 Autor](#-autor)


![Next.js](https://img.shields.io/badge/Next.js-14+-black?logo=nextdotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue?logo=typescript)
![SCSS Modules](https://img.shields.io/badge/SCSS-Modules-pink?logo=sass)
![PWA Ready](https://img.shields.io/badge/PWA-Ready-green?logo=googlechrome)
![Template ATI](https://img.shields.io/badge/Template-ATI-blueviolet?style=flat-square)
![MIT License](https://img.shields.io/badge/license-MIT-brightgreen)


> 🧱 **Este repositório é um Template Padrão ATI — Academia Técnica Interna.**  
> Use o botão `Use this template` no GitHub para iniciar seu projeto com esta estrutura base!

## ✨ Funcionalidades

- Estrutura otimizada com Next.js 14+
- Suporte completo a PWA e instalação como app mobile
- Componentes modulares com SCSS isolado
- Layout responsivo pronto para produção
- SEO configurado nativamente
- Deploy fácil via Vercel

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
