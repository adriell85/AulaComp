# Guia Explicativo: Axios

## **O que é Axios?**
Axios é uma biblioteca baseada em Promises para realizar requisições HTTP no navegador e no Node.js. Ela simplifica as interações com APIs, tornando o envio de dados e a obtenção de respostas mais eficiente.

### **Principais recursos do Axios:**
1. **Baseado em Promises**: Suporte a `.then()` e `async/await`.
2. **Suporte a JSON automático**: Serializa automaticamente objetos para JSON ao enviar dados e converte respostas JSON em objetos JavaScript.
3. **Interceptadores**: Permite manipular requisições e respostas antes de serem enviadas ou processadas.
4. **Cancelamento de requisições**: Suporte ao cancelamento de requisições usando `CancelToken`.
5. **Configuração global**: Permite configurar uma instância para reutilizar valores padrão, como URL base e cabeçalhos.
6. **Compatível com navegadores e Node.js**.

---

## **Instalação**
### Com npm:
```bash
npm install axios
```

### Com yarn:
```bash
yarn add axios
```

---

## **Exemplos de Uso**

### **1. Realizar uma requisição GET**
```javascript
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response.data); // Manipula os dados da resposta
  })
  .catch(error => {
    console.error(error); // Lida com erros
  });
```

### **2. Realizar uma requisição POST**
```javascript
import axios from 'axios';

axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'Título do Post',
  body: 'Conteúdo do post',
  userId: 1
})
  .then(response => {
    console.log(response.data); // Dados retornados pelo servidor
  })
  .catch(error => {
    console.error(error); // Lida com erros
  });
```

### **3. Usando `async/await`**
```javascript
import axios from 'axios';

async function fetchPosts() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchPosts();
```

### **4. Configuração de Cabeçalhos**
```javascript
axios.get('https://jsonplaceholder.typicode.com/posts', {
  headers: {
    Authorization: 'Bearer token-aqui'
  }
})
  .then(response => {
    console.log(response.data);
  });
```

### **5. Definir uma URL base**
```javascript
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

api.get('/posts')
  .then(response => {
    console.log(response.data);
  });
```

### **6. Usando Interceptadores**
- **Interceptando Requisições:**
```javascript
axios.interceptors.request.use(config => {
  console.log('Requisição enviada:', config);
  return config;
}, error => {
  return Promise.reject(error);
});
```

- **Interceptando Respostas:**
```javascript
axios.interceptors.response.use(response => {
  console.log('Resposta recebida:', response);
  return response;
}, error => {
  return Promise.reject(error);
});
```

### **7. Cancelando Requisições**
```javascript
import axios from 'axios';

const source = axios.CancelToken.source();

axios.get('https://jsonplaceholder.typicode.com/posts', {
  cancelToken: source.token
}).catch(thrown => {
  if (axios.isCancel(thrown)) {
    console.log('Requisição cancelada:', thrown.message);
  } else {
    console.error(thrown);
  }
});

// Cancelar a requisição
source.cancel('Operação cancelada pelo usuário.');
```

---

## **Diferenças entre Axios e Fetch API**
| Aspecto                | Axios                                   | Fetch API                            |
|------------------------|-----------------------------------------|--------------------------------------|
| **Baseado em Promises**| Sim                                    | Sim                                  |
| **Serialização JSON**  | Automática                             | Necessário usar `response.json()`    |
| **Interceptadores**    | Sim                                    | Não                                  |
| **Cancelamento**       | Sim                                    | Suporte limitado                    |
| **Configuração Global**| Sim                                    | Não                                  |
| **Suporte a Node.js**  | Sim                                    | Não                                  |

---

## **Vantagens do Axios**
1. Sintaxe mais simples e limpa.
2. Suporte embutido para transformação de dados e cabeçalhos.
3. Manipulação robusta de erros.
4. Ideal para projetos que utilizam tanto front-end quanto back-end (com Node.js).

---

## **Conclusão**
Axios é uma biblioteca poderosa para realizar requisições HTTP em aplicações JavaScript. Com seus recursos avançados e facilidade de uso, é uma escolha popular para desenvolvedores que trabalham com APIs. Apesar disso, a Fetch API nativa do navegador ainda pode ser suficiente para casos simples.

Se você estiver construindo um projeto robusto e reutilizável, o Axios oferece flexibilidade e conveniência adicionais!