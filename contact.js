document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contactForm');
  
    if (!form) return;
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const phone = form.querySelector('input[name="phone"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();
  
      if (!name || !email || !phone || !message) {
        alert('Please fill in all fields.');
        return;
      }

      console.log({
        name,
        email,
        phone,
        message
      });
  
      alert('Your message has been sent successfully!');
      form.reset();
    });
  });
  