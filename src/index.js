//var name = require('./component.js');
import {name} from './component';
require('jquery');
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
//从数据库中读出信息
jQuery('#app').html('我是jquery');
document.write(__DEV_DB__?'本地数据库':'线上数据库');
