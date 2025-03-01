"use client";
import React, {useState, useEffect, useRef} from "react";
import {Input, Button} from "reactstrap";
import {Send, X} from "lucide-react";
import "./ChatBot.css";

const predefinedResponses = {
    calendario: "El calendario académico para este semestre es.",
    horario: "Puedes consultar tu horario de clases en el portal del estudiante.",
    inscripción: "Los períodos de inscripción para cursos son:.",
    biblioteca: "La biblioteca se encuentra en el edificio central y su horario es de 8:00 a 20:00.",
    servicios: "Para contactar al departamento de servicios estudiantiles, llama al 123-4567 o visita.",
    eventos: "Esta semana se tiene programado el evento [nombre del evento] en el campus.",
    apoyo: "Si necesitas ayuda para manejar el estrés, puedes acudir al centro de bienestar estudiantil.",
    discapacidades: "Existen recursos y adaptaciones disponibles para estudiantes con discapacidades. Consulta con [departamento].",
    asesoramiento: "Ofrecemos tutorías y asesoramiento académico. Visita el sitio web para más información.",
    pasantias: "Puedes encontrar información sobre pasantías y prácticas profesionales en.",
    curriculum: "Para mejorar tu currículum vitae, te recomendamos asistir a los talleres que ofrece la universidad.",
    entrevistas: "Se imparten talleres de preparación para entrevistas en [enlace].",
    vidaEstudiantil: "En el campus puedes participar en clubes y actividades extracurriculares. Consulta para más detalles.",
    alimentacion: "Las opciones de alimentación en el campus incluyen cafeterías y comedores.",
};

const allSuggestedQuestions = [
    "¿Dónde puedo ver mi horario?",
    "¿Cuáles son las fechas de inscripción?",
    "¿Cómo contacto a servicios estudiantiles?",
    "¿Dónde está la biblioteca?",
    "¿Qué eventos hay esta semana?",
    "¿Cómo puedo obtener apoyo académico?",
    "¿Qué recursos hay para estudiantes con discapacidades?",
    "¿Dónde puedo encontrar información sobre pasantías?",
    "¿Cómo puedo mejorar mi currículum?",
    "¿Dónde puedo prepararme para entrevistas?",
    "¿Qué actividades extracurriculares hay?",
    "¿Dónde puedo comer en el campus?",
];

//funcion para desordenar las preguntas sugeridas
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Componentes ChatBot
export default function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [suggestedQuestions, setSuggestedQuestions] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const chatWindowRef = useRef(null);

    // Efecto para inicializar las preguntas sugeridas
    // y cambiarlas cada 5 segundos
    useEffect(() => {
        setSuggestedQuestions(shuffleArray([...allSuggestedQuestions]).slice(0, 3));

        const interval = setInterval(() => {
            setSuggestedQuestions(shuffleArray([...allSuggestedQuestions]).slice(0, 3));
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Efecto para desplazar el chat hacia abajo cuando hay nuevos mensajes
    useEffect(() => {
        if (chatWindowRef.current) {
            chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
    }, [messages]);

    // Función para obtener la respuesta del chatbot
    const getResponse = (message) => {
        for (const key in predefinedResponses) {
            if (message.toLowerCase().includes(key)) return predefinedResponses[key];
        }
        return "Lo siento, no tengo información sobre ese tema. ¿Podrías reformular tu pregunta?";
    };

    // Función para manejar el envío de mensajes
    const handleSend = () => {
        if (input.trim() === "") return;

        const userMessage = {text: input, sender: "user"};
        setMessages((prevMessages) => [...prevMessages, userMessage]);
        setInput("");

        setIsTyping(true);
        setTimeout(() => {
            setIsTyping(false);
            const botMessage = {text: getResponse(input), sender: "bot"};
            setMessages((prevMessages) => [...prevMessages, botMessage]);
        }, 2000);
    };

    // Función para manejar las preguntas sugeridas
    const handleSuggestedQuestionClick = (question) => {
        setInput(question);
        handleSend();
    };

    return (
        <>
            <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
                <img src="./Logo.jpg" alt="Chatbot"/>
            </button>
            {isOpen && (
                <div className="chat-container">
                    <div className="chat-card">
                        <div className="chat-header">
                            <h2>Chatbot UDB</h2>
                            <button className="close-btn" onClick={() => setIsOpen(false)}>
                                <X size={20}/>
                            </button>
                        </div>
                        <div className="chat-content">
                            <div className="chat-window" ref={chatWindowRef}>
                                {messages.map((msg, index) => (
                                    <div key={index} className={`message ${msg.sender}`}>
                                        {msg.sender === "bot" && (
                                            <div className="bot-avatar-chat">
                                                <img src="/img/bot.png" alt="Chatbot" width="30" height="30"/>
                                            </div>
                                        )}
                                        <span>{msg.text}</span>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="typing-indicator">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                )}
                            </div>
                            <div className="suggested-questions">
                                <h3>Preguntas frecuentes</h3>
                                {suggestedQuestions.map((question, index) => (
                                    <button
                                        key={index}
                                        className="suggested-btn"
                                        onClick={() => handleSuggestedQuestionClick(question)}
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="chat-input">
                            <Input
                                type="text"
                                placeholder="Escribe tu pregunta..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                            />
                            <Button color="primary" onClick={handleSend}>
                                <Send size={20}/>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}