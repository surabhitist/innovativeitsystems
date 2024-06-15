import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
import {
  getFirestore,
  collection,
  getDocs as getDocsFromFirebase,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// import "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBLdO_r5ta_W5-qs2n574JUTbTqsQIG1-4",
  authDomain: "innovativeitsystemsnew.firebaseapp.com",
  projectId: "innovativeitsystemsnew",
  storageBucket: "innovativeitsystemsnew.appspot.com",
  messagingSenderId: "449176737595",
  appId: "1:449176737595:web:e8e833683530ea8188491e",
  measurementId: "G-C52XTS7TZH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Now you can access Firebase services like Firestore
const db = getFirestore(app);

// function send() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var subject = document.getElementById("subject").value;
//   var message = document.getElementById("message").value;

//   if (name.trim() === "") {
//     alert("Please enter your name");
//     return;
//   }
//   if (email.trim() === "" || !isValidEmail(email)) {
//     alert("Please enter a valid email address");
//     return;
//   }
//   if (subject.trim() === "") {
//     alert("Please enter a subject");
//     return;
//   }
//   if (message.trim() === "") {
//     alert("Please enter a message");
//     return;
//   }

//   var params = {
//     name: name,
//     email: email,
//     subject: subject,
//     message: message,
//   };

//   const serviceID = "service_trvn9ou";
//   const templateID = "template_ip5z4mo";

//   emailjs
//     .send(serviceID, templateID, params)
//     .then((res) => {
//       // Clear form fields
//       document.getElementById("name").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("subject").value = "";
//       document.getElementById("message").value = "";
//       alert("Email sent successfully");
//     })
//     .catch((err) => console.log(err));
// }

// // Function to validate email format
// function isValidEmail(email) {
//   // Regular expression for email validation
//   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      if (document.querySelector(".mobile-nav-active")) {
        e.preventDefault();
        this.parentNode.classList.toggle("active");
        this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
        e.stopImmediatePropagation();
      }
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".swiper").forEach(function (swiper) {
      let config = JSON.parse(
        swiper.querySelector(".swiper-config").innerHTML.trim()
      );
      new Swiper(swiper, config);
    });
  }
  window.addEventListener("load", initSwiper);

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
    let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
      initIsotope = new Isotope(
        isotopeItem.querySelector(".isotope-container"),
        {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        }
      );
    });

    isotopeItem
      .querySelectorAll(".isotope-filters li")
      .forEach(function (filters) {
        filters.addEventListener(
          "click",
          function () {
            isotopeItem
              .querySelector(".isotope-filters .filter-active")
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            initIsotope.arrange({
              filter: this.getAttribute("data-filter"),
            });
            if (typeof aosInit === "function") {
              aosInit();
            }
          },
          false
        );
      });
  });

  /**
   * Frequently Asked Questions Toggle
   */
  document
    .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
    .forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active");
      });
    });

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);

  const getDocs = async (collectionRef) => {
    return await getDocsFromFirebase(collectionRef);
  };

  async function fetchProducts() {
    try {
      const products = [];
      const querySnapshot = await getDocs(collection(db, "products"));
      querySnapshot.forEach((doc) => {
        products.push(doc.data());
      });
      renderProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  {
    /* <img src="${product.imageUrl}" 
              class="img-fluid" alt="${product.title}" /> */
  }
  // function createProductHTML(product) {
  //   return `
  //       <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
  //         <div class="portfolio-content" style="height: 400px;">
  //           <a href="assets/img/cta-bg.jp" data-gallery="portfolio-gallery-app" class="glightbox">

  //             <img src="assets/img/cta-bg.jpg"
  //             class="img-fluid" alt="${product.title}" />
  //           </a>
  //           <div class="portfolio-info">
  //             <h4><a title="More Details">${product.title}</a></h4>
  //             <p>${product.details || "No details available"}</p>
  //           </div>
  //         </div>
  //       </div>
  //     `;
  // }

  function createProductHTML(product) {
    return `
      <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
        <div class="portfolio-content" style="height: 400px;">
          <img src="${product.imgUrl}" class="img-fluid" alt="${
      product.title
    }" data-title="${product.title || " "}" 
          data-subtitle="${product.subtitle || " "}"
          data-details1="${product.details1 || " "}" 
          data-details2="${product.details2 || " "}"
          data-details3="${product.details3 || " "}"
          data-details4="${product.details4 || " "}"
          data-details5="${product.details5 || " "}"
          data-details6="${product.details6 || " "}"
          data-details7="${product.details7 || " "}"
          data-details8="${product.details8 || " "}"
          data-details9="${product.details9 || " "}"
          data-details10="${product.details10 || " "}"
          data-details11="${product.details11 || " "}"
          data-details12="${product.details12 || " "}"
          data-details13="${product.details13 || " "}"
          data-details14="${product.details14 || " "}"
          data-details15="${product.details15 || " "}"
          data-details16="${product.details16 || " "}"
          data-details17="${product.details17 || " "}"
          data-details18="${product.details18 || " "}"
          data-details19="${product.details19 || " "}"
          data-details20="${product.details20 || " "}"
          data-details21="${product.details20 || " "}"
          data-details22="${product.details20 || " "}"
          data-details23="${product.details20 || " "}"
          data-details24="${product.details20 || " "}"
          data-details25="${product.details20 || " "}"
          data-details26="${product.details20 || " "}"
          data-details27="${product.details20 || " "}"
          data-details28="${product.details20 || " "}"
          data-details29="${product.details20 || " "}"
          data-details30="${product.details20 || " "}"
          data-details31="${product.details20 || " "}"
          data-details32="${product.details20 || " "}"
          data-details33="${product.details20 || " "}"
          data-details34="${product.details20 || " "}"
          data-details35="${product.details20 || " "}"
          data-details36="${product.details20 || " "}"
          data-details37="${product.details20 || " "}"
          data-details38="${product.details20 || " "}"
          data-details39="${product.details20 || " "}"
          data-details40="${product.details20 || " "}"
          data-details41="${product.details20 || " "}"
          data-details42="${product.details20 || " "}"
          data-details43="${product.details20 || " "}"
          data-details44="${product.details20 || " "}"
          data-details45="${product.details20 || " "}"
          data-details46="${product.details20 || " "}"
          data-details47="${product.details20 || " "}"
          data-details48="${product.details20 || " "}"
          data-details49="${product.details20 || " "}"
          data-details50="${product.details20 || " "}"
          data-details51="${product.details20 || " "}"
          data-details52="${product.details20 || " "}"
          data-details53="${product.details20 || " "}"
          data-details54="${product.details20 || " "}"
          data-details55="${product.details20 || " "}"
          data-details56="${product.details20 || " "}"
          data-details57="${product.details20 || " "}"
          data-details58="${product.details20 || " "}"
          data-details59="${product.details20 || " "}"
          data-details60="${product.details20 || " "}"
          data-details61="${product.details20 || " "}"
          data-details62="${product.details20 || " "}"
          data-details63="${product.details20 || " "}"
          data-details64="${product.details20 || " "}"
          data-details65="${product.details20 || " "}"
          data-details66="${product.details20 || " "}"
          data-details67="${product.details20 || " "}"
          data-details68="${product.details20 || " "}"
          data-details69="${product.details20 || " "}"
          data-details70="${product.details20 || " "}"
          data-details71="${product.details20 || " "}"
          data-details72="${product.details20 || " "}"
          data-details73="${product.details20 || " "}"
          data-details74="${product.details20 || " "}"
          data-details75="${product.details20 || " "}"
          data-details76="${product.details20 || " "}"
          data-details77="${product.details20 || " "}"
          data-details78="${product.details20 || " "}"
          data-details79="${product.details20 || " "}"
          data-details80="${product.details20 || " "}"
          data-details81="${product.details20 || " "}"
          data-details82="${product.details20 || " "}"
          data-details83="${product.details20 || " "}"
          data-details84="${product.details20 || " "}"
          data-details85="${product.details20 || " "}"
          data-details86="${product.details20 || " "}"
          data-details87="${product.details20 || " "}"
          data-details88="${product.details20 || " "}"
          data-details89="${product.details20 || " "}"
          data-details90="${product.details20 || " "}"
          data-details91="${product.details20 || " "}"
          data-details92="${product.details20 || " "}"
          data-details93="${product.details20 || " "}"
          data-details94="${product.details20 || " "}"
          data-details95="${product.details20 || " "}"
          data-details96="${product.details20 || " "}"
          data-details97="${product.details20 || " "}"
          data-details98="${product.details20 || " "}"
          data-details99="${product.details20 || " "}"
          data-details100="${product.details20 || " "}"



          onclick="showModal(this)"/>
          <div class="portfolio-info">
            <h4><a title="More Details">${product.title}</a></h4>
            <h5>${product.subtitle || " "}</h5>
          </div>
        </div>
      </div>
    `;
  }

  function renderProducts(products) {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; // Clear existing content
    products.forEach((product) => {
      container.innerHTML += createProductHTML(product);
    });
    // Initialize Glightbox for newly added elements
    const lightbox = GLightbox({ selector: ".glightbox" });
  }

  document.addEventListener("DOMContentLoaded", fetchProducts);

  // const getDataFromFirestore = (path) => {
  //   console.log("Fetching data for path:", path);

  //   let collection = db.collection("products").doc(path);

  //   collection
  //     .get()
  //     .then((doc) => {
  //       if (doc.exists) {
  //         console.log("Document data:", doc.data());
  //         alert("Data exists"); // Ensure alert works as expected
  //       } else {
  //         console.log("No such document");
  //         alert("Data does not exist");
  //       }
  //     })
  //     .catch((err) => {
  //       console.error("Error getting document:", err);
  //       alert("Error: " + err.message);
  //     });
  // };

  // let path = location.pathname.split("/").pop();
  // getDataFromFirestore(path);
})();
