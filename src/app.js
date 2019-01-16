import Layer from './components/layer/layer.js';
import './css/common.css'

const App = function () {
    const dom = document.getElementById('app')
    var layer = new Layer()
    dom.innerHTML = layer.tpl({
        name: '关',
        arr: ['关羽','刘备','张飞']
    });
}

new App()