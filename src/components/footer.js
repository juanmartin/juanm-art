import React from "react"
import { FaHeart, FaCode } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="my-12 text-center">
      © {new Date().getFullYear()}. Desde Buenos Aires al world con <FaHeart className="text-red-600" /> y <FaCode className="text-blue-800" />
    </footer>
  )
}

export default Footer
