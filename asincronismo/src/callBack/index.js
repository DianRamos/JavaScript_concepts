/** callbacks in action */

function add(num1,num2) {
    return num1+num2;
}

function calc(num1,num2,callback) {
    return callback(num1,num2);
};

console.log(calc(2,2,add));


/** anonymous function another example for callbacks */

setTimeout(function (){
console.log("Hi javaScript");
},5000)

/** normal function */

function greeting(name) {
    console.log(`Hi ${name}`);
}

/** call the function greeting, recived the time param  for run
 * the function setTimeOut and execute the greeting with the other param
 */
setTimeout(greeting,2000,'Diana');

/** execute the function after 2 seconds  */
export function execCallback(callback) {
    window.setTimeout(() => {
      callback();
    }, 2000);
  }