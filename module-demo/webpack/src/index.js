// 导入jquery
import $ from 'jquery'
// 导入样式  需要借助loader
import './css/style.css'
import './css/style.less'

$(function() {
    $('li:odd').css('backgroundColor', '#0dd');
    $('li:even').css('backgroundColor', 'purple');
})