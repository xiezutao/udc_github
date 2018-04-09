/**
 * Lang scripts file
 */

var lang = new Lang();
lang.dynamic('en', '../lang/en.json');
lang.init({
    defaultLang: 'cn'
});

var langUtil = {};
langUtil.switchLang = function(langName) {
    lang.change(langName);
};
