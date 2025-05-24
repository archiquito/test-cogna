# Teste Cogna

Este é um projeto de teste técnico desenvolvido com Next.js, React e Tailwind CSS.

## Tecnologias Utilizadas

- **Next.js 14**: Framework React com suporte a SSR e rotas dinâmicas
- **React**: Biblioteca para construção de interfaces
- **Tailwind CSS**: Framework CSS utilitário para estilização
- **Vitest**: Framework de testes unitários e de integração
- **Testing Library**: Biblioteca para testes de componentes React
- **ESLint**: Linter para manter a qualidade do código

## Escolhas Técnicas

### Next.js

- Escolhido por sua performance, SEO e facilidade de desenvolvimento
- Suporte nativo a SSR (Server Side Rendering)
- Sistema de rotas dinâmicas para páginas de produtos
- Otimização automática de imagens

### Tailwind CSS

- Desenvolvimento mais rápido com classes utilitárias
- Menor tamanho de bundle final
- Fácil customização e manutenção
- Suporte a temas e modo escuro

### Vitest + Testing Library

- Vitest: Mais rápido que Jest e melhor integração com Vite
- Testing Library: Foco em testar comportamentos do usuário
- Suporte a testes unitários e de integração
- Configuração simplificada

## Como Executar

1. Instale as dependências:

```bash
npm install
```

2. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse [http://localhost:3000](http://localhost:3000)

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria a build de produção
- `npm run start`: Inicia o servidor de produção
- `npm run lint`: Executa o ESLint
- `npm run lint:fix`: Corrige problemas do ESLint automaticamente
- `npm run test:unit`: Executa testes unitários
- `npm run test:unit:watch`: Executa testes unitários em modo watch
- `npm run test:integration`: Executa testes de integração
- `npm run test:integration:watch`: Executa testes de integração em modo watch

## Estrutura do Projeto

```
src/
  ├── app/              # Páginas e layouts do Next.js
  ├── components/       # Componentes React reutilizáveis
  │   ├── ui/          # Componentes de UI base
  │   └── ...          # Componentes específicos
  ├── test/            # Configurações de teste
  └── __tests__/       # Testes unitários e de integração
```

## Convenções de Código

- ESLint configurado com regras do Airbnb
- Preferência por componentes funcionais
- Testes para componentes críticos
- Commits seguindo Conventional Commits

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
