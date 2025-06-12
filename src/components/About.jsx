import { FileText } from 'lucide-react'
import resume from '~/assets/documents/Resume - Mayank Lad.pdf'

function About({ skills, isVisible }) {
    const handleDownload = () => {
        const link = document.createElement('a')
        link.href = resume
        link.download = 'Resume - Mayank Lad.pdf'
        // document.body.appendChild(link);
        link.click()
        // document.body.removeChild(link);
        link.remove()
    }

    return (
        <section
            id="about"
            className={`py-20 px-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    About Me
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-gray-200">My Journey</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            I'm a dedicated full-stack engineer with a strong foundation in Java, Spring Boot, and cloud technologies. My journey started with a fascination for how intelligent systems work, leading me to pursue a post-graduate degree in Artificial Intelligence and Machine Learning.
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Over the years, I've built enterprise-grade applications, contributed to agile teams, and delivered performance-driven solutions at scale. During my time at Accenture, I honed my skills in backend systems, DevOps practices, and cloud platforms like Oracle Cloud.
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            I specialize in developing robust backend APIs, integrating frontend interfaces, and optimizing cloud-based deployments. Always curious and driven by problem-solving, I continuously explore new tools like Docker, Terraform, and modern Java frameworks to stay ahead in the evolving tech landscape.
                        </p>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Every line of code I write is aimed at creating software that's efficient, scalable, and user-focused. I'm excited about what's next—and always ready for the next big challenge.
                        </p>
                        <button 
                            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-200 flex items-center space-x-2"
                            onClick={handleDownload}
                        >
                            <FileText size={20} />
                            <span>Download Resume</span>
                        </button>
                    </div>
                
                    <div>
                        <h3 className="text-2xl font-semibold mb-6 text-gray-200">Skills</h3>
                        <div className="space-y-4">
                            {skills.map((skill, index) => (
                                <div key={skill.name} className="relative">
                                    <div className="flex justify-between mb-2">
                                        <span className="text-gray-300">{skill.name}</span>
                                        <span className="text-gray-400">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div 
                                            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                                            style={{ width: `${isVisible ? skill.level : 0}%` }}
                                        >
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
