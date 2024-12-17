import React from 'react'

function SelectableButton({selected,tag,addTag,removeTag,selectedTags}) {
  return (
    <>
        <button className={` flex justify-center gap-2 items-center m-1 p-1 text-black bg-gray-400 rounded-md ${selected && 'bg-green-500'}`}
        onClick={() => {
                      if (selectedTags.includes(tag)) {
                        removeTag(tag)
                      } else {
                        addTag(tag)
                      }
                    }}>
                   {selected && <img src="/circle-cross.svg" alt="" className=' w-5'/>}
                    {tag}</button>
    </>
  )
}

export default SelectableButton