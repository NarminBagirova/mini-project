const wishlistButtons = document.querySelectorAll('.wishlist-btn');

wishlistButtons.forEach(button => {
  button.addEventListener('click', function () {
    const productId = this.dataset.id;
    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (wishlist.includes(productId)) {
      wishlist = wishlist.filter(id => id !== productId);
      this.classList.remove('active');
    } else {
      wishlist.push(productId);
      this.classList.add('active');
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  });
});

const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
wishlistButtons.forEach(btn => {
  if (savedWishlist.includes(btn.dataset.id)) {
    btn.classList.add('active');
  }
});

document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('product-list');
  
    fetch('http://localhost:3000/products') 
      .then(res => res.json())
      .then(data => {
        const featuredProducts = data.filter(p => p.isFeatured);
        renderProducts(featuredProducts);
      });
    });
  