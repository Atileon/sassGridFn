import $ from 'jquery';
import slick from 'slick-carousel';
export class TestClass{
    constructor(){

    }
    firstMethod(){
        let el = document.querySelector('.collection-cards');
        el.addEventListener('click',()=>{
            el.classList.remove('to-right');
            $('.collection-cards').slick({
                centerMode:true,
                slidesToShow:3,
                infinite:false,
                arrows:false,
                dots:false
            });
        });
        
    }
}
let slickTest = new TestClass().firstMethod();