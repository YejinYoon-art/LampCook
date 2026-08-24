$(document).ready(function () {
    const $allMenuBtn = $('.all_menu_btn');
    const $megaMenu = $('.mega_menu');
    const $sidebarDrawer = $('.sidebar_drawer');
    const $sidebarOverlay = $('.sidebar_overlay');
    const $sidebarCloseBtn = $('.sidebar_close_btn');
    const $body = $('body');

    // 1. 햄버거 버튼 클릭
    $allMenuBtn.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (window.innerWidth <= 1200) {
            // 태블릿 & 모바일: 사이드바 드로어 열기
            $sidebarDrawer.addClass('active');
            $sidebarOverlay.addClass('active');
            $body.addClass('no_scroll');
        } else {
            // 데스크탑: 메가메뉴 토글
            $megaMenu.toggleClass('active');
        }
    });

    // 2. 사이드바 닫기 함수
    function closeSidebar() {
        $sidebarDrawer.removeClass('active');
        $sidebarOverlay.removeClass('active');
        $body.removeClass('no_scroll');
    }

    // 닫기 버튼 및 배경 딤 클릭 시 사이드바 닫기
    $sidebarCloseBtn.on('click', function (e) {
        e.preventDefault();
        closeSidebar();
    });

    $sidebarOverlay.on('click', function () {
        closeSidebar();
    });

    // 3. 사이드바 아코디언 메뉴 인터랙션
    $('.sidebar_menu .menu_title').on('click', function (e) {
        e.preventDefault();
        const $currentItem = $(this).closest('.menu_item');
        const $currentDepth2 = $currentItem.find('.sidebar_depth_2');

        if ($currentItem.hasClass('open')) {
            // 이미 열려있으면 닫기
            $currentDepth2.stop().slideUp(250);
            $currentItem.removeClass('open');
        } else {
            // 다른 메뉴는 닫고 현재 메뉴만 펼치기
            $('.sidebar_menu .menu_item').removeClass('open');
            $('.sidebar_menu .sidebar_depth_2').stop().slideUp(250);

            $currentItem.addClass('open');
            $currentDepth2.stop().slideDown(250);
        }
    });

    // 4. 데스크탑 메가메뉴 외부 클릭 시 닫기
    $(document).on('click', function (e) {
        if (window.innerWidth > 1200) {
            if (!$(e.target).closest('header').length) {
                $megaMenu.removeClass('active');
            }
        }
    });

    // 5. ESC 키로 팝업/사이드바 닫기
    $(document).on('keydown', function (e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            closeSidebar();
            $megaMenu.removeClass('active');
        }
    });

    // 6. 창 크기 변경 시 리셋
    $(window).on('resize', function () {
        if (window.innerWidth > 1200) {
            closeSidebar();
        } else {
            $megaMenu.removeClass('active');
        }
    });
});