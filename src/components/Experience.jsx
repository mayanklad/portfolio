import { Calendar } from 'lucide-react';

function Experience({ experience, isVisible }) {
    return (
        <section
            id="experience"
            className={`py-20 px-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Experience
                </h2>
                
                <div className="space-y-8">
                    {experience.map((job, index) => (
                        <div key={index} className="relative pl-8 border-l-2 border-purple-500/50">
                            <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                            <div className="bg-gray-800/50 rounded-lg p-6 ml-4 hover:bg-gray-800/70 transition-colors duration-300">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                                    <h3 className="text-xl font-semibold text-gray-200">{job.position}</h3>
                                    <span className="text-purple-400 flex items-center space-x-1">
                                        <Calendar size={16} />
                                        <span>{job.period}</span>
                                    </span>
                                </div>
                                <h4 className="text-lg text-gray-300 mb-3">{job.company}</h4>
                                <p className="text-gray-400 leading-relaxed">{job.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
