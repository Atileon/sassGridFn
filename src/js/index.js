import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import { normalize } from "../../node_modules/normalize.css";
import "../sass/index.scss";
import FormValidator from './FormValidator.js';
console.log("webpack starterkit");

let formValidator = new FormValidator();

formValidator.init();
