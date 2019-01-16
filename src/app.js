import Layer from './components/layer/layer.js';
import './css/common.css'

const App = function () {
    const dom = document.getElementById('app')
    var layer = new Layer()
    dom.innerHTML = layer.tpl
}

new App()