import './ui.css'
// eslint-disable-next-line react/prop-types
function ContactUsButton({children, icon}) {
  return (
    <button className="contact-us-button">
      <span>
        <img src={icon} />
      </span>
      <span className="text-white text-xl font-bold">{children}</span>
    </button>
  )
}

export default ContactUsButton
