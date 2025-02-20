/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'

const SelectLanguage = ({onChange}) => {
  return (
    <div>
        <select
      onChange={(e) => onChange(e.target.value)}
      className="border p-2 rounded-lg"
    >
      <option value="en">English</option>
      <option value="pt">Portuguese</option>
      <option value="es">Spanish</option>
      <option value="ru">Russian</option>
      <option value="tr">Turkish</option>
      <option value="fr">French</option>
    </select>
    </div>
  )
}

export default SelectLanguage