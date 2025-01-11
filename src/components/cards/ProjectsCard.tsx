import React from 'react'
import { Title } from '../ui'
import Image from 'next/image'

function ProjectsCard() {
  return (
    <div className="col-span-1 row-span-1 bg-[#262626] rounded-xl border border-darkslate-100 hover:border-[#4285F4]">
      <a href={'/projects'} className={`h-full w-full flex items-center justify-center gap-4 hover:scale-110 transition ease-in-out duration-300`}>
        <Title label='🛠️  Projects' />
        <div className='float-right'>
          <Image src={'./arrow-up-right.svg'} width={25} height={25} alt='arrow icon' />
        </div>
      </a>
    </div>
  )
}

export default ProjectsCard