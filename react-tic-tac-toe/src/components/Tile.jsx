import React from 'react'

function Tile({className,value,onClick,classHover}) {
let addHover=null;
if(value==null && classHover!==null){
    addHover=`${classHover.toLowerCase()}-hover`
}
  return (
    <div className={`${className} tile ${addHover}`} onClick={onClick} >{value}</div>
  )
}

export default Tile