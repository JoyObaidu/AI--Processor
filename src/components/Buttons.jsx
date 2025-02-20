// eslint-disable-next-line no-unused-vars
import React from 'react'

// eslint-disable-next-line react/prop-types
const Buttons = ({ onSummarize, onTranslate }) => {
  return (
    <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={onSummarize}>
        Summarize
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={onTranslate}>
        Translate
      </button>
    </div>
  )
}

export default Buttons