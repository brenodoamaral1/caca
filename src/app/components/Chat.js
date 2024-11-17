'use client'

import { useState } from "react";
import Image from "next/image";
import sendMessageToChatbot from '../../services/api'

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const [messages, setMessages] = useState([
    { sender: "bot", text: "Olá! Como posso ajudar você hoje?" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = async () => {
    if (inputValue.trim() === "") return;
  
    // Adiciona a mensagem do usuário na interface
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "user", text: inputValue },
    ]);
  
    const userMessage = inputValue; // Armazena a mensagem do usuário
    setInputValue(""); // Limpa o campo de entrada
  
    try {
      // Envia a mensagem para o backend e recebe a resposta
      const chatbotResponse = await sendMessageToChatbot(userMessage);
  
      // Adiciona a resposta do chatbot na interface
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: chatbotResponse },
      ]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "Ops! Algo deu errado. Tente novamente." },
      ]);
    }
  };
  
  return (
    <>
      {/* Botão do Chat */}
      {!isOpen && (
        <div
          onClick={toggleChat}
          className="fixed bottom-0 right-40 bg-blue-800 text-white w-16 h-10 flex items-center justify-center shadow-lg cursor-pointer"
          style={{ borderTopLeftRadius: "6px", borderTopRightRadius: "6px" }}
        >
            <Image
                src='/chaticon.svg'
                alt='icon'
                width={20}
                height={20}
                className="object-cover"
            />
        </div>
      )}

      {/* Janela do Chat */}
      {isOpen && (
        <div
          className="fixed bottom-0 right-6 w-150 h-3/4 bg-white rounded-lg shadow-lg border border-gray-300 flex flex-col"
          style={{ marginRight: "16px" }}
        >
          {/* Cabeçalho do Chat */}
          <div className="bg-blue-800 text-white p-4 flex items-center justify-between rounded-t-lg">
            <h3 className="text-lg font-bold">Cacá</h3>
            <Image
                src='/chaticon.svg'
                alt='icon'
                width={20}
                height={20}
                className="object-cover"
            />
            <button
              onClick={toggleChat}
              className="text-white text-xl hover:text-gray-200"
            >
              ✖
            </button>
          </div>

          {/* Conteúdo do Chat */}
          <div className="flex-1 mb-12 p-4 bg-blue-50 bg-[url('/chatbg.svg')] overflow-y-auto">
            {messages.map((message, index) => (
                <div
                key={index}
                className={`flex mb-2 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                }`}
                >
                <div
                    className={`max-w-xs px-4 py-2 rounded-lg text-white ${
                    message.sender === "user"
                        ? "bg-blue-600 text-right"
                        : "bg-gray-400 text-left"
                    }`}
                >
                    {message.text}
                </div>
                </div>
            ))}
            </div>
            {/* Caixa de Texto */}
          <div className="fixed bottom-1 p-4 flex items-center">
            <input
              type="text"
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 px-4 py-2 border rounded-2xl outline-none text-sm text-black"
            />
            <button  onClick={handleSendMessage} className="bg-white border text-white px-2 py-2 ml-2 rounded-2xl text-sm">
            <Image
                src='/sendicon.svg'
                alt="icon"
                width={20}
                height={20}
                className="object-cover "
            />
            </button>
          </div>
          </div>
      )}
    </>
  );
}

