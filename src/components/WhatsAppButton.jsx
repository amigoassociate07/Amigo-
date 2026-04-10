import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User } from 'lucide-react';

const WhatsAppButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [userMessage, setUserMessage] = useState("");
    
    // Config
    const phoneNumber = "919522700027"; 
    const defaultText = "Hello! I'm interested in Amigo Associate services.";

    const handleSend = (e) => {
        if (e) e.preventDefault();
        const finalMessage = userMessage.trim() || defaultText;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
        window.open(whatsappUrl, '_blank');
        setIsOpen(false);
        setUserMessage("");
    };

    return (
        <div className="fixed right-6 bottom-24 md:bottom-10 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[320px] sm:w-[380px] bg-white rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.3)] border border-gray-100 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-6 text-white relative">
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/30">
                                        <User className="w-7 h-7" />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center">
                                        <div className="w-2.5 h-2.5 bg-[#25D366] rounded-full animate-pulse" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-black text-lg leading-tight uppercase tracking-tight">Amigo Associate</h3>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">Support Team • Online</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 p-2 hover:bg-black/10 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Body / Chat Area */}
                        <div className="p-6 bg-corex-gray/30 flex-grow">
                            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[85%]">
                                <p className="text-sm font-medium text-corex-navy leading-relaxed">
                                    Hi there! 👋<br />
                                    How can we assist your capital management operations today?
                                </p>
                                <span className="text-[9px] font-bold text-gray-400 uppercase mt-2 block tracking-widest">
                                    {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                            </div>
                        </div>

                        {/* Footer / Input */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <form onSubmit={handleSend} className="relative">
                                <textarea
                                    value={userMessage}
                                    onChange={(e) => setUserMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full bg-corex-gray border-none rounded-2xl px-5 py-4 pr-14 focus:ring-2 focus:ring-[#25D366]/50 outline-none transition-all font-medium text-sm resize-none placeholder:text-gray-400"
                                    rows="1"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSend();
                                        }
                                    }}
                                />
                                <button
                                    type="submit"
                                    disabled={!userMessage.trim()}
                                    className={`absolute right-2 top-1/2 -translate-y-1/2 p-3 rounded-xl transition-all ${
                                        userMessage.trim() 
                                        ? 'bg-[#25D366] text-white shadow-lg hover:scale-105 active:scale-95' 
                                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    }`}
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </form>
                            <p className="text-center text-[9px] font-bold text-gray-400 uppercase tracking-[0.2em] mt-3">
                                Transmitted via Secure WhatsApp Tunnel
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`relative bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_-5px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group ${isOpen ? 'rotate-90' : 'hover:rotate-6'}`}
                aria-label={isOpen ? "Close Chat" : "Open WhatsApp Chat"}
            >
                {isOpen ? (
                    <X className="w-7 h-7" />
                ) : (
                    <svg 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="w-7 h-7"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                )}
                
                {/* Notification Badge */}
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-white border-2 border-[#25D366]"></span>
                    </span>
                )}
            </button>
        </div>
    );
};

export default WhatsAppButton;
