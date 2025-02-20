import {useState} from 'react';

// eslint-disable-next-line react/prop-types
const Input = ({ onSubmit }) => {
   const [text, setText] = useState(""); 

   const handleSubmit = () => {
        if (text.trim()) {
            onSubmit(text);
            setText("");    //Input Field should be cleared
        }
    };

  return (
    <div className='p-4 flex'>
        <textarea className="w-full p-2 border rounded" placeholder='Enter your text ...' value={text} onChange={(e) => setText(e.target.value)}/>
        <button type="submit" className='ml-2 p-2 bg-blue-500 text-white rounded' onSubmit={handleSubmit}>
            Submit
        </button>
    </div>
  )
}

export default Input;