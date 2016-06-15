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

var img = document.createElement('img');
img.className = 'img-circle';
img.src = require('../build/iphone7.jpg');
document.body.appendChild(img);
$(document).ready(function(){
    $('#app').html($.zfpxname);
});
