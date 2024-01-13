import React from 'react'
import mainLogo from '../../img/Main-logo.webp'

const Logo = () => {
  return (
    <div><a href="/project-CodeCrafters" >
      <img
        src={mainLogo}
        alt='Main-logo'
        width='115'
        height='48'
        loading='lazy' />
    </a></div>
  )
}

export default Logo