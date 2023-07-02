$(document).ready(function() {
    $('.faq-item').removeClass('open'); 
    $('.faq-item p').hide(); 
    
    $('.faq-item').click(function() {
      $(this).toggleClass('open');
      $(this).find('p').slideToggle(200);
    });
  });
  