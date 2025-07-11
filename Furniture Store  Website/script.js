function openLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  //Add to cart sofa
  // Global variables
        let currentQuantity = 1;
        let selectedSize = 'L';
        let selectedColor = 'purple';

        // Quantity functions
        function increaseQuantity() {
            const input = document.getElementById('quantityInput');
            let currentValue = parseInt(input.value);
            if (currentValue < 99) {
                currentValue++;
                input.value = currentValue;
                currentQuantity = currentValue;
                updateCartInfo();
            }
        }

        function decreaseQuantity() {
            const input = document.getElementById('quantityInput');
            let currentValue = parseInt(input.value);
            if (currentValue > 1) {
                currentValue--;
                input.value = currentValue;
                currentQuantity = currentValue;
                updateCartInfo();
            }
        }
 //Filter
 // Filter Modal Functions
        function openFilterModal() {
            const modal = document.getElementById('filterModal');
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeFilterModal() {
            const modal = document.getElementById('filterModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }


        //Add to cart modal
        document.addEventListener('DOMContentLoaded', function() {
  // Get all product cards
  const productCards = document.querySelectorAll('.shop-card');
  const modal = document.getElementById('addToCartModal');
  const closeModal = document.querySelector('.close-modal');
  
  // Add click event to each product card
  productCards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Don't open modal if clicking on discount tag
      if (e.target.classList.contains('discount')) return;
      
      // Get product info from the card
      const productImage = this.querySelector('img').src;
      const productName = this.querySelector('h3').textContent;
      const productDescription = this.querySelector('p').textContent;
      const currentPrice = this.querySelector('.price1 span, .sprice span').textContent;
      
      // Check if there's an old price
      let oldPrice = '';
      const oldPriceElement = this.querySelector('.price1 del, .sprice del');
      if (oldPriceElement) {
        oldPrice = oldPriceElement.textContent;
      }
      
      // Set modal content
      document.getElementById('modalProductImage').src = productImage;
      document.getElementById('modalProductName').textContent = productName;
      document.getElementById('modalProductDescription').textContent = productDescription;
      document.getElementById('modalProductPrice').textContent = currentPrice;
      document.getElementById('modalProductOldPrice').textContent = oldPrice;
      
      // Show modal
      modal.style.display = 'block';
      document.body.style.overflow = 'hidden';
    });
  });
  
  // Close modal when clicking X
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
  
  // Close modal after adding to cart
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });


    // Toggle mobile menu
        function toggleMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            const overlay = document.getElementById('overlay');
            const hamburger = document.querySelector('.hamburger');
            
            mobileMenu.classList.toggle('active');
            overlay.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
        }

        // Close mobile menu
        function closeMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            const overlay = document.getElementById('overlay');
            const hamburger = document.querySelector('.hamburger');
            
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Restore body scroll
            document.body.style.overflow = 'auto';
        }

        // Close menu when clicking on a link
        document.querySelectorAll('.mobile-nav-links a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // Close menu on window resize if screen becomes larger
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        });

      

