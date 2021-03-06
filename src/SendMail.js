import React from 'react';
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";

function SendMail() {
    const { register, handleSubmit } = useForm();
    

    const onSubmit = (formData) => {
        console.log(formData);
    };
  
    return (
    <div className="sendMail">
       <div className="sendMail__header">
          <h3>New Message</h3>
          <CloseIcon className="sendMail__close" />
       </div>   

       <form onSubmit={handleSubmit(onSubmit)}>
           <input name="to" placeholder="To" type="text" ref={register('to', {required: true })}/>

           <input name='subject' placeholder="Subject" type="text" ref={register('subject', {required: true })}/>

           <input name='message' placeholder="Message..." type="text" className="sendMail__message" ref={register('message', {required: true })}/>

           <div className="sendMail__options">
               <Button className="sendMail__send">Send</Button>
           </div>
       </form>
    </div>
  );
}

export default SendMail;
