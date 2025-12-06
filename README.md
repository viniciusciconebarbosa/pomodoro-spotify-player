# 🍅 Pomodoro App - React + Tauri [Em Desenvolvimento - Prototipo - Alpha]

Um aplicativo de Pomodoro moderno e elegante desenvolvido com React, TypeScript e Tauri/Rust, que oferece uma experiência de usuário fluida e uma interface intuitiva para ajudá-lo a se manter focado e produtivo.

Este aplicativo foi desenvolvido para fins didáticos — criei com o objetivo de compreender o ambiente e as principais funcionalidades do framework Tauri. Como estou aprendendo Rust, aproveitei o Tauri para migrar meus conhecimentos de TypeScript para Rust. Excelente framework… este alpha foi feito em mais ou menos umas 4 horas. Foi necessário estudar com atenção a documentação dos métodos e funções disponíveis nas bibliotecas oferecidas pela equipe do Tauri.

📌 Funcionalidades

- **Temporizador Pomodoro:** Ciclos de trabalho e descanso configuráveis para se adequar ao seu fluxo de trabalho.
- **Controles Intuitivos:** Inicie, pause e reinicie o temporizador com facilidade.
- **Janela Fixa:** Mantenha o aplicativo sempre visível com a função AlwaysOnTop fixar a janela.
- **Player Spotify:** Controle a reprodução de suas músicas no aplicativo.
- **Design Minimalista:** Uma interface limpa e sem distrações para mantê-lo focado.
- **Multiplataforma:** Funciona em Windows, macOS e Linux, graças ao Tauri.

📦 Tecnologias Utilizadas

- **React:** Biblioteca principal para a construção da interface do usuário.
- **TypeScript:** Tipagem estática para um código mais robusto e de fácil manutenção.
- **Tauri:** Framework para a criação de aplicativos de desktop com tecnologias web.
- **Vite:** Ferramenta de build rápida para o desenvolvimento frontend.

🗿 Estrutura do Projeto

```
├── src/
│   ├── assets/               # Recursos (imagens, vídeos)
│   ├── components/           # Componentes React
│   │   ├── BackgroundVideo.tsx # Componente de vídeo de fundo
│   │   ├── Controls.tsx        # Controles do temporizador
│   │   ├── ModeTabs.tsx        # Abas de modo (Pomodoro, etc.)
│   │   ├── PinButton.tsx       # Botão de fixar
│   │   ├── SpotifyPlayer.tsx   # Player do Spotify
│   │   ├── TimerDisplay.tsx    # Exibição do temporizador
│   │   └── TitleBar.tsx        # Barra de título customizada
│   ├── App.css               # Estilos globais
│   ├── App.tsx               # Componente principal do aplicativo
│   ├── main.tsx              # Ponto de entrada do React
│   └── types.ts              # Tipos TypeScript
├── src-tauri/                # Código do backend em Rust
│   ├── capabilities/         # Capacidades do Tauri
│   ├── icons/                # Ícones do aplicativo
│   ├── src/                  # Código-fonte Rust
│   │   ├── lib.rs
│   │   └── main.rs
│   ├── Cargo.toml            # Dependências do Rust
│   └── tauri.conf.json       # Configuração do Tauri
├── package.json              # Dependências e scripts
└── vite.config.ts            # Configuração do Vite
```

## foto:
<img width="257" height="583" alt="image" src="https://github.com/user-attachments/assets/875ca6c7-680c-4f2e-a954-bcd4b2a24991" />




## Como Usar

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Rust](https://www.rust-lang.org/tools/install)
- Gerenciador de pacotes (npm ou yarn)

### Instalação

1. Clone o repositório:
   ```sh
   git clone <URL_DO_REPOSITORIO>
   cd app-pomodoro
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

### Inicie o projeto

```sh
npm run tauri dev
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento do Vite.
- `npm run build`: Compila o código TypeScript e gera o build para seu navegador.
- `npm run tauri dev`: Inicia o aplicativo em modo de desenvolvimento.
- `npm run tauri build`: Gera o build do aplicativo para produção.

## Licença

Este projeto está licenciado. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
