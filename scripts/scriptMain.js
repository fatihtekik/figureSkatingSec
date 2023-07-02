document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('#faq');
    var whyUs = document.querySelectorAll(`#why-us`)
    if (links) {
      links.forEach(function(link) {
        link.addEventListener('click', function(event) {
          event.preventDefault();
          
          var faqSection = document.querySelector('#DeskcAboutFlawTwo');
          var offsetTop = faqSection.offsetTop;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        });
      });
    }
    
  });
  document.addEventListener('DOMContentLoaded', function() {
    var whyUs = document.querySelectorAll(`#why-us`)
    if (whyUs) {
    whyUs.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        
        var whyUssection = document.querySelector('.section--motivation');
        var offsetTop = whyUssection.offsetTop;
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      });
    });
     }
    
  });
  
  