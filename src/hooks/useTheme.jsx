import React from "react"
import { useState, useEffect } from "react"

const useTheme = () => {
    const [theme, setTheme] = useState(() => {
      return localStorage.getItem("theme") || "light"
    })
    
    useEffect(() => {
      localStorage.setItem("theme", theme)
    }, [theme])
  
    return [theme, setTheme]
  }

  export default useTheme;