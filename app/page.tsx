'use client'
import Link from "next/link";
import React from "react";
import ChatBox from "./ChatBox";
import { useState } from "react";
import { Navbar } from "./components/nav";

interface Message {
    text: string;
    type: 'user' | 'bot';
}

export default function Home() {
    const [messages, setMessages] = useState<Message[]>([]);

    const handleClearSession = () => {
        setMessages([]);
    };

    return (
        <div className="w-screen h-screen overflow-hidden bg-gradient-to-tl from-[#000015]/50 via-[#001B44]/50 to-[#00030A]/50">
            <div className="flex h-full">
                <div className="hidden md:flex flex-shrink-0 w-[250px] ml-3 py-3">
                    <div className="w-full h-full overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
                        <div className="mx-3 my-3 text-white">
                            <div onClick={handleClearSession} className="border border-gray-300/50 rounded-xl px-4 py-2 text-sm flex items-center justify-center cursor-pointer">
                                Reset Session
                            </div>
                            <div className="mt-6 ml-2">
                                <h2 className="text-lg font-semibold mb-2">About the Project</h2>
                                <p className="text-sm mb-4">
                                    This project is a word-matching based chat application designed to provide information related to my professional working experience. Instead of using AI, it relies on keyword matching to deliver relevant responses. However, the framework is flexible and can be easily adapted for AI and large language model (LLM) based services, allowing for more advanced and dynamic interactions in the future.
                                </p>
                                <h2 className="text-lg font-semibold mb-2">About Me</h2>
                                <p className="text-sm">
                                    I'm Gilang K. Pratama, a full-stack developer with a passion for creating efficient and user-friendly applications. With experience in a wide range of technologies, I am dedicated to delivering high-quality software solutions. I enjoy working on challenging projects that push the boundaries of innovation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 ml-3 py-3 mr-3">
                    <div className="w-full h-full overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600">
                        <div className="h-full rounded-md">
                            <ChatBox messages={messages} setMessages={setMessages} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
