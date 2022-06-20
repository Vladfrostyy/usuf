const iW = document.querySelector('.item-product__img').offsetWidth
const item = document.querySelectorAll('.item-product__info')

for (let i = 0; i < item.length; i++) {
    item[i].style.width = iW + 'px'
}

document.addEventListener('resize', (e) => {
    for (let i = 0; i < item.length; i++) {
        item[i].style.width = iW + 'px'
    }
})