import React from 'react'
import { Title } from '../ui'
import Image from 'next/image'
import { EDUCATION } from '@/constants/education'

function EducationCard() {
  return (
    <div className="col-span-1 row-span-2 bg-[#262626] rounded-xl border border-darkslate-100 hover:border-[#4285F4]">
      <a href='/education' className='w-full h-full flex flex-col p-4 gap-3'>
        <div className='w-full flex items-center justify-between'>
          <Title label='🎓  Education' />
          <div className='float-right'>
            <Image src={'./arrow-up-right.svg'} width={25} height={25} alt='arrow icon' />
          </div>
        </div>

        <div className='flex flex-col gap-3 flex-1 overflow-y-scroll [&::-webkit-scrollbar]:hidden'>
          {
            EDUCATION.slice(0, 1).map((exp, idx) => (
              <div key={`${idx}`}>
                <p className="font-mono font-semibold text-base text-[#4285F4]">{exp.position}</p>
                <p className="font-mono font-medium text-sm text-white">{exp.name}</p>
                <p className="font-mono font-medium text-sm text-white">{exp.start} - {exp.end}</p>
              </div>
            ))
          }
        </div>
      </a>
    </div>
  )
}
{/* <div className='w-full h-28 bg-slate-200'></div> */ }

export default EducationCard