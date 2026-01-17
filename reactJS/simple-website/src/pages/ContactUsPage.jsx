import React from 'react'
import "./ContactUsPage.css"

const ContactUsPage = () => {
  return (
    <>
      <h1>Contact Page</h1>
<section className="contantMain" >
<form> 
    <div className="formBG">
    <label>Name</label><input type="text" /> <br />
    <label>Email</label><input type="email" /> <br />
    <label>Message</label><textarea></textarea> <br />
    <button >Submit</button>
</div>
</form>

    </section>
</>
  )
}

export default ContactUsPage
