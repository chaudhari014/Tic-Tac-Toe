import React from 'react'

function Tile({className,value,onClick}) {
  return (
    <div className={`${className} tile`} onClick={onClick}>{value}</div>
  )
}

export default Tile