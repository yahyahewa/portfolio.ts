import { Parallax } from "react-parallax"
import { useState } from 'react';
import { ChangeEvent, FormEvent } from 'react';

interface UserState {
  name: string;
  email: string;
  message: string;
}

const initialFormData: UserState = {
  name: "",
  email: "",
  message: "",
};

function Projects() {
  const [characterCount, setCharacterCount] = useState<number>(0);
  const [formData, setFormData] = useState<UserState>(initialFormData);
  
  const handleData = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const inputText = e.target.value;
    const inputLength = inputText.length;
    
    // Limit the character count to 300
    if (inputLength <= 300 && e.target.name.toString() == "message") {
      setFormData({ ...formData, [e.target.name]: inputText });
      setCharacterCount(inputLength);
    }
    else{
      setFormData({ ...formData, [e.target.name]: inputText });
    }
  };
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
    setCharacterCount(0)
  };
  return (
    <section id="contact" className="pt-40 font-sans min-h-screen">
    <Parallax strength={500} >
        <section className="flex flex-col items-center justify-center">
    <div className="flex flex-col justify-center items-center gap-10 my-10">
      <h1 className="uppercase text-neutral-500 font-bold
        text-4xl">
        Contact
        </h1>
         <div className="w-14 h-4 rounded-full bg-jaguar-400
          shadow-md"></div>
          </div>
          <form onSubmit={handleSubmit} className="w-full md:w-3/4 lg:h-2/3 xl:w-1/2 p-10 
          flex flex-col items-center justify-center gap-y-10 shadow-xl bg-neutral-50 rounded-lg">
            <div className="grid gap-y-5 w-full">
              <label className="text-neutral-500 text-xl font-bold ml-2">Name</label>
              <input 
              type="text"
              name="name"
              required={true}
              onChange={handleData}
              value={formData.name}
              className="w-full bg-neutral-200 p-5 text-xl outline-none rounded-md font-bold text-neutral-500" placeholder="Enter Your Name" />
            </div>
            <div className="grid gap-y-5 w-full">
              <label className="text-neutral-500 text-xl font-bold ml-2">Email</label>
              <input 
              type="email"
              name="email"
              value={formData.email}
              required={true}
              onChange={handleData}
              className="w-full bg-neutral-200 p-5 text-xl outline-none rounded-md font-bold text-neutral-500" placeholder="Enter Your Email" />
            </div>
            <div className="grid gap-y-5 w-full">
              <label className="text-neutral-500 text-xl font-bold ml-2">Message</label>
              <textarea 
              name="message"
              required={true}
              onChange={handleData}
              value={formData.message}
              className="w-full bg-neutral-200 p-5 text-xl outline-none rounded-md font-bold text-neutral-500 h-48" placeholder="Enter Your Message" ></textarea>
              <p className={characterCount > 300 ? 'text-red-500' : 'text-neutral-500'}>
        Character: {characterCount}/300
        {characterCount > 300 && <span> - Exceeded character limit!</span>}
      </p>
            </div>
            <div className="grid gap-y-5 w-full"> 
              <button
              className="w-full text-neutral-100 p-5 text-xl outline-none rounded-md font-bold bg-jaguar-400 shadow-md focus:scale-95 ease-in-out duration-300" placeholder="Enter Your Email" >
                submit
              </button>
            </div>
          </form>
  </section>
  </Parallax>
  </section>
  )
}

export default Projects
