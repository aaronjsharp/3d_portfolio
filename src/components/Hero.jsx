import { motion } from 'framer-motion';

import { styles } from '../styles';

const Hero = () => {
  return (
    <section className='w-full'>
      <div className={`${styles.paddingX} relative inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Aaron</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop full stack applications, sleek user <br className='sm:block hidden'/>interfaces, and dynamic web applications
          </p>
        </div>
        <img
        src='../../profile.png'
        className=''
      />
      </div>
    </section>
  )
}

export default Hero