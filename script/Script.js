const menuBtn = document.querySelector('.all_menu_btn');
const megaMenu = document.querySelector('.mega_menu');

menuBtn.addEventListener('click', () => {
    megaMenu.classList.toggle('active');
});



$(document).ready(function(){
    $('.all_menu_btn').on('click',function(e){
        e.stopPropagation();
        $('.mega_menu').toggleClass('active');
    });

    $(document).on('click',function(e){
        if(!$(e.target).closest('.header_bottom').length){
            $('.mega_menu').removeClass('active');
        }
    })
})