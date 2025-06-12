import { User, Code, Briefcase, Mail } from 'lucide-react';
import googleCaseIcon from '~/assets/images/google-case-study.png';
import compareHouseIcon from '~/assets/images/compare-house-desc-charac.png';
import vehicleCounting from '~/assets/images/vehicle-counting.png';

export const personalInfo = {
    name: 'Mayank Lad',
    title: 'Software Developer',
    location: 'Toronto, Canada',
    email: 'mayanklad12@gmail.com',
    github: 'https://github.com/mayanklad',
    linkedin: 'https://linkedin.com/in/mayanklad',
    bio: 'Innovative full-stack engineer with hands-on experience in Java, Spring Boot, and cloud-native applications. I thrive on building reliable, scalable software that delivers real-world impact.'
};

export const skills = [
    { name: 'Java (Spring Boot)', level: 90 },
    { name: 'Python', level: 80 },
    { name: 'Oracle Cloud', level: 75 },
    { name: 'Docker', level: 75 },
    { name: 'Terraform', level: 60 },
    { name: 'MySQL & MongoDB', level: 80 },
    { name: 'React (Basics)', level: 65 },
    { name: 'Machine Learning', level: 70 },
    { name: 'Git & CI/CD', level: 80 }
];



export const projects = [
    {
        id: 1,
        title: 'Google Play Store Case Study',
        description: '',
        tech: ['Python'],
        image: googleCaseIcon,
        github: 'https://github.com/mayanklad/google-play-store-apps-case-study',
        live: '#',
        featured: true
    },
    {
        id: 2,
        title: 'Comparison: House Description vs Listed Characteristics',
        description: '',
        tech: ['Python'],
        image: compareHouseIcon,
        github: 'https://github.com/mayanklad/house-description-verification',
        live: '#',
        featured: true
    },
    {
        id: 3,
        title: 'Vehicle Counting',
        description: '',
        tech: ['Pytohn', 'OpenCV'],
        image: vehicleCounting,
        github: 'https://github.com/mayanklad/vehicle-counting',
        live: '#',
        featured: false
    }
];

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
];

export const navigation = [
    { name: 'Home', id: 'home', icon: User },
    { name: 'About', id: 'about', icon: User },
    { name: 'Projects', id: 'projects', icon: Code },
    { name: 'Experience', id: 'experience', icon: Briefcase },
    { name: 'Contact', id: 'contact', icon: Mail }
];
