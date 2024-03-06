const logger = log => console.log(log)

const sum = (a, b) => a+b;

const sumObject = (a, b) => ({a: a, b: b});


/*8. enhenced object literals
    1. định nghĩa key : value cho ob
    2. định nghĩa method cho object
    3. định nghĩa key cho object cho dang biến
    */

//vd :
var namer = 'js'
var price = 1000;
var course = {
    namer: namer,
    price: price,
    getName: function(){
        return namer;
    }
}
// console.log(course);

var courseVlueInOj = {namer, price, getName(){
    return namer;
}}
console.log(courseVlueInOj.getName()) // giong nhau chua

// destructuring : cho arr - obj

var array = ['js', 'php', 'ruby'];
//c1
var a = array[0];
var b = array[1];
var [e, ,c] = array;//destructuring

var [g, ...rest] = array//rest - con lai
// console.log(a, c);
// console.log(g)
// console.log(rest)

var cou = {
    namer: 'js',
    price: 1000,
    children : {
        name : 'react'
    }
}

var {namer12, children} = cou;
// console.log(namer12)
//hay su dung

function logger9({name, prince, ...rest}) {
    console.log(name);
    console.log(prince);
    console.log(rest)
}
// logger9({
//     name: 'js',
//     prince: 1000,
//     description: 'description content'
// })

// spread - noi mang hoac obj

var arr1 = ['js', 'php', 'ruby']
var arr2 = ['react', 'dart']

var arr3 = []

arr3 = [...arr2, ...arr1]
console.log(arr3)
console.log(arr1.concat(arr2))


var obj1 = {name: 'js'}
var obj2 = {price: 10000}

var object3 = {
    ...obj1,
    ...obj2,
    'test': "123123123"
}
console.log(object3)

//module: import - export

import logtest, {TYPE_ERROR, TYPE_WARN, TYPE_LOG} from './module_test.js';
import * as contant from './module_test.js';

//{} import 
console.log(contant)