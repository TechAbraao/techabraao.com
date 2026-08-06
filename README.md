# Meu Site Pessoal (portfólio)

- Portfólio descritivo oficial do __Abraão Santos (Techabraao).__ 


### Prévia ao Vivo (em breve)
```bash
https://techabraao.com
```

### Começando
Siga os passos abaixo para clonar e executar este projeto localmente.

#### 1. Clone o repositório
```bash
git clone git@github.com:TechAbraao/techabraao.com.git
```

#### 2. Navegue até a pasta do projeto
```bash
cd techabraao.com
```

#### 3. Configure o nome de usuário do GitHub
Antes de rodar o projeto, configure seu nome de usuário do GitHub para buscar seus repositórios.

Edite o arquivo:
```bash
./docs/js/configs.js
```
E atualize:
```javascript
const CONFIG = {
    GITHUB_USERNAME: 'seu_usuario'
}
```

#### 4. Abra o projeto
Como este é um site estático, você pode simplesmente abrir o arquivo `index.html` no seu navegador.
Ou, para uma melhor experiência de desenvolvimento, você pode usar um servidor local:
#### Usando o Live Server do VSCODE
- Instale a extensão Live Server
- Clique com o botão direito em ```index.html```
- Clique em Open with Live Server
- O projeto agora deverá estar rodando localmente!

### Usando Docker 
#### 1. Construindo a imagem Docker
Se você quiser criar uma imagem Docker para usar em um container, faça o seguinte:
```bash
docker build -f dockerfiles/Dockerfile -t techabraao.com .
```
Depois, inicie o container:
```bash
docker run -p <porta>:80 techabraao.com
```
Ele agora estará disponível em:
```bash
http://localhost:<porta>
```

#### 2. Baixando a imagem do Docker Hub
Para obter a imagem do Docker Hub, você também precisará especificar a versão do projeto:
```bash
docker run -d -p 8000:80 techabraao/techabraao.com:latest
```