import { LINKS } from '@/constants/links'
import React from 'react'
import { RainbowButton, Title } from '../ui'

function AboutCard() {
  return (
    <div className="col-span-3 row-span-4 bg-[#262626] flex flex-col p-4 gap-3 rounded-xl border border-darkslate-100 hover:border-[#4285F4] overflow-y-scroll [&::-webkit-scrollbar]:hidden">
      <div className="flex w-full h-full direction-normal justify-between gap-4">
        <div className='flex flex-1 w-full h-full flex-col justify-between p-6'>
          <div className="flex flex-col flex-wrap gap-2">
            <Title label='👨‍💼 About Me' />
            <p className="m-0 font-light text-lg text-white font-mono">
              Hi👋🏻, I'm <b className="font-bold">Nayan Wadekar</b>, an enthusiastic React Native app developer with over 3 years of hands-on experience in crafting mobile applications that seamlessly bridge the gap between iOS and Android platforms.
            </p>
          </div>
          <div className="flex gap-4 h-[100px] items-end">
            <a href={LINKS.github} aria-label="resume pdf file" target="_blank">
              <RainbowButton className='py-0 px-0 bg-white flex items-center justify-center h-[50px] w-[50px]'>
                <img src='./github-icon.svg' className='w-[28px] h-[28px]' />
              </RainbowButton>
            </a>
            <a href={LINKS.linkedin} aria-label="resume pdf file" target="_blank">
              <RainbowButton className='py-0 px-0 bg-white flex items-center justify-center h-[50px] w-[50px]'>
                <img src='./linkedin-icon.svg' className='w-[28px] h-[28px]' />
              </RainbowButton>
            </a>
            <a href={LINKS.email} aria-label="resume pdf file" target="_blank">
              <RainbowButton className='py-0 px-0 bg-white flex items-center justify-center h-[50px] w-[50px]'>
                <img src='./email-icon.svg' className='w-[28px] h-[28px]' />
              </RainbowButton>
            </a>
            <a href={LINKS.twitter} aria-label="resume pdf file" target="_blank">
              <RainbowButton className='py-0 px-0 bg-white flex items-center justify-center h-[50px] w-[50px]'>
                <img src='./twitter-icon.svg' className='w-[25px] h-[25px]' />
              </RainbowButton>
            </a>
          </div>
        </div>
        <div className='w-[300px] h-[100%] flex-col flex items-center justify-center p-4 gap-6'>
          <div className='w-[85%] h-full overflow-hidden rounded-md'>
            <img src='./assets/profile-pic.png' className='w-full h-full object-cover' />
          </div>

          <a href={LINKS.resume} aria-label="resume pdf file" target="_blank" className='w-[80%] h-[65px]'>
            <button className='w-full h-full bg-red-400 rounded-md border border-s-slate-300 flex items-center justify-center gap-2'>
              <img src='./resume.svg' className='h-6 w-6' alt='NayanWadekar' />
              <span className='font-mono font-semibold text-white'>Download Resume</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default AboutCard