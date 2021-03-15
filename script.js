// forma 01
let btMenu = document.getElementById('menu-opener');
let menu = document.getElementById('menu-area');

// btMenu.addEventListener('click',function () {
//     console.log(menu.style.width);
//     if (menu.style.width == '200px') {
//         menu.style.width = 0;
//     } else {
//         menu.style.width = '200px';
//     }
// });

// forma 02
function menuToggle() {
    if (menu.classList.contains('menu-aberto') == false) {
        menu.classList.add('menu-aberto');
    } else {
        menu.classList.remove('menu-aberto');
    }
}