import "./Contact.scss";

import React from 'react'

const Contact = () => {
  return (
	<div className="containers">
		  <div className="contact__block">
			  <h2>.contact</h2>
			  <p>Drop us a line</p>
			  <form>
				  <input type="name" placeholder="Name:" />
				  <input type="text" placeholder="Your company::" />
				  <input type="email" placeholder="Email:" />
				  <input type="tel" placeholder="Phone:" />
			  </form>
			  <button type="submit">Send</button>
	  </div>
	</div>
  )
}

export default Contact
