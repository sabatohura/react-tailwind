import React from 'react'

const Button = ({ color,textColor , hoverColor, text, onClick })=> {
return (
    <button type="button" onClick={onClick} className={`${color} w-[200px] ${hoverColor} ${textColor} border-solid border-2 border-GreenColor transition-all rounded-md font-medium  py-3 hover:tracking-wider`} >
        {text}
    </button>
)
}

export default Button