import React from 'react'

const Button = ({moreStyles, details}:{moreStyles: string, details: string }) => {
  return <button className={`${moreStyles} bg-[#0166FF] text-white font-semibold text-sm rounded-2xl`}>{details}</button>;
}

export default Button