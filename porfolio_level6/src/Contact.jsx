import React from "react";

export default function Contact(){
    return(
        <div className="contact--container">
            <h1>Contact</h1>
            <form>
                <div className="contact--inputs">
                    <input type="text" placeholder="Name"></input>
                    <input type="email" placeholder="Email" id="contact--email"></input>

                </div>
                <textarea  className="contact--message">  </textarea>
                <br/>
                <button className="contact--button">Send Message</button>
            </form>
        </div>
    )
}