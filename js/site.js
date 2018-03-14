// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function validation(){
  var x = document.form["name"]["email"]["snap"].value;
  if (x==""){
    alert("Please fill in the blank spaces!");
    return false;
  }
}
