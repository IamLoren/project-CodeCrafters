import React from 'react'
import mainLogo from '../../img/Main-logo.webp'

const Logo = () => {
  return (
    <div>
      <img
        src={mainLogo}
        alt='Main-logo'
        width='115'
        height='48'
        loading='lazy' />
    </div>
  )
}

export default Logo

