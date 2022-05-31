// Создать div
const div = document.createElement('div')
// Добавить к нему класс wrapper
div.classList.add('wrapper')
// Поместить его внутрь тэга body
const body=document.body
body.appendChild(div)
// Создать заголовок H1 "DOM (Document Object Model)"
const h1=document.createElement('h1')
h1.textContent='DOM (Document Object Model)'
// Добавить H1 перед DIV с классом wrapper
div.insertAdjacentElement('beforebegin',h1)
// Создать список <ul></ul>
// Добавить в него 3 элемента с текстом "один, два, три"
const ul=`
<ul>
<li>один</li>
<li> два</li>
<li> три</li>
</ul>
`
// Поместить список внутрь элемента с классом wrapper
div.innerHTML=ul
// =================================================
// Создать изображение
const img=document.createElement('img')
// Добавить следующие свойства к изображению
// 1. Добавить атрибут source
img.src='https://mirpozitiva.ru/wp-content/uploads/2019/11/1478873198_podsolnuhi_leto.jpg'
// 2. Добавить атрибут width со значением 240
img.width=240 
console.log(img)
// 3. Добавить класс super
img.classList.add('super')
// 4. Добавить свойство alt со значением "Super Man"
img.setAttribute("alt","Super Man")
// Поместить изображение внутрь элемента с классом wrapper
div.appendChild(img)
// Используя HTML строку, создать DIV с классом 'pDiv' + c 2-мя параграфами
const div_01=`
<div class="pDiv">
<p>Параграф 1</p>
<p>Параграф 2</p>
</div>
`
// Поместить этот DIV до элемента <ul></ul>
const ul_div=div.querySelector('ul')
ul_div.insertAdjacentHTML('beforebegin',div_01)
// Добавить для 2-го параграфа класс text
const div_pDiv=document.querySelector('.pDiv')
div_pDiv.children[1].classList.add('text')
// Удалить 1-й параграф
div_pDiv.firstElementChild.remove()
console.log(div_pDiv.children)
// Создать функцию generateAutoCard, 
// которая принимает 3 аргумента: brand, color, year
// Функция должна возвращать разметку HTML:
// <div class="autoCard">
//   <h2>BRAND YEAR</h2>
//   <p>Автомобиль BRAND - YEAR года. Возраст авто - YEARS лет.</p>
// </div>
const generateAutoCard=(brand, color, year)=>{
    const now=new Date()
    const now_year=now.getFullYear()
    return `
    <div class="autoCard">
       <h2>${brand.toUpperCase()} ${year}</h2>
       <p>Автомобиль ${brand.toUpperCase()} - ${year} года. Возраст авто - ${now_year-year} лет.</p>
       <p>Цвет: ${color.toUpperCase()}</p>
       <button class="btn btn-primary">Удалить</button>
    </div>`
}
// Создать новый DIV с классом autos
const div_02=document.createElement('div')
div_02.classList.add('autos')
// Создать 3 карточки авто, используя функцию generateAutoCard
const carsList = [
    {brand: 'Tesla', year: 2015, color: 'Красный'},
    {brand: 'Lexus', year: 2016, color: 'Серебристый'},
    {brand: 'Nissan', year: 2012, color: 'Черный'},
]

const cars_HTML=carsList.map(car=> {
    return generateAutoCard(car.brand,car.color,car.year)
}).join('')
console.log(cars_HTML)
// Поместить эти 3 карточки внутрь DIV с классом autos
div_02.innerHTML=cars_HTML
console.log(div_02)
// Поместить DIV c классом autos на страницу DOM - до DIV с классом wrapper
div.insertAdjacentElement('beforebegin',div_02)
// Добавить кнопку Удалить на каждую карточку авто
// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки
const buttons=document.querySelectorAll('.btn')
console.log(buttons)
// 2. Создать функцию удаления
const fun_delete=(e)=>{
    const currentButton=e.currentTarget
    currentButton.parentElement.remove()
}
// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку
buttons.forEach(button=>button.addEventListener('click',fun_delete))

//моё
body.classList.add('container')