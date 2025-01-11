import React from 'react'
import { Title } from '../ui'

function TechStackCard() {
  return (
    <div className="col-span-1 row-span-6 bg-[#262626] flex flex-col p-4 gap-3 rounded-xl border border-darkslate-100 hover:border-[#4285F4] overflow-y-scroll [&::-webkit-scrollbar]:hidden">
      <Title label='👨‍💻 Skills' />
      <div className='flex flex-col gap-2'>
        <h3 className="font-mono text-base antialiased font-semibold text-left text-white ">Techstack :</h3>
        <div className="flex flex-col">
          <div className="text-sm font-light">
            <p>
              <a href="https://github.com/wadekar9">
                <img
                  src="https://skills-icons.vercel.app/api/icons?i=css,html,javascript,typescript,expo,reactnative,flutter,reactjs,redux,firebase,appwrite,zustand,jest,dart,json,tailwind,sqlite,zod,c,cpp,kotlin&perline=5"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        <h3 className="font-mono text-base antialiased font-semibold text-left text-white">Dev Tools :</h3>
        <div className="flex flex-col">
          <div className="text-sm font-light">
            <p>
              <a href="https://github.com/wadekar9">
                <img
                  src="https://skills-icons.vercel.app/api/icons?i=vscode,androidstudio,xcode,postman,git,github,gitlab,eslint,figma,chatgpt,claudeai,macos,windows,npm,yarn&perline=5"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStackCard