// ハンバーガーメニュー実装
jQuery('.c-btn-drawer').click(function() {
    jQuery('body').toggleClass('js-drawer-open');
});

jQuery('.c-mask-bg').click(function() {
    jQuery('body').removeClass('js-drawer-open');
});

jQuery('a[href^="#"]').click(function() {
    jQuery('body').removeClass('js-drawer-open');
});