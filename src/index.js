//var name = require('./component.js');
import {name} from './component';
import $ from 'jquery';
/**
 * 当加载一个模块的时候，不指定路径的路径
 * 会去node_modules中加载
 *
 */

$(document).ready(function(){
    $('#app').html($.zfpxname);
});
