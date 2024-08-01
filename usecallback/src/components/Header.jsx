import React from 'react'

export const Header = () => {
    console.log("header rendering...")
  return (
    <div>
        <h1>header</h1>
    </div>
  )
}

export default React.memo(Header)