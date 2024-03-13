import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)
import baseUrl from '../../utils/baseUrl'
const alertContent = () => {
  MySwal.fire({
    title: 'Congratulations!',
    text: 'Your message was successfully send and will back to you soon',
    icon: 'success',
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  })
}

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
  company_name: ""
};

const ContactForm = ({ data }) => {

  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = e => {
    const { name, value } = e.target;
    setContact(prevState => ({ ...prevState, [name]: value }));
  }


  async function handleSubmit(e) {
    e.preventDefault();


    const formData = new FormData();
    formData.append('name', contact.name);
    formData.append('email', contact.email);
    formData.append('phone_number', contact.number);
    formData.append('subject', contact.subject);
    formData.append('message', contact.text);
    formData.append('company_name', contact.company_name);

    const response = await axios.post(`https://assispanel.com/api/contact_us`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(() => {
      alertContent();
      setContact({
        name: "",
        email: "",
        number: "",
        subject: "",
        text: "",
        company_name: ""
      })
    }).catch((err) => console.log(err))


  };


  return (
    <section className="contact-area pb-100">
      <div className="container">
        <div className="section-title">
          <span className="sub-title">
            <img src="/img/star-icon.png" alt="image" />
            Get in Touch
          </span>
          <h2>Ready to Get Started?</h2>
          <p>Your email address will not be published. Required fields are marked *</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="contact-image">
              <img src="/img/contact.png" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="form-control"
                        value={contact.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="company_name"
                        placeholder="Company Name"
                        className="form-control"
                        value={contact.company_name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="form-control"
                        value={contact.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="number"
                        placeholder="Phone number"
                        className="form-control"
                        value={contact.number}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        className="form-control"
                        value={contact.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="text"
                        cols="30"
                        rows="6"
                        placeholder="Write your message..."
                        className="form-control"
                        value={contact.text}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-12">
                    <button type='submit' className='default-btn'>
                      <i className="flaticon-tick"></i>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm;