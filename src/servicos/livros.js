// serviço de livro 
// importa o axios
import axios from "axios";  

// cria a API
const livroAPI = axios.create({baseURL:"http://localhost:8000/livros"})

function getLivros() {
    const response = livroAPI.get('/')
    // retorna a API
    return response.data
}

export {
    getLivros
}
