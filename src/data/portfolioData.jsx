import { User, Code, Briefcase, Mail } from 'lucide-react'
import googleCase from '~/assets/images/google-case-study.png'
import compareHouse from '~/assets/images/compare-house-desc-charac.png'
import vehicleCounting from '~/assets/images/vehicle-counting.png'
import rentalManager from '~/assets/gifs/rental-property-manager.gif'
import rentalManagerApi from '~/assets/images/rental-manager-api.png'
import chatBot from '~/assets/images/chatbot.png'
import portfolio from '~/assets/images/portfolio-website.png'
import orbits from '~/assets/gifs/orbits.gif'

export const personalInfo = {
    name: 'Mayank Lad',
    title: 'Software Developer',
    location: 'Toronto, Canada',
    email: 'mayanklad12@gmail.com',
    github: 'https://github.com/mayanklad',
    linkedin: 'https://linkedin.com/in/mayanklad',
    bio: 'Innovative full-stack engineer with hands-on experience in Java, Spring Boot, and cloud-native applications. I thrive on building reliable, scalable software that delivers real-world impact.'
}

export const skills = [
    { name: 'Java (Spring Boot)', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'Oracle Cloud', level: 65 },
    { name: 'Docker', level: 75 },
    { name: 'Terraform', level: 60 },
    { name: 'SQL & MongoDB', level: 80 },
    { name: 'React (Basics)', level: 65 },
    { name: 'Machine Learning', level: 70 },
    { name: 'Git & CI/CD', level: 80 }
]



export const projects = [
    {
        title: 'Rental Property Manager',
        description: 'A full-stack web application for managing rental properties, built with Java Spring Boot, React and PostgreSQL. It allows users to add, edit, and delete properties, view property details, and manage tenant information.',
        tech: ['Spring Boot', 'Spring Data JPA', 'React', 'Tailwind CSS', 'Docker', 'Netlify', 'Render', 'Neon Postgres'],
        image: rentalManager,
        github: 'https://github.com/mayanklad/rental-manager',
        live: 'https://rental-manager-ui.netlify.app/',
        featured: false
    },
    {
        title: 'Rental Manager API',
        description: 'The backend API for the Rental Property Manager application, built with Java Spring Boot and PostgreSQL. It provides endpoints for managing properties, tenants, and rental transactions.',
        tech: ['Spring Boot', 'Spring Data JPA','Docker', 'Neon Postgres', 'Render'],
        image: rentalManagerApi,
        github: 'https://github.com/mayanklad/rental-manager-api',
        live: 'https://rental-manager-api-r6jt.onrender.com/swagger-ui/index.html',
        featured: false
    },
    {
        title: 'Rental Manager UI',
        description: 'The frontend UI for the Rental Property Manager application, built with React and Tailwind CSS. It provides a user-friendly interface for managing rental properties and tenants.',
        tech: ['React', 'Tailwind CSS', 'Vite','Docker', 'Netlify'],
        image: rentalManager,
        github: 'https://github.com/mayanklad/rental-manager-ui',
        live: 'https://rental-manager-ui.netlify.app/',
        featured: false
    },
    {
        title: 'Chatbot Canada Immigration',
        description: 'A chatbot application designed to assist users in obtaining information and guidance regarding the Canadian immigration process built with Rasa Framework and Python.',
        tech: ['React', 'Tailwind CSS', 'Python', 'Rasa Framework', 'PyTorch', 'Hugging Face', 'LLM', 'Chatbot', 'Docker'],
        image: chatBot,
        github: 'https://github.com/mayanklad/chatbot-canada-immigration',
        huggingFace: 'https://huggingface.co/mayanklad/faq-canada-immigration',
        featured: false,
    },
    {
        title: 'Personal Portfolio',
        description: 'A personal portfolio website showcasing my projects, skills, and experience. Built with React and Tailwind CSS, it serves as a platform to highlight my work and connect with potential employers and collaborators.',
        tech: ['React', 'Tailwind CSS', 'Vite' , 'Netlify'],
        image: portfolio,
        github: 'https://github.com/mayanklad/portfolio',
        live: 'https://mayanklad.netlify.app/',
        featured: false,
    },
    {
        title: 'Google Play Store Case Study',
        description: 'A comprehensive analysis of Google Play Store apps, focusing on app performance, user reviews, and market trends. This project includes data cleaning, visualization, and predictive modeling to understand app success factors.',
        tech: ['Python' , 'Pandas', 'Matplotlib', 'Seaborn', 'Plotly', 'Scikit-learn'],
        image: googleCase,
        github: 'https://github.com/mayanklad/google-play-store-apps-case-study',
        kaggle: 'https://www.kaggle.com/code/mayanklad/google-play-store-apps-case-study-and-prediction',
        featured: false
    },
    {
        title: 'Comparison: House Description vs Listed Characteristics',
        description: 'A Kaggle project that compares house descriptions with their listed characteristics to identify discrepancies and improve data quality. It involves natural language processing and data analysis techniques to validate property listings.',
        tech: ['Python' , 'Pandas', 'NLP'],
        image: compareHouse,
        github: 'https://github.com/mayanklad/house-description-verification',
        kaggle: 'https://www.kaggle.com/code/mayanklad/comparison-house-description-vs-characteristics',
        featured: false
    },
    {
        title: 'Vehicle Counting',
        description: 'A computer vision project that counts vehicles in real-time using OpenCV and deep learning techniques. It processes video streams to detect and count vehicles, and record them.',
        tech: ['Python', 'OpenCV', 'Keras', 'TensorFlow'],
        image: vehicleCounting,
        github: 'https://github.com/mayanklad/vehicle-counting',
        featured: false
    },
    {
        title: 'Orbits',
        description: 'A simple application that visualizes celestial bodies orbital motion around a Black Hole in 2D. It uses basic physics principles to simulate the gravitational effects and move celestial objects accordingly.',
        tech: ['Python', 'Pygame', 'PyQt5'],
        image: orbits,
        github: 'https://github.com/mayanklad/Orbits',
        featured: false
    }
]

