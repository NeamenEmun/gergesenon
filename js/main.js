// === Main JavaScript Functions ===

// Payment modal functions
function openPaymentModal(type) {
  alert('Payment integration would open here for ' + type + ' payments');
  // In a real implementation, this would open a payment modal
  // or redirect to a payment processor like Stripe, PayPal, etc.
}

function showBankDetails() {
  alert('Bank transfer details would be displayed here');
  // In a real implementation, this would show bank account details
}

function showCryptoAddresses() {
  alert('Cryptocurrency wallet addresses would be displayed here');
  // In a real implementation, this would show crypto wallet addresses
}

// Media gallery filtering
function initializeMediaFilters() {
  const filters = document.querySelectorAll('.media-filter');
  
  filters.forEach(filter => {
    filter.addEventListener('click', function() {
      const filterType = this.getAttribute('data-filter');
      
      // Update active filter
      filters.forEach(f => f.classList.remove('active'));
      this.classList.add('active');
      
      // Filter media items
      const mediaItems = document.querySelectorAll('.media-item');
      mediaItems.forEach(item => {
        if (filterType === 'all' || item.getAttribute('data-type') === filterType) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

// Navigation highlighting
function updateActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    
    // Check if this link matches the current page
    const href = link.getAttribute('href');
    if (href === currentPage || 
        (currentPage === 'index.html' && (href === 'index.html' || href === '#')) ||
        (currentPage === 'about.html' && href === 'about.html') ||
        (currentPage === 'media.html' && href === 'media.html') ||
        (currentPage === 'donate.html' && href === 'donate.html')) {
      link.classList.add('active');
    }
  });
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Mobile menu toggle functionality
function initializeMobileMenu() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.navlinks');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      
      // Update button text
      if (navLinks.classList.contains('active')) {
        this.textContent = '✕';
      } else {
        this.textContent = '☰';
      }
    });
    
    // Close menu when clicking on a link
    const navLinkElements = document.querySelectorAll('.nav-link');
    navLinkElements.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('active');
        mobileToggle.textContent = '☰';
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mobileToggle.contains(event.target) && !navLinks.contains(event.target)) {
        navLinks.classList.remove('active');
        mobileToggle.textContent = '☰';
      }
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set current year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
  
  // Initialize navigation
  updateActiveNavLink();
  
  // Initialize smooth scrolling
  initializeSmoothScrolling();
  
  // Initialize media filters if they exist
  initializeMediaFilters();
  
  // Initialize mobile menu
  initializeMobileMenu();
});