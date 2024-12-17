import React, { useEffect } from 'react'
import { useState, createContext, useContext } from 'react'

const Context = createContext()

function ContextProvider({ children }) 
{ 
  const [selectedTags, setSelectedTags] = useState([])
  useEffect(() => {
    console.log(selectedTags)
  }, [selectedTags])
 

  const addTag = (tag) => {
    setSelectedTags([...selectedTags, tag])
  }

  const removeTag = (tag) => {
    setSelectedTags(selectedTags.filter((selectedTag) => selectedTag !== tag))
  }
  
  return (
    <Context.Provider value={{
      selectedTags,
      addTag,
      removeTag
    }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider

export const useGlobalContext = () => {
    const context = useContext(Context)
    if (!context) {
        throw new Error('useGlobalContext must be used within a Context.Provider')
    }
    return context

}