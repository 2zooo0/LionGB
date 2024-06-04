import './index.css';
import './api.js';
import * as newinfo from './newG.js';
import * as getinfo from './getG.js';
import { delData } from './delG.js';

//window.onload = getData();

const submitbtn = document.getElementById('submitbtn');
document.getElementById('submitbtn').addEventListener('click', newinfo.newData());

const getGbtn = document.getElementById('getGbtn');
document.getElementById('getGbtn').addEventListener('click', getinfo.getData());