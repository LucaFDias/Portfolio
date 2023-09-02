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
  MdOutlineEmail
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
    title: "Graduated bootcamp",
    localtion: 'Miami, FL',
    description: 'I graduated after 6 months of studying. I immediately foung a job as a front-end developer',
    icon: React.createElement(LuGraduationCap),
    date: 'July, 2019'
  },
  {
    title: "Graduated bootcamp",
    localtion: 'Miami, FL',
    description: 'I graduated after 6 months of studying. I immediately foung a job as a front-end developer',
    icon: React.createElement(LuGraduationCap),
    date: 'July, 2019'
  },
  {
    title: "Graduated bootcamp",
    localtion: 'Miami, FL',
    description: 'I graduated after 6 months of studying. I immediately foung a job as a front-end developer',
    icon: React.createElement(LuGraduationCap),
    date: 'July, 2019'
  },
  {
    title: "Graduated bootcamp",
    localtion: 'Miami, FL',
    description: 'I graduated after 6 months of studying. I immediately foung a job as a front-end developer',
    icon: React.createElement(LuGraduationCap),
    date: 'July, 2019'
  },
  {
    title: "Graduated bootcamp",
    localtion: 'Miami, FL',
    description: 'I graduated after 6 months of studying. I immediately foung a job as a front-end developer',
    icon: React.createElement(LuGraduationCap),
    date: 'July, 2019'
  },
  {
    title: "Graduated bootcamp",
    localtion: 'Miami, FL',
    description: 'I graduated after 6 months of studying. I immediately foung a job as a front-end developer',
    icon: React.createElement(LuGraduationCap),
    date: 'July, 2019'
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