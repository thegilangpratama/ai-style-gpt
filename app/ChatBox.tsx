// ChatBox Component

'use client';
import React, { useState, KeyboardEvent, useEffect } from 'react';
import axios from 'axios';
import { FaUser, FaPaperPlane } from 'react-icons/fa'; // Import icons from react-icons
import { BsStars } from "react-icons/bs";
import { Card } from './components/card';

interface Message {
    text: string;
    type: 'user' | 'bot';
}

interface ChatBoxProps {
    messages: Message[];
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

const sampleQuestions = [
    'What are your skills?',
    'What is your GPA?',
    'Tell me about your job experience',
    'What tools do you use?',
];

const ChatBox: React.FC<ChatBoxProps> = ({ messages, setMessages }) => {
    const [input, setInput] = useState('');
    const [isSending, setIsSending] = useState(false); // State to manage AI response delay

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { text: input, type: 'user' };
        setMessages([...messages, userMessage]);
        setInput('');
        setIsSending(true); // Start AI response delay

        try {
            const response = await axios.post('/api/chat', { question: input });
            // Simulate a delay for AI response
            setTimeout(() => {
                const botMessage: Message = { text: response.data.answer, type: 'bot' };
                setMessages([...messages, userMessage, botMessage]);
                setIsSending(false); // End AI response delay
            }, 1000); // 1-second delay for demonstration
        } catch (error) {
            console.error('Error sending message:', error);
            setIsSending(false); // End AI response delay
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSend();
        }
    };

    const handleSampleClick = (question: string) => {
        setInput(question);
    };

    const [typedText, setTypedText] = useState('');

    useEffect(() => {
        if (messages.length > 0) {
            const latestMessage = messages[messages.length - 1];
            if (latestMessage.type !== 'user') {
                let currentText = '';
                let charIndex = 0;
                const typeInterval = setInterval(() => {
                    if (charIndex < latestMessage.text.length) {
                        currentText += latestMessage.text[charIndex];
                        setTypedText(currentText);
                        charIndex++;
                    } else {
                        clearInterval(typeInterval);
                    }
                }, 10); // Adjust the speed of typing effect here
            }
        }
    }, [messages]);

    return (
        <>
            <div className="flex flex-col h-screen">
                {!messages.length ? (
                    <div className="flex justify-center items-center flex-1 flex-col">
                        <div className='flex flex-col items-center space-y-5'>
                            <div>
                                <BsStars className='text-white text-[100px]' />
                            </div>
                            <h2 className="text-xl font-bold tracking-tight text-zinc-100 sm:text-3xl mt-4 text-center">
                                Ask any question about me!
                            </h2>
                            <h3 className="text-xl tracking-tight text-zinc-100 sm:text-xl mt-4 text-center">
                                Explore my professional journey! Ask me anything about my experience.
                            </h3>
                        </div>
                        <div className='mt-10'>
                            <div className='grid grid-cols-2 gap-4 mx-4 my-5'>
                                {sampleQuestions.map((question, idx) => (
                                    <Card
                                        key={idx}
                                    >
                                        <div className="text-white/90 text-sm p-5 rounded-lg" onClick={() => handleSampleClick(question)}>
                                            {question}
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="relative flex-1 overflow-y-auto p-4 space-y-4 md:mx-10 mb-[105px] md:mb-[275px]">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className='flex items-center justify-start'
                            >
                                <div
                                    className='hidden w-8 h-8 rounded-full md:flex items-center justify-center border mr-2 bg-white'
                                >
                                    {msg.type === 'user' ? (
                                        <FaUser className="text-black" />
                                    ) : (
                                        <BsStars className="text-black" />
                                    )}
                                </div>
                                <div
                                    className={`p-3 text-sm text-white text-pretty ${msg.type === 'user' ? 'italic md:not-italic' : ''}`}
                                >
                                    {msg.type === 'user' ? msg.text : (idx === messages.length - 1 ? typedText : msg.text)}
                                </div>
                            </div>
                        ))}
                        {isSending && (
                            <div className="flex items-center justify-start">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center border mr-2 bg-white`}>
                                    <BsStars className="text-black" />
                                </div>
                                <div className="p-3 rounded-lg text-sm text-white">
                                    Let me think...
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="absolute bottom-0 w-full">
                <div className='space-y-2'>
                    {messages.length ? (
                        <div className='hidden md:grid grid-cols-2 gap-4 mx-6 md:mx-10 my-5'>
                            {sampleQuestions.map((question, idx) => (
                                <Card
                                    key={idx}
                                >
                                    <div className="text-white/90 text-sm p-5 rounded-lg" onClick={() => handleSampleClick(question)}>
                                        {question}
                                    </div>
                                </Card>
                            ))}
                        </div>
                    ) : ''}
                    <div className='border-t border-gray-300/50 p-4'>
                        <div className='flex space-x-2 md:mx-5'>
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type your question..."
                                className="w-full bg-transparent border border-gray-300/50 rounded-xl px-4 py-2 text-white text-sm"
                            />
                            <button
                                onClick={handleSend}
                                className="ml-2 border border-gray-300/50 rounded-xl px-4 py-2 text-white flex items-center justify-center"
                            >
                                <FaPaperPlane className="text-white text-sm" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatBox;