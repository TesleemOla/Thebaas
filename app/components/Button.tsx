import React from 'react'

const Button = ({moreStyles, details, click}:{moreStyles: string, details: string, click: ()=> void }) => {
  return <button onClick={click} className={`${moreStyles} bg-[#0166FF] text-white font-semibold text-sm rounded-2xl`}>{details}</button>;
}

export default Button