import { Github, ExternalLink } from 'lucide-react'

function Projects({ projects, isVisible }) {
    return (
        <section
            id="projects"
            className={`py-20 px-4 bg-gray-800/50 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
        >
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Featured Projects
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={project.id}
                            className={`bg-gray-900 rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 ${project.featured ? 'ring-2 ring-purple-500/50' : ''}`}
                        >
                            <div className="relative group">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-semibold text-gray-200">{project.title}</h3>
                                    {project.featured && (
                                        <span className="bg-purple-600 text-xs px-2 py-1 rounded-full">Featured</span>
                                    )}
                                </div>
                                
                                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="flex space-x-4">
                                    <a 
                                        href={project.github}
                                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Github size={16} />
                                        <span>Code</span>
                                    </a>
                                    <a 
                                        href={project.live}
                                        className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                                    >
                                        <ExternalLink size={16} />
                                        <span>Live Demo</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
