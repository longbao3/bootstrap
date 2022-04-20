// navbar
$(window).scroll(function(){
    let oTop = $(".section-2").offset().top - windowinnerHeight;
    if($(window).scrollTop() > oTop) {
        $('.navbar').addClass('sticky');
    }
    else{
        $('.navbar').moveClass('sticky');
    }
})

// gioi thieu sach
// let nCount = selector => {
//     $(selector).each(function(){
//         $(this).animate({
//             Counter: $(this).text()
//         },{
//             duration: 4000,
//             easing: "swing",

//             step: function(value){
//                 $(this).text(Math.ceil(value))
//             }
//         })      
//     })
// }


  window.onload = function () {

    console.log("Hello");
  
    $(".count").each(function () {
  
      console.log("OK");
  
      $(this)
  
        .prop("Counter", 0)
  
        .animate(
  
          {
  
            Counter: $(this).text(),
  
          },
  
          {
  
            duration: 3000,
  
            easing: "swing",
  
            step: function (now) {
  
              $(this).text(Math.ceil(now));
  
            },
  
          }
  
        );
  
    });
  
  };
// let position = 0;
// $(window).scroll(function(){
//     let oTop = $('.numbers').offset().top - window.innerHeight
//     if(position == 0 && $(window).scrollTop() >= oTop) {
//         position++;
//         nCount(".rect > h1");
//     }
// })
