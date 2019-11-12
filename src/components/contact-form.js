import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons"

class ContactForm extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: null,
    }
  }

  render() {
    const { status } = this.state

    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/myyyjndz"
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" className="form-control" id="name" placeholder="Jane Doe" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" className="form-control" id="email" placeholder="jane.doe@example.com" />
        </div>

        <div className="form-group">
          <label htmlFor="message">What can we help you with?</label>
          <textarea name="message" id="message" className="form-control" placeholder="Tell us what we can help you with" rows={8} />
        </div>

        {status === null && <button className="btn btn-success btn-lg btn-block">Send Message <FontAwesomeIcon icon={faPaperPlane}/></button>}
        {status === "SUCCESS" && <div className="alert alert-success">Thanks! We'll get back to you shortly</div>}
        {status === "ERROR" && <div className="alert alert-danger">Ooops! There was an error sending your message. Please try again.</div>}
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader("Accept", "application/json")
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: "SUCCESS" })
      } else {
        this.setState({ status: "ERROR" })
      }
    }
    xhr.send(data)
  }
}

export default ContactForm
