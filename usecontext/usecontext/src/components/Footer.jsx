import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const Footer = () => {
    const {phone,name}=useContext(AppContext)
    console.log('Phone:', phone);
    console.log('Name:', name);

  return (
    <div>
        <h2>Footer</h2>
        <h3>Phone: {phone}</h3>
        <h4>Name: {name}</h4>
    </div>
  )
}
