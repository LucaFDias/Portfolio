'use client'

import { experiencesData } from '@/app/data/data';

import 'react-vertical-timeline-component/style.min.css';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
}  from 'react-vertical-timeline-component';
import React from 'react';
import SectionHeading from './section-heading';

import { motion } from 'framer-motion'

const Experiences = () => {
  return (
    <motion.section 
      className='mb-10 text-center'
      initial={{ opacity: 0, y: 100}}
      animate={{ opacity: 1, y: 0}}
      transition={{ delay: 0.175}}
    >
      <SectionHeading>Experiences</SectionHeading>
      <VerticalTimeline
        lineColor='#e5e7eb'
        
      >
        {
          experiencesData.map((item, index) => (
            <React.Fragment
              key={index}
            >
              <VerticalTimelineElement 
                contentStyle={{
                  background: 'transparent',
                  boxShadow: 'none',
                  border: '1px solid rgba(255 255 255 / 0.2)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight: '0.6rem solid rgb(255 255 255 / 0.1)'
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: 'black',
                  fontSize: '1.5rem'
                }}
              >
                <h3 className='!font-semibold !capitalize'>{item.title}</h3>
                <p className='!font-normal !mt-0'>{item.localtion}</p>
                <p className='!mt-1 !font-normal'>{item.description}</p>
              </VerticalTimelineElement>

            </React.Fragment>
          ))
        }
      </VerticalTimeline>
    </motion.section>

  )
}

export default Experiences