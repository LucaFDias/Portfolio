import React from 'react';

import { LuGraduationCap} from 'react-icons/lu';
import {
  SlSocialTwitter,
  SlSocialGithub,
  SlSocialSkype
} from 'react-icons/sl'
import {
  LuLinkedin
} from 'react-icons/lu'

import {
  FaWhatsapp
} from 'react-icons/fa'
import {
  MdOutlineEmail,
  MdOutlineWorkOutline
} from 'react-icons/md'

import RmtDev from'@/public/images/rmtdev.png';
import CorpComment from'@/public/images/corpcomment.png';
import WordanAnalytics from'@/public/images/wordanalytics.png';

export const projectsData = [
  {
    title: 'CorpComment',
    description: 'I wored as a full-stack developer on this startup project for years. Users can give public feedback to companies.',
    tags: ['React', 'NextJs', 'MongoDB', 'Tailwind', 'Prisma'],
    hrefUrl: '/',
    imageUrl: CorpComment
  },
  {
    title: 'RmtDev',
    description: 'I wored as a full-stack developer on this startup project for years. Users can give public feedback to companies.',
    tags: ['React', 'NextJs', 'MongoDB', 'Tailwind', 'Prisma'],
    hrefUrl: '/',
    imageUrl: RmtDev
  },
  {
    title: 'WordanAnalytcs',
    description: 'I wored as a full-stack developer on this startup project for years. Users can give public feedback to companies.',
    tags: ['React', 'NextJs', 'MongoDB', 'Tailwind', 'Prisma'],
    hrefUrl: '/',
    imageUrl: WordanAnalytics
  }
]

export const experiencesData = [
  {
    title: "Computer Salesman and Technian, Store TáNaMão",
    localtion: 'Recife, PE',
    description: 'I graduated after 6 months of studying. I immediately foung a job as a front-end developer',
    icon: React.createElement(MdOutlineWorkOutline),
    date: 'jun, 2021 - current'
  },
  {
    title: "Developer Web Fullstack, Store TáNaMão",
    localtion: 'Recife, PE',
    description: 'I graduated after 6 months of studying. I immediately foung a job as a front-end developer',
    icon: React.createElement(MdOutlineWorkOutline),
    date: 'jul, 2023 - current',
    tech: 'HTML5, Python3, Django, Bootstrap, JavaScript'
  },
  {
    title: "University Estácio de Sá",
    localtion: 'Recife, PE',
    description: "i'm course the second semester of analysis and systems",
    icon: React.createElement(LuGraduationCap),
    date: 'april, 2023 - current'
  },
  {
    title: "RocketSeat Ignite Bootcamp, 2022",
    localtion: 'RocketSeat, EAD',
    description: 'I graduated after 6 months of studying. I immediately foung a job as a front-end developer',
    icon: React.createElement(LuGraduationCap),
    date: 'Nov, 2022 - mar, 2023',
    tech: 'ReactJS, React Native, NodeJS, TypeScript, Styled-components, TailwndCSS, Stripe.',
  },
  {
    title: "RocketSeat Discover Bootcamp, 2023",
    localtion: 'RocketSeat, EAD',
    description: 'I graduated after 6 months of studying. I immediately foung a job as a front-end developer',
    icon: React.createElement(LuGraduationCap),
    date: 'jul, 2023 - current',
    tech: 'HTML5, CSS, JavaScript, Git and Github.'
  },
  {
    title: "Bootcamp RocketSeat Discover, 2022",
    localtion: 'Rocketseat, EAD',
    description: 'I graduated after 6 months of studying. I immediately foung a job as a front-end developer',
    icon: React.createElement(LuGraduationCap),
    date: 'Sep, 2022 - Dec, 2023',
    tech: 'HTML5, CSS, API,  JavaScript, Git and Github.'
  },
  {
    title: "Cursos em vídeo",
    localtion: 'Cursos em vídeo, EAD',
    description: 'I graduated after 6 months of studying. I immediately foung a job as a front-end developer',
    icon: React.createElement(LuGraduationCap),
    date: 'Jul, 2020',
    tech: 'HTML, CSS, JavaScript, Git and Github.'
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
    hrefUrl: '/',
    icon: React.createElement(FaWhatsapp),
    label: 'Whatsapp',
  },
  {
    hrefUrl: '/',
    icon: React.createElement(MdOutlineEmail),
    label: 'email',
  }
]