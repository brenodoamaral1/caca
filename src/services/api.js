import axios from "axios";



export default async function sendMessageToChatbot(message) {
    try {
      const response = await axios.post('http://localhost:3001/chat', {
        message: message,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // A resposta do servidor deve estar em response.data
      const chatbotResponse = response.data.response;
      console.log('Resposta do chatbot:', chatbotResponse);
  
      // Retorne a resposta para uso na interface do usuário
      return chatbotResponse;
  
    } catch (error) {
      console.error('Erro ao enviar mensagem para o chatbot:', error);
  
      // Trate o erro conforme necessário na sua aplicação
      throw error;
    }
  }