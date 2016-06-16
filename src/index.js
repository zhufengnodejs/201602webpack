//var name = require('./component.js');
import {name} from './component';
import $ from 'jquery';
require('./css/style');
require('bootstrap/dist/css/bootstrap.css');
/**
 * 当加载一个模块的时候，不指定路径的路径
 * 会去node_modules中加载
 *
 */
/*var img = document.createElement('img');
img.className = 'img-circle';
img.src = require('./img/iphone7.jpg');
document.body.appendChild(img);*/
console.log(__DEV__,__PRODUCT__);
if(__DEV__){
    document.write('__DEV__');
}

if(__PRODUCT__){
    document.write('__PRODUCT__');
}
document.write('hello');
