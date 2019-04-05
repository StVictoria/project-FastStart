//сделай на чистом!!!!!!!
// $('.arrow_up').click(function(){
//     $('html, body').animate({
//         scrollTop: 0
//     }, 1000);
// });

//прелоадер
window.addEventListener('load', function(){
    let preloader = document.querySelector('.preloader');
    preloader.style.opacity = '0';
    setTimeout(function(){
        preloader.style.display = 'none';
    }, 1500);
});


//фиксирование гл меню
let menu = document.querySelector('.menu');
window.onscroll = function() {
    let scrolled = window.pageYOffset;
    // console.log(scrolled);
    if (scrolled > 645){
        menu.classList.add('fix');
    }else{
        menu.classList.remove('fix');
    }
}

//отправка формы
let form_head = document.querySelector('form.head');
let form_foot = document.querySelector('form.foot');
form_head.addEventListener('submit', function(e){
    e.preventDefault();

    let xhr = new XMLHttpRequest();

    let fio = this.querySelector('[name=fio]');
    let email = this.querySelector('[name=email]');

    xhr.open(this.method, this.action);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`fio=${fio.value}&email=${email.value}`);

    xhr.addEventListener('load', function(){
        alert(xhr.responseText);
    });
});

form_foot.addEventListener('submit', function(e){
    e.preventDefault();

    let xhr = new XMLHttpRequest();

    let fio = this.querySelector('[name=fio]');
    let email = this.querySelector('[name=email]');
    let comment = this.querySelector('[name=comment]');

    xhr.open(this.method, this.action);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(`fio=${fio.value}&email=${email.value}&email=${comment.value}`);

    xhr.addEventListener('load', function(){
        alert(xhr.responseText);
    });
});

//появление элементов
let bottomWindow = window.innerHeight + 30;
let animatedElements = document.querySelectorAll('.animate');

let advantagesItems1 = document.querySelectorAll('.advantages .first_line i');
let advantagesItems2 = document.querySelectorAll('.advantages .second_line i');

let pricelistItems = document.querySelectorAll('.pricelist_items .item');

let footerInfo = document.querySelector('.footer_field_content_contacts');

let socButtons = document.querySelectorAll('.social_buttons_block div');

function scrollAnimateElements(){
    animatedElements.forEach(function(element){
        let top = element.getBoundingClientRect().top;
        if (top < bottomWindow){
            element.classList.add('show');
        }
    });

    let advantagesLine1_top = document.querySelector('.advantages .first_line').getBoundingClientRect().top;
    let advantagesLine2_top = document.querySelector('.advantages .second_line').getBoundingClientRect().top;
    if (advantagesLine1_top < bottomWindow){
        advantagesItems1.forEach(function(item, index){
            item.classList.add('show');
            item.style.animationDelay = index / 2 + 's';
        });
    } 
    if (advantagesLine2_top < bottomWindow){
        advantagesItems2.forEach(function(item, index){
            item.classList.add('show');
            item.style.animationDelay = index / 2 + 's';
        });
    }

    let pricelistTop = document.querySelector('.pricelist_items').getBoundingClientRect().top;
    if (pricelistTop < bottomWindow){
        pricelistItems.forEach(function(item, index){
            item.classList.add('show');
            item.style.animationDelay = index / 4 + 's';
        });
    }

    let socButtons_top = document.querySelector('.social_buttons').getBoundingClientRect().top;
    if (socButtons_top < bottomWindow){
        socButtons.forEach(function(item, index){
            item.classList.add('show');
            item.style.animationDelay = index / 4 + 's';
        });
    }

    let footerInfo_top = document.querySelector('.footer_field_content').getBoundingClientRect().top;
    if (footerInfo_top < bottomWindow){
        footerInfo.classList.add('show');
    }
}

window.addEventListener('load', function(){
    scrollAnimateElements();
    window.addEventListener('scroll', function(){
        // parallax();
        scrollAnimateElements();
    });
});

//reviews slider
let reviewsWindow = document.querySelector('.reviews_window');
let tape = document.querySelector('.reviews_window_tape');
let slide = document.querySelector('.reviews_window_tape_slide');
let buttons = document.querySelectorAll('.reviews_slide_dots div');

function removeClass(){
    buttons.forEach(function(button){
        button.classList.remove('active');
    });
};
buttons.forEach(function(button){
    button.addEventListener('click', function(){
        removeClass();
        this.classList.add('active');
        if (this.classList.contains('2')){
            tape.style.left = '-100%';
        }else if (this.classList.contains('3')){
            tape.style.left = '-200%';
        }else if (this.classList.contains('1')){
            tape.style.left = '0';
        }
    });
});

//parallax
// $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});

//swipe

N = tape.children.length;

function lock(e) {};

function move(e) {};

tape.addEventListener('mousedown', lock, false);
tape.addEventListener('touchstart', lock, false);

tape.addEventListener('mouseup', move, false);
tape.addEventListener('touchend', move, false);

let x_start = null;

function unify(e) { return e.changedTouches ? e.changedTouches[0] : e };

function lock(e) { x_start = unify(e).clientX };

let i = 0;

function move(e) {
  if(x_start || x_start === 0) {
    let dx = unify(e).clientX - x_start, s = Math.sign(dx);
  
    if((i > 0 || s < 0) && (i < N - 1 || s > 0))
      tape.style.setProperty('--i', i -= s);
	
      x_start = null
  }
};