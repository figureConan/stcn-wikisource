const script = document.createElement('script');
script.src = chrome.runtime.getURL('inject.js');
document.documentElement.appendChild(script);

const variant = localStorage.getItem('wikisource_variant');
console.log(variant);
const href = document.location.href;

if (variant && href.indexOf(variant) === -1) {
    const variants = document.getElementById('p-variants');
    const menuList = variants.getElementsByClassName("vector-menu-content-list")[0].getElementsByTagName("a");

    for (const item of menuList) {
        // hreflang = "zh-Hans"
        if (item.hreflang.toLowerCase() === variant) {
            console.log(item.href);
            document.location.href = item.href;
            break;
        }
    }
}
