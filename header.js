(function(){
  $(window).scroll(function () {
      var top = $(document).scrollTop();
      if(top < 100)
        $('.hero-content').removeClass('hidden');
      else
        $('.hero-content').addClass('hidden');
  });
})();
