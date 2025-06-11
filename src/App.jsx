import React, { useState, useEffect } from 'react';
import Navigation from '~components/Navigation';
import Hero from '~components/Hero';
import About from '~components/About';
import Projects from '~components/Projects';
import Experience from '~components/Experience';
import Contact from '~components/Contact';
import {
    personalInfo,
    skills,
    projects,
    experience,
    navigation
} from '~data/portfolioData';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const [activeSection, setActiveSection] = useState('home');
    const [isVisible, setIsVisible] = useState({});

    const currentYear = new Date().getFullYear();

    // Intersection Observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const sections = document.querySelectorAll('section[id]');
        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    // Scroll to section
    function scrollToSection(id) {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Navigation
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
                scrollToSection={scrollToSection}
                navigation={navigation}
            />
            <Hero personalInfo={personalInfo} scrollToSection={scrollToSection} />
            <About skills={skills} isVisible={isVisible.about} />
            <Projects projects={projects} isVisible={isVisible.projects} />
            <Experience experience={experience} isVisible={isVisible.experience} />
            <Contact personalInfo={personalInfo} isVisible={isVisible.contact} />

            {/* Footer */}
            <footer className="py-8 text-center border-t border-gray-800">
                <p className="text-gray-400">
                    Made with ❤️ by {personalInfo.name} | © {currentYear}. All Rights Reserved.
                </p>
            </footer>
        </div>
    );
}

export default App;
