import { Mail, Github, Linkedin } from 'lucide-react'

function Contact({ personalInfo, isVisible }) {
    return (
        <section id="contact" className={`py-20 px-4 bg-gray-800/50 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Let's Work Together
                </h2>
                
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you have a project in mind or just want to chat about technology, feel free to reach out!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <a 
                        href={`mailto:${personalInfo.email}`}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg transition-all duration-200 flex items-center space-x-3 text-lg"
                    >
                        <Mail size={24} />
                        <span>Send Email</span>
                    </a>
                    
                    <div className="flex space-x-4">
                        <a 
                            href={personalInfo.github}
                            className="text-gray-400 hover:text-white transition-colors p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
                        >
                            <Github size={24} />
                        </a>
                        <a 
                            href={personalInfo.linkedin}
                            className="text-gray-400 hover:text-white transition-colors p-4 bg-gray-800 rounded-lg hover:bg-gray-700"
                        >
                            <Linkedin size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
