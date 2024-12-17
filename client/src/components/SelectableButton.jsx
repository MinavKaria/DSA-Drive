import React from 'react'

function SelectableButton({selected,tag,addTag,removeTag,selectedTags}) {
  return (
    <>
        <button className={`m-1 p-1 bg-gray-400 rounded-md ${selected && 'bg-green-500'}`}
        onClick={() => {
                      if (selectedTags.includes(tag)) {
                        removeTag(tag)
                      } else {
                        addTag(tag)
                      }
                    }}>{tag}</button>
    </>
  )
}

export default SelectableButton