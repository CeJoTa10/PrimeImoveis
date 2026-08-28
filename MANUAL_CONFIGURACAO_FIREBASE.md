# Manual de Configuração: Autenticação e Confirmação de E-mail com Firebase Nativo

Este manual descreve em detalhes a configuração de dependências, configuração do Console do Firebase, fluxo de envio e confirmação do código nativo de verificação (`oobCode` / link de confirmação).

---

## 1. Dependências do Projeto

### Frontend (`/frontend`)
As dependências necessárias para a autenticação e interface no frontend são:

```json
{
  "dependencies": {
    "firebase": "^10.8.0",
    "vue": "^3.4.19",
    "vue-router": "^4.3.0",
    "pinia": "^2.1.7",
    "lucide-vue-next": "^0.344.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^5.0.4",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "vite": "^5.1.4"
  }
}
```

#### Instalação das dependências no frontend:
```bash
cd frontend
npm install firebase vue vue-router pinia lucide-vue-next
```

---

### Backend (`/backend`)
Se o backend precisar validar tokens de usuários autenticados ou gerenciar usuários com privilégios administrativos:

```json
{
  "dependencies": {
    "firebase-admin": "^12.0.0",
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5"
  }
}
```

#### Instalação das dependências no backend:
```bash
cd backend
npm install firebase-admin express cors dotenv
```

---

## 2. Configuração no Firebase Console

Para que a confirmação de e-mail funcione corretamente em modo nativo, siga os passos abaixo no [Console do Firebase](https://console.firebase.google.com/):

### Passo 1: Ativar Provedor E-mail/Senha
1. Acesse o seu projeto no Firebase Console.
2. No menu lateral esquerdo, vá em **Build (Criação)** > **Authentication**.
3. Clique na aba **Sign-in method (Método de login)**.
4. Localize e clique em **Email/Password (E-mail/senha)**.
5. Ative a primeira opção (**Permitir que os usuários se inscrevam usando e-mail e senha**).
6. Clique em **Salvar**.

---

### Passo 2: Configurar o Modelo de E-mail (Email Template)
1. Ainda em **Authentication**, clique na aba **Templates (Modelos)**.
2. Clique no modelo **Email address verification (Verificação do endereço de e-mail)**.
3. Clique no ícone de lápis ✏️ para editar:
   - **Nome do remetente**: ex. `Prime Imóveis`
   - **E-mail do remetente**: `noreply@prime-imoveis-98b9a.firebaseapp.com` (ou seu domínio verificado)
   - **Assunto**: `Confirme seu e-mail para ativar sua conta na Prime Imóveis`
   - **Corpo da mensagem**:
     ```html
     Olá %DISPLAY_NAME%,

     Obrigado por se cadastrar na Prime Imóveis!
     Para ativar sua conta e liberar seu acesso, clique no link abaixo:

     %LINK%

     Se o link não abrir automaticamente, você pode copiar o código de verificação contido no link (o parâmetro oobCode) e colá-lo diretamente na tela de confirmação do nosso aplicativo.

     Caso não tenha solicitado este cadastro, por favor ignore este e-mail.
     ```
4. Clique em **Salvar**.

---

### Passo 3: Configurar Domínios Autorizados (Authorized Domains)
1. Em **Authentication** > **Settings (Configurações)** > **Authorized domains (Domínios autorizados)**.
2. Certifique-se de que os seguintes domínios estão listados:
   - `localhost`
   - `127.0.0.1`
   - `prime-imoveis-98b9a.firebaseapp.com`
   - Seu domínio de produção (ex: `app.primeimoveis.com.br`)

---

### Passo 4: (Opcional) Personalizar o URL de Ação (Action URL)
Por padrão, o link do Firebase aponta para `https://<projeto>.firebaseapp.com/__/auth/action`.

Para que o link aponte diretamente para o seu frontend:
1. No modelo de e-mail (Templates > Email address verification), clique em **Customize action URL (Personalizar URL da ação)**.
2. Defina a URL: `http://localhost:5173/auth/action` (ou `https://seu-dominio.com/auth/action`).
3. Desta forma, quando o usuário clicar no e-mail, ele será redirecionado para a rota dedicada do frontend que valida o código automaticamente.

---

## 3. Como Funciona a Implementação do Código de 6 Dígitos (OTP)

### 1. Cadastro com Confirmação e Visualização de Senha
- O usuário preenche Nome, E-mail, Senha e **Confirmação de Senha**.
- Há botões com ícone de olho (`Eye` / `EyeOff`) para alternar entre ver e ocultar a senha digitada.
- Se as senhas não coincidirem, o sistema exibe alerta e impede o envio.
- Ao clicar em **"Criar Conta & Receber Código"**:
  1. Cria a conta no Firebase Client (`createUserWithEmailAndPassword`).
  2. Chama o endpoint do backend `POST /api/auth/send-otp`.
  3. O backend gera um código numérico aleatório de 6 dígitos, salva no Firestore (ou memória em dev) com expiração de 5 minutos, e dispara o e-mail formatado via Nodemailer.
  4. O frontend abre automaticamente a tela de inserção dos **6 dígitos**.

---

### 2. Validação dos 6 Dígitos e Ativação no Firebase
- O usuário digita os 6 dígitos (com suporte a colar o código completo e foco automático entre os campos).
- Ao confirmar, o frontend chama `POST /api/auth/verify-otp` enviando `{ email, code, uid }`.
- O backend valida o código e, estando correto, atualiza o usuário no Firebase Auth via Admin SDK:
  ```javascript
  await auth.updateUser(uid, { emailVerified: true });
  ```
- O frontend recarrega a sessão (`reloadCurrentUser()`), confirmando a ativação imediata da conta.

---

### 3. Configuração de Envio de E-mail (SMTP) no Backend (`/backend/.env`)
Para que o backend envie os e-mails com os 6 dígitos via SMTP real (ex: Gmail, SendGrid, Hostinger, etc.), preencha no arquivo `.env` do backend:

```env
PORT=3000

# Configuração SMTP para envio dos 6 dígitos
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-de-aplicativo-do-google
EMAIL_FROM="Prime Imóveis" <seu-email@gmail.com>
```

> 💡 **Ambiente de Desenvolvimento (Offline / Sem SMTP):**
> Se as variáveis SMTP não forem preenchidas, o backend exibirá o código de 6 dígitos gerado diretamente no terminal/console do backend (`🔑 [OTP DEV FALLBACK] Código de 6 dígitos gerado: XXXXXX`), e o código padrão de teste `123456` também é aceito em modo offline.

---

## 4. Testes e Validação do Fluxo

1. **Cadastrar Novo Usuário**:
   - Abra o aplicativo em `http://localhost:5173`.
   - Clique em **"Entrar"** > **"Criar Conta"**.
   - Preencha Nome, E-mail e Senha.
   - O modal exibirá a tela de confirmação informando que o link e o código foram enviados.
2. **Confirmar E-mail**:
   - **Opção A**: Copie o `oobCode` recebido no e-mail e cole no campo de confirmação do modal.
   - **Opção B**: Abra a URL `/auth/action?mode=verifyEmail&oobCode=<SEU_CODIGO>`.
3. **Fazer Login**:
   - Realize o login com as credenciais cadastradas. O acesso será concedido imediatamente.
