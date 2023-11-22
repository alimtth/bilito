import Image from 'next/image'
import styles from './ui.module.css'
// eslint-disable-next-line react/prop-types
function ContactUsButton({children, icon}) {
  return (
    <button className={styles.contact_us_button}>
      <span>
        <Image src={icon} />
      </span>
      <span className="text-white text-xl font-bold">{children}</span>
    </button>
  )
}

export default ContactUsButton
