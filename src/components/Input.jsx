import {useState} from 'react';

const Input = () => {
   const [text, setText] = useState(""); 

  return (
    <div className='py-6'>
        <input type='text' className="flex-1 bg-green-400 text-black rounded-lg outline-none py-5" placeholder='Enter your text ...' value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  )
}

export default Input;