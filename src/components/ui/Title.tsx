import React from 'react'

interface TitleProps {
  label : string;
}

const Title : React.FC<TitleProps> = ({label}) => {
  return <h1 className='font-mono text-xl antialiased font-semibold text-left text-white'>{label}</h1>
}

export default Title