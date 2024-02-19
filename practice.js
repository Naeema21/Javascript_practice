// call apply bind 
// call apply bind is used to invoke the function 
// call - argumnet pass as comma seperated 
// apply - second argumnet pass as an array 
// bind - method returns a copy of function which can invoke later 

let printFullName = function (hometown, state, method) {
    console.log(this.firstName + "  " + this.lastName + ' from ' + hometown + ", " + state + " " + method)
}

let object = {
    firstName: 'Naeema',
    lastName: 'Bargir'
}

printFullName.call(object, 'Miraj', 'Maharashtra', 'call')
printFullName.apply(object, ['Miraj', 'Maharashtra', 'apply'])
let bindOP = printFullName.bind(object, 'Miraj', 'Maharashtra', 'bind')
bindOP()

//currying - pass multiple argumnets 

// eg using bind

var currying1 = printFullName.bind(object, 'Miraj')
currying1('Maharashtra', 'currying')

// eg using closure 

var multiply = function (x) {
    return function (y) {
        console.log(x * y)
    }
}

let multiplyByTwo = multiply(2)
multiplyByTwo(3)


// debouncing - The debounce() function forces a function to wait a certain amount of time before running again. 
// The function is built to limit the number of times a function is called. 


// promise - is a object placeholder which store eventual completion or failure of asynchrous operations

var p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P1 Success'), 3000)
})

var p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve('P2 Success'), 2000)
    setTimeout(() => reject('P2 fail'), 2000)
})

var p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('P3 Success'), 5000)
})

// promise.all : if all success it will wait fall all the get settled or if one of promise is rejected it will throw an error imediately

Promise.all([p1, p2, p3]).then((res) => {
    console.log('all', res)
}).catch((err) => console.error('all', err))

// promise.allSettled : wait for promise to get all settled where it is resolve or rejected in form of object
Promise.allSettled([p1, p2, p3]).then((res) => {
    console.log('allsettled', res)
}).catch((err) => console.error('allsettled', err))

// promise.race: give the value of first settled promise where it is resolved or rejected
Promise.race([p1, p2, p3]).then((res) => {
    console.log('race', res)
}).catch((err) => console.error('race', err))


// promise.any : give the value of first resolved promise, if all rejected then throw an aggergate error
Promise.any([p1, p2, p3]).then((res) => {
    console.log('any', res)
}).catch((err) => {
    console.error('any', err)
    console.log('aggregate', err.errors)
})


// slice vs splice 
var arr2 = [1, 2, 3, 4, 5, 6]

//  slice  return an new array with slected index
// splice modifies original array and return deleted array of value

console.log(arr2.slice(0, 2), arr2)
console.log(arr2.splice(0, 2), arr2)


//  memoization : is used to increase performance of function. IT check value is already in cache if it is not then only it perform 
// the function otherwish return a cache value . closure is used here 

const memoization = () => {
    var cache = {}
    return (value) => {
        if (value in cache) {
            console.log('value from cache')
            return cache[value]
        } else {
            var result = value + 20;
            cache[value] = result
            return result
        }
    }
}

var add20 = memoization()

console.log(add20(20))
console.log(add20(20))

// hosting : it is basically we move function and variable declration move to the top level  before execution of code . and it will notb thow
// an errror. it is possible because of first phase of execution context i.e. memory creation phase 
// function : arrow func can not be hosted because it store as a variable. 
// variable:  variable can be hosisted and it give an undefiend value. let and const also hostied but it store in differenet scope called 
// script and which can be only accesible after asssigning value to it. so whenever we are vosied let and const it throw and reference error


// closure : function along with lexical scope forms a closure. basically  inner functions can access the value of outer fun 
// even if it is returned. closure remeber access variable and argument reference of its outer function
//  use - meoization , currying , data hiding 


// callback : used for async operation 
// callback hell : pyramid of dom ; horizantally code revoled 
// inversion of control

const fun1 = (callback) => {
    setTimeout(() => { console.log('func1'); callback(); }, 1000)
}

const fun2 = () => {
    console.log('func 2')
}

fun1(fun2);


// check empty object 
console.log('obj length', Object.entries(object).length, Object.keys(object).length)

// Object.freeze(object)
// .freeze prevent to add new key value in object. applied to only to level property

Object.seal(object)
//.seal can prevent from deleting an value

delete object.lastName
object.abc = 'abc'
object.firstName = 'xys'

console.log(object)

//spread use for expand the values like concante arr 

var array1 = [1, 2, 3, 4]; var array2 = [5, 6, 7]
console.log('spread', [...array1, ...array2])
