import './style.css'
import content from '../../content.js'

const ContactPage = () => {
  return (
    <section className='contact-container' id='contact'>
      <pre className='title'>{content.contact.title}</pre>
    </section>
  );
}

export default ContactPage;