export const experience = [
    {
        company: 'Lambton College',
        position: 'Artificial Intelligence & Machine Learning',
        period: '2022 - 2024',
        description: 'Applied theory through projects like Image Captioning, Airbnb Sentiment Analysis, and Google Play Store Case Study, building real-world AI/ML solutions.'
    },
    {
        company: 'Accenture Solutions Private Limited',
        position: 'Full Stack Engineering Senior Analyst',
        period: 'December 2021 - July 2022',
        description: 'Led ML pipeline development and Spring-based microservices, boosting chatbot performance and database efficiency with Python, Java, and Oracle tools.'
    },
    {
        company: 'Accenture Solutions Private Limited',
        position: 'Application Development Analyst',
        period: 'Jan 2021 - November 2021',
        description: 'Designed Terraform automation scripts on Oracle Cloud, while building microservices and VueJS components to improve infrastructure and UI workflows.'
    },
    {
        company: 'Nuclear Power Corporation of India Limited',
        position: 'Internship Trainee',
        period: 'June 2019',
        description: 'Trained in full-stack web development using .NET, C#, and MySQL—setting a strong foundation for backend engineering.'
    },
    {
        company: 'Savitribai Phule Pune University',
        position: 'Bachelor of Engineering - Computer Engineering',
        period: '2016 - 2020',
        description: 'Built a solid foundation in computer engineering principles, with hands-on projects.'
    }
]

export const navigation = [
    { name: 'Home', id: 'home', icon: User },
    { name: 'About', id: 'about', icon: User },
    { name: 'Projects', id: 'projects', icon: Code },
    { name: 'Experience', id: 'experience', icon: Briefcase },
    { name: 'Contact', id: 'contact', icon: Mail }
]
