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
const mainFun = () => {
    console.log('debouncing and Throtaling')
}


const debounceFun = (mainFun, timer) => {
    let flag;
    return function (...args) {
        clearTimeout(flag)
        flag = setTimeout(() => {
            mainFun(...args)
        }, timer)
    }
}

var debounce = debounceFun()
debounce()


// Throttle is a technique that ensures a function is called at most once in a specified time interval, 
// regardless of how many times it is triggered within that interval.
//  Unlike debouncing, throttling ensures the function runs at regular intervals.
const Throtalling = (mainFun, Timer) => {
    let lastExecution = 0;

    return function (...args) {
        const now = Date.now()

        if (now - lastExecution >= Timer) {
            mainFun(...args)
            lastExecution = now
        }
    }
}

const throttle = Throtalling(mainFun, 2000); // 2000 ms (2 seconds) interval

// Simulate multiple calls
setInterval(() => {
    throttle(); // This will only log 'throttling' once every 2 seconds.
}, 500); // Triggered every 500ms, but `mainFun` is only called every 2 seconds.




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

//            Slice	                                                    Splice
// Doesn't modify the original array(immutable)	Modifies the original array(mutable)
// Returns the subset of original array	Returns the deleted elements as array
// Used to pick the elements from array	Used to insert/delete elements to/from array

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

// A callback function is a function passed into another function as an argument.
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
// .freeze prevent to add new key value in object. applied to only to level property cant modigfy

Object.seal(object)
//.seal can prevent from deleting an value can modify

delete object.lastName
object.abc = 'abc'
object.firstName = 'xys'

console.log(object)

//spread use for expand the values like concante arr 

var array1 = [1, 2, 3, 4]; var array2 = [5, 6, 7]
console.log('spread', [...array1, ...array2])


// different method to create object 
var obj1 = {
    name: 'naeema'
}

let vehicle = {
    wheels: '4',
    fuelType: 'Gasoline',
    color: 'Green'
}
let carProps = {
    type: {
        value: 'Volkswagen'
    },
    model: {
        value: 'Golf'
    }
}

var obj2 = Object.create(vehicle, carProps);


var obj3 = new Object()

function Person(name) {
    this.name = name;
    this.age = 21;
}
var obj4 = new Person("Sudheer");

const orgObject = { company: 'XYZ Corp'};
const carObject = { name: 'Toyota'};
const obj5 = Object.assign({}, orgObject, carObject);

console.log('obj2', obj2, obj3 , obj4, obj5)




// Object.assign() copies properties from a source object to a target object.
// Object.create() creates an object from an existing object.
// Object.fromEntries() creates an object from a list of keys/values. 
// arrow function - doesnot have its own argumnet , suited for non-method functions, and they cannot be used as constructors. 
// ?json :text-based data format following JavaScript object syntax 

// Null	Undefined
// It is an assignment value which indicates that variable points to no object.	It is not an assignment value where a variable has been declared but has not yet been assigned a value.
// Type of null is object	Type of undefined is undefined
// The null value is a primitive value that represents the null, empty, or non-existent reference.	The undefined value is a primitive value used when a variable has not been assigned a value.
// Indicates the absence of a value for a variable	Indicates absence of variable itself
// Converted to zero (0) while performing primitive operations	Converted to NaN while performing primitive operations

// What is the difference between Shallow and Deep copy
// There are two ways to copy an object,
// Shallow Copy: Shallow copy is a bitwise copy of an object. A new object is created that has an exact copy of the values in 
// the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied
//  i.e., only the memory address is copied.

// Example

var empDetails = {
  name: "John",
  age: 25,
  expertise: "Software Developer",
};
// to create a duplicate

var empDetailsShallowCopy = empDetails; //Shallow copying!
// if we change some property value in the duplicate one like this:

empDetailsShallowCopy.name = "Johnson";
// The above statement will also change the name of empDetails, since we have a shallow copy. That means we're losing the original data
//  as well.
// Deep copy: A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. 
// A deep copy occurs when an object is copied along with the objects to which it refers.

// Example

var empDetails = {
  name: "John",
  age: 25,
  expertise: "Software Developer",
};
// Create a deep copy by using the properties from the original object into new variable

var empDetailsDeepCopy = {
  name: empDetails.name,
  age: empDetails.age,
  expertise: empDetails.expertise,
}