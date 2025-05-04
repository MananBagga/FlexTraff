import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { team } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { linkedin_icon } from '../assets'

const TeamCard = ({ index, title, designation, icon, linkedin_profile }) => {
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
          className="bg-tertiary rounded-[20px] h-[300px] relative overflow-hidden group flex justify-center items-center"
        >
          <img
            src={icon}
            alt={title}
            className="object-cover w-full h-full rounded-[20px]"
          />

          <div className="absolute bottom-0 left-0 w-full h-full bg-primary bg-opacity-90 rounded-[20px] flex flex-col justify-center items-center text-white p-4 translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-sm mt-1 text-center">{designation}</p>
            <a
              href={linkedin_profile}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 hover:text-blue-300 transition"
            >
              <img src={linkedin_icon} alt="LinkedIn Profile" className="h-6 w-6 cursor-pointer" />
            </a>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};


const Team = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Our Team</h2>
      </motion.div>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 rounded-[20px] place-items-center'>
        {team.map((team, index) => (
          <TeamCard key={team.title} index={index} {...team} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Team, "team")