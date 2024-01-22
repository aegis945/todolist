import './style.css';

const content = document.querySelector('#main');

const testDiv = document.createElement('div');
testDiv.textContent = "testingWebpack";

content.appendChild(testDiv);