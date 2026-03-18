import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';

const Contact = ({ contactData }) => {
    const defaultInfoCards = [
        { icon: "Mail", title: "Email Us", detail: "support@amigo.com", sub: "Response within 2 hours", link: "mailto:support@amigo.com" },
        { icon: "Phone", title: "Call Us", detail: "+1 (555) 000-0000", sub: "Mon-Fri, 9am - 6pm EST", link: "tel:+15550000000" },
        { icon: "MapPin", title: "Visit Us", detail: "Orbit Mall A.B. Road Vijay Nagar", sub: "Scheme 54 PU-4 3rd Floor, Office No.312 Indore Madhya Pradesh 452010", link: "#" }
    ];
    
    const defaultGlobalPresence = [
        { icon: "Globe", label: "Global Coverage", value: "24/7 Monitoring" },
        { icon: "Clock", label: "Response SLA", value: "120 Minutes" },
        { icon: "Send", label: "Data Integrity", value: "Node-to-Node" }
    ];

    const iconsMap = { Mail, Phone, MapPin, Globe, Clock, Send };
    const getIcon = (iconStr, fallback) => iconsMap[iconStr] || fallback;

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="relative py-24 bg-corex-navy overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#38BDF8_1px,transparent_1px)] [background-size:40px_40px]"></div>
                </div>

                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex justify-center items-center gap-3 mb-6">
                            <div className="h-1 w-12 bg-corex-accent rounded-full"></div>
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-corex-accent">Connect With Us</span>
                            <div className="h-1 w-12 bg-corex-accent rounded-full"></div>
                        </div>
                        <h1 
                            className="text-5xl lg:text-7xl font-black text-white leading-tight mb-8 tracking-tighter"
                            dangerouslySetInnerHTML={{ __html: contactData?.hero?.title || "Get in <span class='text-corex-accent italic'>Touch</span>" }}
                        />
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
                            {contactData?.hero?.subtitle || "Have questions about our institutional tools or need expert guidance? Our team of financial specialists is here to assist you."}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24 -mt-16 relative z-20">
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Contact Info Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            {(contactData?.infoCards || defaultInfoCards).map((info, i) => {
                                const IconCmp = getIcon(info.icon, Mail);
                                return (
                                <motion.a
                                    key={i}
                                    href={info.link}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="block p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-corex-gray flex items-center justify-center mb-6 group-hover:bg-corex-accent transition-colors">
                                        <IconCmp className="text-corex-navy h-6 w-6 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-black text-corex-navy mb-1 uppercase tracking-wider">{info.title}</h3>
                                    <p className="text-corex-accent font-bold mb-1">{info.detail}</p>
                                    <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">{info.sub}</p>
                                </motion.a>
                                );
                            })}
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-white p-8 lg:p-12 rounded-[40px] border border-gray-100 shadow-2xl h-full"
                            >
                                <div className="flex items-center gap-4 mb-10">
                                    <div className="w-12 h-12 rounded-2xl bg-corex-accent/10 flex items-center justify-center">
                                        <MessageSquare className="text-corex-accent h-6 w-6" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black text-corex-navy uppercase tracking-tight">Direct Message</h2>
                                        <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Inquiry Pipeline</p>
                                    </div>
                                </div>

                                <form className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-corex-gray border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-corex-accent/50 outline-none transition-all font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Email Redirection</label>
                                        <input
                                            type="email"
                                            placeholder="john@firm.com"
                                            className="w-full bg-corex-gray border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-corex-accent/50 outline-none transition-all font-medium"
                                        />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Assistance Vector (Subject)</label>
                                        <select className="w-full bg-corex-gray border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-corex-accent/50 outline-none transition-all font-medium appearance-none">
                                            <option>Institutional Access</option>
                                            <option>API & Integration</option>
                                            <option>Career Opportunities</option>
                                            <option>Security Inquiry</option>
                                            <option>Other Intelligence</option>
                                        </select>
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 ml-1">Message Content</label>
                                        <textarea
                                            rows="5"
                                            placeholder="How can we assist your capital management operations?"
                                            className="w-full bg-corex-gray border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-corex-accent/50 outline-none transition-all font-medium resize-none"
                                        ></textarea>
                                    </div>
                                    <div className="md:col-span-2">
                                        <button className="btn-accent w-full py-5 text-base font-black uppercase tracking-widest flex items-center justify-center gap-3">
                                            Transmit Message <Send className="h-5 w-5" />
                                        </button>
                                    </div>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Presence */}
            <section className="py-24 bg-corex-gray">
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-12">
                        {(contactData?.globalPresence || defaultGlobalPresence).map((stat, i) => {
                            const IconCmp = getIcon(stat.icon, Globe);
                            return (
                            <div key={i} className="flex items-center gap-6">
                                <div className="p-4 bg-white rounded-2xl shadow-sm">
                                    <IconCmp className="h-6 w-6 text-corex-accent" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
                                    <p className="text-xl font-black text-corex-navy tracking-tight">{stat.value}</p>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
