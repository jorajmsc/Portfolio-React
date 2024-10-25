import logo from '../logo.svg';
import '../App.css';
import { Helmet } from 'react-helmet';


function Contact() {
  return (
    <div className="About">

      <Helmet>
        <script src="https://kit.fontawesome.com/55917b94b9.js" crossorigin="anonymous"></script>
      </Helmet>

      <nav className="nav-bar-container make-sticky">
        <div className="logo-head"><span>JR</span></div>
        <div className="nav-items">
          <div className="item"><a href='/'>Home</a></div>
          <div className="item"><a href='/about'>About</a></div>
          <div className="item"><a href='/projects'>Projects</a></div>
          <div className="item"><a href='/vision'>Vision</a></div>
          <div className="item"><a href='/contact'>Contact</a></div>
        </div>
      </nav>

      <section className="TopHero">
        <h1>Contact</h1>
      </section>

      <section className='contact'>

        <div className='top-holder'>
             <div className='touch'>
                <h1>Get In Touch</h1>
                <p>We'd love to hear from you.We'd love to hear from you.We'd love to hear from you.
                    We'd love to hear from you.We'd love to hear from you.We'd love to hear from you.We'd love to hear from you. </p>
             </div>

             <div className='element-address'>
                <div className='element-pin flex-box'>
                    <i class="fa-solid fa-location-dot"></i>
                </div>
                <h1>My Address</h1>
                <span>MKRA 19,<br></br>Kerala,India</span>
             </div>

             <div className='element-contact'>
                <div className='element-pin  flex-box'>
                    <i class="fa-solid fa-phone"></i>
                </div>
                <h1>My Contact</h1>
                <span>+91 1234567890<br></br>myselfjoraj@proton.me</span>
             </div>

             
        </div>

      </section>

      

    

      <section class="footer">
      <div class="footer-row">
      <div class="footer-col">
          <h4>JORAJ J R</h4>
          <p>
            A passionate programmer, graduated from Kerala University.
          </p>
          <div class="icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
        <div class="footer-col">
          <h4>Info</h4>
          <ul class="links">
            <li><a href="#">Home Page</a></li>
            <li><a href="#">About Page</a></li>
            <li><a href="#">Vision Page</a></li>
            <li><a href="#">Projects Page</a></li>
            <li><a href="#">Contact Page</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Projects</h4>
          <ul class="links">
            <li><a href="#">Cloud Box Android App</a></li>
            <li><a href="#">React Safe Android App</a></li>
            <li><a href="#">Exa Learn Web App</a></li>
            <li><a href="#">Code Next Web App</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul class="links">
            <li><a href="#">+91 8086786159</a></li>
            <li><a href="#">myselfjoraj@proton.me</a></li>
            <li><a href="#">linkedin.com/in/myselfjoraj</a></li>
            <li><a href="#">github.com/myselfjoraj</a></li>
          </ul>
        </div>
        
      </div>
    </section>

    </div>
  );
}

export default Contact;
