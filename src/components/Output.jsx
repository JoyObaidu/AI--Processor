/* eslint-disable react/prop-types */
import 'react'

const Output = ({ messages = [] }) => {
  return (
    <div>
          {messages.length > 0 ? (
        messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))
      ) : (
        <p className='bg-black text-white'>Output</p>
      )}
        </div>
      );
    };



export default Output