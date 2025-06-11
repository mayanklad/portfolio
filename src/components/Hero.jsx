import { Github, Linkedin, Mail, ChevronDown, User, MapPin } from 'lucide-react';

function Hero({ personalInfo, scrollToSection }) {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <div className="mb-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
                        <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                            <User size={48} className="text-gray-300" />
                        </div>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                        {personalInfo.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-2">{personalInfo.title}</p>
                    <p className="text-gray-400 flex items-center justify-center space-x-1">
                        <MapPin size={16} />
                        <span>{personalInfo.location}</span>
                    </p>
                </div>
                <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    {personalInfo.bio}
                </p>
                <div className="flex justify-center space-x-6 mb-12">
                    <a href={personalInfo.github} className="text-gray-400 hover:text-white transition-colors p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                        <Github size={24} />
                    </a>
                    <a href={personalInfo.linkedin} className="text-gray-400 hover:text-white transition-colors p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                        <Linkedin size={24} />
                    </a>
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-400 hover:text-white transition-colors p-3 bg-gray-800 rounded-full hover:bg-gray-700">
                        <Mail size={24} />
                    </a>
                </div>
                <button
                    onClick={() => scrollToSection('about')}
                    className="animate-bounce text-gray-400 hover:text-white transition-colors"
                >
                    <ChevronDown size={32} />
                </button>
            </div>
        </section>
    );
}

export default Hero;
