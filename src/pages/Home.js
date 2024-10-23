import logo from '../logo.svg';
import '../App.css';
import { Helmet } from 'react-helmet';


function Home() {
  return (
    <div className="Home">

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

      <section className="hero">
        <div className="hero-container">
        <div className="l-item">
          <h1>I'm JORAJ J R</h1>
          <h2>I'm an <span>Android Developer</span></h2>
          <p>I'm dedicated in building intuitive and high-performance mobile applications. With a deep understanding of Android frameworks and a passion for crafting seamless user experiences. With a deep understanding of Android frameworks and a passion for crafting seamless user experiences.</p>
          <a href="#">My Resume</a>
        </div>
        <img src="https://cdn.gadgets360.com/content/assets/entertainment/shah-rukh-khan-poster.jpg"></img>
        </div>

        <div className="scroll-down">
        <h2>SCROLL DOWN</h2>
        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z" fill="#0F0F0F"/>
        </svg>
      </div>

      </section>

      

      <section className="about flex-box">
        <img src="https://cdn.gadgets360.com/content/assets/entertainment/shah-rukh-khan-poster.jpg"/>
        <div className='about-right'>
          <div className="hi-head">
            <h2>Hi!</h2>
            <div className='about-dash'></div>
          </div>
          <h2>I'm an <span>Android Developer</span></h2>
          <p>I'm dedicated in building intuitive and high-performance mobile applications. With a deep understanding of Android frameworks and a passion for crafting seamless user experiences. With a deep understanding of Android frameworks and a passion for crafting seamless user experiences.</p>

          <div className='about-item-container'>

            <div className='about-item-row'>
              <h4>Name</h4>
              <p>Joraj J R</p>

              <h4>Phone</h4>
              <p>+91 1234567890</p>
            </div>

            <div className='about-item-row'>
              <h4>Email</h4>
              <p>myselfjoraj@proton.me</p>

              <h4>Job</h4>
              <p>Android Developer</p>
            </div>

            <div className='about-item-row'>
              <h4>Age</h4>
              <p>19</p>

              <h4>From</h4>
              <p>Trivandrum</p>
            </div>


          </div>

          <div className='buttons-flex'>
            <a href="#">My Resume</a>
            <a href="#">Contact Me</a>
          </div>
          
        </div>
      </section>

      <section className='skill'>
        <h1>What I Know</h1>
        <h2>My Skill</h2>
        <div className='skill-container'>
        <div className='skill-item-row'>
          <div className='skill-item'>
            <h4>Web Developement</h4>
            <span>98%</span>
          </div>
          <div className='progress-bar-border'>
            <div className='progress-bar'></div>
          </div>

          <div className='skill-item'>
            <h4>Web Developement</h4>
            <span>98%</span>
          </div>
          <div className='progress-bar-border'>
          <div className='progress-bar'></div>
          </div>
    
        </div>

        <div className='skill-item-row'>
          <div className='skill-item'>
            <h4>Web Developement</h4>
            <span>98%</span>
          </div>
          <div className='progress-bar-border'>
            <div className='progress-bar'></div>
          </div>

          <div className='skill-item'>
            <h4>Web Developement</h4>
            <span>98%</span>
          </div>
          <div className='progress-bar-border'>
          <div className='progress-bar'></div>
          </div>
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
            <li><a href="#">Mobile : +91 8086786159</a></li>
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

export default Home;
