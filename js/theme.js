(function($){
  'use strict';
  $("input[type='text']").on("click", function () {
    $(this).select();
  });
  function filterText(input) {
    var filter = $('.filter-flags');
    var str = $(input).find('i').attr('class');
    var keywords = String(str).replace(/f[0-9]+_/, "").split("_").join(" ");
    var append = $('.append ul');
    filter.keyup(function(e){
      var txt = this.value;
      if(txt){
          $(input).addClass('none');
          if (txt == keywords) {
           $(input).removeClass('none');
          }
      }else{
        $(input).removeClass('none');
      }
      
    });
  }
  var li = $("ul li");
  li.each(function(i, v){
    filterText(v);
  });
})(jQuery);