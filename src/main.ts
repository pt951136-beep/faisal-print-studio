import './style.css'
import businessCard from './assets/business-card.jpg'
import panaflex from './assets/panaflex.jpg'
import banner from './assets/banner.jpg'
import printingPress from './assets/printing-press.jpg'
import weddingCards from './assets/wedding-cards.jpg'
import heroImg from './assets/hero.png'
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<header>

  <nav>
    <h1>Faisal Print Studio</h1>

    <ul>
      <li>Home</li>
      <li>Services</li>
      <li>Portfolio</li>
      <li>Contact</li>
    </ul>
  </nav>

  <p>Professional Printing Solutions</p>
<img src="${heroImg}" alt="Printing" class="hero-image">
</header>


<section class="hero">

  <div class="hero-content">

    <h2>Professional Printing Solutions</h2>

    <p>
      High-quality business cards, brochures, flyers, banners, wedding cards
      and custom printing services with fast delivery and premium finishing.
    </p>

    <div class="hero-buttons">

  <a href="https://wa.me/923052010137" target="_blank">
    <button>Get a Quote</button>
  </a>

  <a href="#portfolio">
  <button class="secondary-btn">View Portfolio</button>
</a>

</div>

  <div class="hero-image">
    <img src="${printingPress}" alt="Printing Press">
  </div>

</section>

<section class="services">

  <h2>Our Services</h2>

  <div class="cards">

    <div class="card">
      <h3>Business Cards</h3>
      <p>Premium quality visiting cards for your brand.</p>
    </div>


    <div class="card">
      <h3>Flyers & Posters</h3>
      <p>High quality marketing prints.</p>
    </div>


    <div class="card">
      <h3>Custom Printing</h3>
      <p>Complete printing solutions according to your needs.</p>
    </div>

  </div>

</section>



<section class="gallery" id="portfolio">

  <h2>Our Printing Work</h2>

  <div class="gallery-items">

    <div class="work">
      <img src="${businessCard}" alt="Business Card">
      <h3>Business Cards</h3>
      <p>Premium visiting cards printing.</p>
    </div>

    <div class="work">
      <img src="${banner}" alt="Banner">
      <h3>Banners</h3>
      <p>Large banners and promotional prints.</p>
    </div>

    <div class="work">
      <img src="${weddingCards}" alt="Wedding Cards">
      <h3>Wedding Cards</h3>
      <p>Custom invitation card designs.</p>
    </div>

    <div class="work">
      <img src="${printingPress}" alt="Printing Press">
      <h3>Printing Press</h3>
      <p>Professional commercial printing solutions.</p>
    </div>

    <div class="work">
      <img src="${panaflex}" alt="Panaflex">
      <h3>Panaflex</h3>
      <p>High-quality panaflex and outdoor branding.</p>
    </div>

  </div>

</section>
<section class="about">

  <h2>About Faisal Print Studio</h2>

  <p>
    Faisal Print Studio provides high quality printing solutions
    for businesses, events and personal needs.
    We focus on premium quality, creative designs and reliable service.
  </p>

  <div class="features">

    <div>
      <h3>Quality Printing</h3>
      <p>Professional finishing with attention to detail.</p>
    </div>

    <div>
      <h3>Fast Service</h3>
      <p>On-time delivery for your printing requirements.</p>
    </div>

    <div>
      <h3>Custom Designs</h3>
      <p>Creative solutions according to your brand.</p>
    </div>

  </div>

</section>

<section class="contact">

  <h2>Contact Us</h2>

  <p>
    Get your printing work done with Faisal Print Studio.
  </p>

  <section class="contact">

  <h2>Contact Us</h2>

  <p>
    Get your printing work done with Faisal Print Studio.
  </p>

  <a href="https://wa.me/923052010137" target="_blank">
    <button>WhatsApp Us</button>
  </a>

</section>

</section>

<footer>

  <div class="footer-content">

    <div>
      <h3>Faisal Print Studio</h3>
      <p>Professional Printing Solutions</p>
    </div>

    <div>
      <h3>Contact</h3>
      <p>Karachi, Pakistan</p>
      <p>WhatsApp: +92 305 2010137</p>
    </div>

    <div>
      <h3>Services</h3>
      <p>Business Cards</p>
      <p>Flyers & Banners</p>
      <p>Custom Printing</p>
    </div>

  </div>

  <p class="copyright">
    © 2026 Faisal Print Studio. All Rights Reserved.
  </p>




</footer>



`