import React from 'react';

import { LuGraduationCap} from 'react-icons/lu';
import {
  SlSocialTwitter,
  SlSocialGithub,
} from 'react-icons/sl';
import {
  LuLinkedin
} from 'react-icons/lu';
import {
  MdOutlineContactMail,
  MdOutlineEmail,
  MdOutlineWorkOutline
} from 'react-icons/md';
import {
  BiUserCircle
} from 'react-icons/bi'
import { GoProjectSymlink } from 'react-icons/go'


import SpotifyImg from'@/public/images/spotify.png';
import PortfolioImg from'@/public/images/portf.png';
import DashboardImg from'@/public/images/dashboard.png';
import { AiOutlineHome } from 'react-icons/ai';

export const projectsData = [
  {
    title: 'Dashboard-admin',
    description: 'Dashboard - Admin, allows creation, reading, updating and deleting (CRUD) of data in a MySQL database',
    tags: ['NextJS', 'TypeScript', 'Prisma', 'Api Rest', 'TailwindCSS', 'PlanetScale', 'Auth Clerk', 'MySQL'],
    hrefUrl: 'https://github.com/LucaFDias/dashboard-admin',
    imageUrl: DashboardImg
  },
  {
    title: 'Interface Spotify Clone',
    description: 'Creating the spotify interface responsive, project focused on my frontend study.',
    tags: ['NextJS', 'TypeScript', 'TailwindCSS' ],
    hrefUrl: 'https://github.com/LucaFDias/clone-spotify',
    imageUrl: SpotifyImg
  },
  {
    title: 'My portfolio',
    description: 'My portfolio',
    tags: ['NextJS', 'TypeScript', 'TailwindCSS', 'Resend Email'],
    hrefUrl: 'https://github.com/LucaFDias/portfolio',
    imageUrl: PortfolioImg
  }
]

export const experiencesData = [
  {
    title: "Computer Salesman and Technian, Store TáNaMão",
    localtion: 'Recife, PE',
    description: 'My responsabilities its program planning and management; User support; Configuration of printers, switches, computers, notebooks and servers; Analysis and installation of software and hardware; Logical network maintenance; Website, fanpage and marketplace management.',
    icon: React.createElement(MdOutlineWorkOutline),
    date: 'jun, 2021 - current'
  },
  {
    title: "Developer Web Fullstack, Store TáNaMão",
    localtion: 'Recife, PE',
    description: 'I developed a complete E-commerce as a personal project to sell computer products The site included shopping cart features, PayPal payments getaway, PagBank, user authentication and an admin interface to manage products (django).',
    icon: React.createElement(MdOutlineWorkOutline),
    date: 'jul, 2023 - current',
    tech: 'Tech: HTML5, Python3, Django, Bootstrap, JavaScript'
  },
  {
    title: "University Estácio de Sá",
    localtion: 'Recife, PE',
    description: "i'm course the second semester of analysis and systems",
    icon: React.createElement(LuGraduationCap),
    date: 'april, 2023 - current'
  },
  {
    title: "RocketSeat Discover Bootcamp, 2023",
    localtion: 'RocketSeat, EAD',
    description: 'Rocketseat Discover offers a series of free courses, making learning accessible to a broad audience. Its content covers topics such as HTML, CSS, JavaScript, and other fundamental aspects of web development. Furthermore, the platform is known for its practical approach, with projects and challenges that allow students to apply what they have learned in a hands-on manner.',
    icon: React.createElement(LuGraduationCap),
    date: 'jul, 2023 - current',
    tech: 'Tech: HTML5, CSS, JavaScript, Git and Github.'
  },
  {
    title: "Full Course Python, Bro Code",
    localtion: 'Bro Code, Youtube',
    description: 'I successfully completed a comprehensive 12-hours Python course. This course provided a solid understanding of the fundamentals of Python programming, including control structures, data manipulation, function creation, and problem solving.',
    icon: React.createElement(LuGraduationCap),
    date: 'Jul, 2023',
    tech: 'Tech: Python'
  },
  {
    title: "Full Course Python3 and Django, Traversy Media",
    localtion: 'Traversy Media, Youtube',
    description: 'I successfully completed a comprehensive 7-hours Python and Django course. I acquired skills in web development with the Django framework, which include creating robust and dynamic web applications. My knowledge covers building data models, developing views, authenticating users, implementing CRUD (Create, Read, Update, Delete), and using tools like the Django REST framework to create APIs..',
    icon: React.createElement(LuGraduationCap),
    date: 'Jul, 2023',
    tech: 'Tech: Python, Django'
  },
  {
    title: "RocketSeat Ignite Bootcamp, 2022",
    localtion: 'RocketSeat, EAD',
    description: 'RocketSeats Ignite Bootcamp is a learning path focused on software development, with updated and practical content, aimed at the needs of the technology area.',
    icon: React.createElement(LuGraduationCap),
    date: 'Nov, 2022 - mar, 2023',
    tech: 'Tech: ReactJS, React Native, NodeJS, TypeScript, Styled-components, TailwndCSS, Stripe.',
  },
  {
    title: "Cursos em vídeo",
    localtion: 'Cursos em vídeo, EAD',
    description: '"Curso em vídeo", by Professor Gustavo Guanabara is a very popular online educational platform in Brazil, known for offering a wide variety of technology and programming courses.',
    icon: React.createElement(LuGraduationCap),
    date: 'Nov, 2020',
    tech: 'Tech: HTML, CSS, JavaScript, Git and Github.'
  },
]

export const footerData = [
  {
    hrefUrl: 'https://www.linkedin.com/in/lucasferndias/',
    icon: React.createElement(LuLinkedin),
    label: 'LinkedIn',
  },
  {
    hrefUrl: 'https://github.com/LucaFDias/',
    icon: React.createElement(SlSocialGithub),
    label: 'GitHub'
  },
  {
    hrefUrl: '/',
    icon: React.createElement(SlSocialTwitter),
    label: 'Twitter'

  },
  {
    hrefUrl: '/contact',
    icon: React.createElement(MdOutlineEmail),
    label: 'email',
  }
]

export const modalformData = [
  {
    icon: React.createElement(AiOutlineHome),
    label: 'Home',
    hrefUrl: '/',
  },
  {
    icon: React.createElement(BiUserCircle),
    label: 'About',
    hrefUrl: '/about',
  },
  {
    icon: React.createElement(GoProjectSymlink),
    label: 'projects',
    hrefUrl: '/projects',
  },
  {
    icon: React.createElement(MdOutlineContactMail),
    label: 'email',
    hrefUrl: '/contact',
  },
]