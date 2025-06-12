import { Menu, X } from 'lucide-react'
import { personalInfo } from '~/data/portfolioData'

function Navigation({ isMenuOpen, setIsMenuOpen, scrollToSection, navigation }) {
    return (
        <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        {personalInfo.name}
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navigation.map(({ id, name, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center space-x-1"
                            >
                                <Icon size={16} />
                                <span>{name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 border-t border-gray-700">
                    <div className="px-4 py-2 space-y-2">
                        {navigation.map(({ id, name, icon: Icon }) => (
                            <button
                                key={id}
                                onClick={() => scrollToSection(id)}
                                className="flex items-center w-full text-gray-300 hover:text-white space-x-2"
                            >
                                <Icon size={16} />
                                <span>{name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navigation
