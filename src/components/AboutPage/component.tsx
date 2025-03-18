import './style.css'
import content from '../../content.js'

const AboutPage = () => {
  return (
    <section className='about-container' id='about'>
      <pre className='title'>{content.about.title}</pre>
      <pre className='about-content'>{content.about.content}</pre>
    </section>
  );
}

export default AboutPage;
