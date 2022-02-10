$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        }
        else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click        
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    const nav = document.querySelector('nav');
      window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
      nav.classList.add('bg-dark', 'shadow');} 
      else {nav.classList.remove('bg-dark', 'shadow'); } });
});