"use strict";

// Sticky navigation
const header = document.querySelector(".header");
const hero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  (entries) => {
    if (!entries[0].isIntersecting) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  },
  { root: null, threshold: 0 }
);

observer.observe(hero);



// Animation for value items when they come into view
const valueItems = document.querySelectorAll(".value-item");

const valueObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

// Set initial state for animation
valueItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  valueObserver.observe(item);
});

const productItems = document.querySelectorAll(".product");

const productObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

productItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  productObserver.observe(item);
});

// Animation for roles items
const roleItems = document.querySelectorAll(
  ".role-1, .role-2, .role-3, .mission, .vision"
);

const roleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

// Set initial state for animation
roleItems.forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  roleObserver.observe(item);
});

// Date
document.getElementById("year").textContent = new Date().getFullYear();



document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  
  function openDrawer() {
    mobileDrawer.classList.add('active');
    drawerOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  }

 
  function closeDrawer() {
    mobileDrawer.classList.remove('active');
    drawerOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
  }

  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openDrawer);
  }

  if (drawerCloseBtn) {
    drawerCloseBtn.addEventListener('click', closeDrawer);
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
  }


  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });


  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeDrawer();
    }
  });

  
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768) {
      closeDrawer();
    }
  });
});

// FAB
// Floating Action Button (FAB) Implementation
document.addEventListener('DOMContentLoaded', function() {
  const fabContainer = document.getElementById('fabContainer');
  const fabMain = document.getElementById('fabMain');
  const fabActions = document.getElementById('fabActions');
  const backToTopBtn = document.getElementById('backToTop');
  const heroSection = document.querySelector('.section-hero');

  let fabOpen = false;

  // Show/Hide FAB based on scroll position
  function handleScroll() {
    if (!heroSection) return;
    
    const heroHeight = heroSection.offsetHeight;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition > heroHeight) {
      fabContainer.classList.add('visible');
    } else {
      fabContainer.classList.remove('visible');
      // Close FAB if it's open when scrolling back up
      if (fabOpen) {
        closeFab();
      }
    }
  }

  // Open FAB actions
  function openFab() {
    fabMain.classList.add('active');
    fabActions.classList.add('active');
    fabOpen = true;
  }

  // Close FAB actions
  function closeFab() {
    fabMain.classList.remove('active');
    fabActions.classList.remove('active');
    fabOpen = false;
  }

  // Toggle FAB actions
  function toggleFab() {
    if (fabOpen) {
      closeFab();
    } else {
      openFab();
    }
  }

  // Smooth scroll to top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    closeFab(); // Close FAB after clicking back to top
  }

  // Event Listeners
  window.addEventListener('scroll', handleScroll);
  
  if (fabMain) {
    fabMain.addEventListener('click', toggleFab);
  }

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', scrollToTop);
  }

  // Close FAB when clicking outside
  document.addEventListener('click', function(event) {
    if (fabOpen && !fabContainer.contains(event.target)) {
      closeFab();
    }
  });

  // Close FAB on escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && fabOpen) {
      closeFab();
    }
  });

  // Initial check for scroll position
  handleScroll();
});


// Contact Form with EmailJS Integration and Validation
// Initialize EmailJS with your public key
        (function() {
            emailjs.init("kf9R1lst7Uofy_OUJ"); 
        })();
        
        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('contact-form');
            const messageTextarea = document.getElementById('message');
            const charCount = document.getElementById('char-count');
            const successMessage = document.getElementById('success-message');
            
            // Character count for message textarea
            messageTextarea.addEventListener('input', function() {
                const length = this.value.length;
                charCount.textContent = length;
                
                if (length > 1000) {
                    this.value = this.value.substring(0, 1000);
                    charCount.textContent = 1000;
                }
            });
            
            // Form validation and submission
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Reset error messages
                const errorElements = document.querySelectorAll('.error');
                errorElements.forEach(el => el.style.display = 'none');
                
                let isValid = true;
                
                // Validate first name
                const firstName = document.getElementById('first-name').value.trim();
                if (!firstName) {
                    document.getElementById('first-name-error').style.display = 'block';
                    isValid = false;
                }
                
                // Validate last name
                const lastName = document.getElementById('last-name').value.trim();
                if (!lastName) {
                    document.getElementById('last-name-error').style.display = 'block';
                    isValid = false;
                }
                
                // Validate email
                const email = document.getElementById('email').value.trim();
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!email || !emailPattern.test(email)) {
                    document.getElementById('email-error').style.display = 'block';
                    isValid = false;
                }
                
                // Validate message
                const message = document.getElementById('message').value.trim();
                if (!message) {
                    document.getElementById('message-error').style.display = 'block';
                    isValid = false;
                }
                
                if (isValid) {
                    // Send email using EmailJS
                    emailjs.sendForm('service_5pngxel', 'template_37ze8az', this)
                        .then(function() {
                            // Show success message
                            successMessage.style.display = 'block';
                            
                            // Reset form
                            form.reset();
                            charCount.textContent = '0';
                            
                            // Hide success message after 5 seconds
                            setTimeout(() => {
                                successMessage.style.display = 'none';
                            }, 5000);
                        }, function(error) {
                            alert('Sorry, something went wrong. Please try again later.');
                            console.error('EmailJS Error:', error);
                        });
                }
            });
        });
