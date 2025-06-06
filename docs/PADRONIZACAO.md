```tsx
import item from '@/models/Servicos'
// import PetCard from '../../Card/Servicos/PetCard'
import PetCard from '@/components/Card/Servicos/PetCard' // usar @ como padrão

// export { default } from "./Footer";
export { default } from "@/components/Footer/Footer" // usar @ como padrão 
```

| Caminho                     | Funciona? | Indicado para                                |
| --------------------------- | --------- | -------------------------------------------- |
| `@/store`                   | ✅         | Quando vem de longe no projeto.              |
| `./store`                   | ✅         | Quando está perto (mesmo nível ou subnível). |
| `@store` com alias definido | ✅         | Padrão mais limpo e legível.                 |
| `../../../store`            | ⚠️        | Funciona, mas é difícil de manter.           |

Configuração no `tsconfig.json` com aliases nomeados é **a melhor escolha** por:

✅ **Padronizar** todos os seus projetos com clareza  
✅ **Evitar caminhos relativos confusos**  
✅ **Melhorar a produtividade** com _autoimport_ e _autocomplete_ no VSCode  
✅ **Separar contextos** (componentes, páginas, estilos) visualmente


```json
"paths": {
  "@/*": ["./app/*"],
  "@components/*": ["app/components/*"],
  "@styles/*": ["app/styles/*"],
  "@home/*": ["app/home/*"],
  "@sobre/*": ["app/sobre/*"],
  "@contato/*": ["app/contato/*"]
}
```


---
## Utilize arquivo `index.ts` dentro de pasta de componente

### Benefícios
### **1. Importações mais limpas e organizadas**

Com o `index.ts`, você pode importar o componente sem precisar referenciar diretamente o arquivo `.tsx`

```tsx
// Antes (sem `index.ts`):
import Footer from '@/app/components/Footer/Footer';

// Depois (com `index.ts`):
import Footer from '@/app/components/Footer';
```

Isso torna o código mais limpo e intuitivo, especialmente em projetos grandes com muitos componentes.

---

### ✅ **2. Encapsulamento da lógica de exportação**

O `index.ts` permite que você controle **o que é exportado** de cada pasta. Isso é útil caso a pasta contenha outros arquivos (como hooks, constantes ou utilitários) e você queira expor apenas o componente principal:

```ts
// components/Footer/index.ts
export { default } from './Footer';

// Ou ainda:
export { default as Footer } from './Footer';
export * from './Footer.types'; // se houver
```

---

### ✅ **3. Facilidade de manutenção**

Quando você renomeia ou reorganiza arquivos internos, como `Footer.tsx`, as mudanças precisam ser feitas apenas dentro do `index.ts`. As importações espalhadas pelo projeto continuam apontando para a pasta `Footer/`, evitando erros e retrabalho.

---

### ✅ **4. Padrão de projeto profissional**

Adotar `index.ts` em todas as pastas de componentes segue boas práticas comuns em projetos de médio e grande porte (inclusive em bibliotecas como Material UI, React Bootstrap, etc.), promovendo **consistência e previsibilidade**.

---

### ✅ **5. Facilita a exportação em massa**

Se você quiser criar um `index.ts` dentro da pasta `components/` para exportar todos os componentes de uma vez:

```ts
// components/index.ts 
export { default as Footer } from './Footer'; 
export { default as Header } from './Header'; 
export { default as Button } from './Button';
```

```ts
// Uso das importações centralizadas
import { Footer, Header, Button } from '@/app/components';