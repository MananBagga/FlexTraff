import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { team } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { linkedin_icon } from '../assets'

const TeamCard = ({ index, title, icon, linkedin_profile }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-tertiary rounded-[20px] h-[280px] relative overflow-hidden group flex justify-center items-center"
        >
          {/* Team Image */}
          <img
            src={icon}
            alt={title}
            className="object-cover w-full h-full rounded-[20px]"
          />

          {/* Hover Overlay */}
          <div className="absolute bottom-0 left-0 w-full h-full bg-primary bg-opacity-90 rounded-[20px] flex flex-col justify-end items-center text-white p-4 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            <h3 className="text-lg font-bold">{title}</h3>
            <a
              href={linkedin_profile}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-sm mt-1 hover:text-blue-300 transition"
            >
              <img src={linkedin_icon} alt="LinkedIn Profile" className='h-5 w-5 cursor-pointer' />
            </a>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};




const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Our Team</h2>
      </motion.div>

      {/* <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        At FlexTraff, we're building AI-powered Dynamic Traffic Light Systems that adapt in real time to traffic flow, reducing congestion, emissions, and delays. Using computer vision, IoT sensors, and machine learning, our system makes intersections more efficient and safer for vehicles and pedestrians alike.

        Designed for smart cities, our solution helps urban planners monitor patterns, respond faster, and improve overall mobility.

        The future of traffic management starts here.
      </motion.p> */}

      {/* <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 rounded-[20px] place-items-center'> */}

      <div className='mt-20 flex justify-center flex-wrap gap-10 rounded-[20px]'>

        {team.map((team, index) => (
          <TeamCard key={team.title} index={index} {...team} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")