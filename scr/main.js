import "bootstrap/dist/css/bootstrap.min.css"
import '../style.css'
import $ from "jquery"
import Typewriter from "typewriter-effect/dist/core";



document.querySelector('#app').innerHTML = `
  
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: black; ">
      
      <div class="collapse navbar-collapse justify-content-between px-5" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Innovative Designs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Artisan’s Touch</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Cultural Insights</a>
          </li>
        </ul>

        <a class="navbar-brand translate-middle-x" href="#">
          <img style="width: 200px;" src="theotherglasses-logo-white.webp" alt="theotherglasses-logo">
        </a>
      
        <a class="navbar-brand" href="#">Find a Retailer</a>

      </div>

  </nav>

  <div class="position-relative">
    <video width="100%" height="100%" autoplay>
      <source src="public/home_og_video_v1.webm" type="video/webm">
    </video>
    <div class="position-absolute top-50 start-50 translate-middle text-white text-center">
      <h1 class="fs-4">Redefing Glasses</h1>
      <p class="fs-6">Versatile Luxury </p>
    </div>
  </div>

  <section>
    <div class="px-10 pt-5">
      <p class="fs-6" >Redefing Glasses</p>
      <span style="font-size: 6em; font-family: Libre Baskerville,sans-serif;">Quality is </span>
      <h2 style="font-size: 6em;" class="d-inline-block" id="typewriter"></h2>
    </div>
    
    <video width="100%" height="100%" autoplay>
      <source src="public/og-home-aviator-sec2.webm" type="video/webm">
    </video>
  </section>

  <div class="px-10 pb-5">
    <div class="row justify-content-center align-item-center durability ">
      <div class="col-md-6 class="d-flex justify-content-end">
        <h3 style="width: 450px;">
        Durability of titanium
         — strength meets all-day comfort.
        </h3>
      </div>
      <div class="col-md-6">
        <p>
          The Other Glasses introduces an innovative approach to eyewear. Each pair is a harmonious blend of design,
          timeless aesthetics, function and comfort. These striking frames meet the ideal balance one seeks in an
          everyday
          accessory.
        </p>
      </div>
    </div>
  </div>
  <div class="position-relative">
    <video width="100%" height="100%" autoplay>
      <source src="public/og-pr-video.webm" type="video/webm">
    </video>
    <div class="position-absolute bottom-0 start-50 translate-middle text-white text-center">
      <h1 class="fs-4">Innovation meets crafts</h1>
      <p class="fs-6">Made to last </p>
    </div>
  </div>
`

let elemt = document.getElementById('typewriter');

let autoW = new Typewriter(elemt, {
  // strings: ['Versatile Luxury', 'Redefing Glasses'],
  loop: true,
});

autoW .typeString('luxury')
      .deleteAll()
      .typeString('top design')
      .deleteAll()
      .typeString('exclusivity')
      .deleteAll()
      .typeString('craftsmanship')
      .deleteAll()
      .typeString('culture')
      .start();

      