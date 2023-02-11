const variants = document.getElementById('p-variants');
const menuList = variants.getElementsByClassName("vector-menu-content-list")[0].getElementsByTagName("a");

for (const item of menuList) {
    item.addEventListener("click", function () {
        console.log('localStorage set ' + item.hreflang);
        localStorage.setItem('wikisource_variant',  item.hreflang.toLowerCase());
    });
}
