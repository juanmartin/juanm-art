import React from "react"
import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="my-12 text-center">
      © {new Date().getFullYear()}. Desde Buenos Aires al world con <FaHeart className="text-red-600" />
    </footer>
  )
}

export default Footer
