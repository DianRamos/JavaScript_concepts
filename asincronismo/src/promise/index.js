 /** the reserved word Promise return 1 funciton with 2 function inside
  * in this case RESOLVE and REJECT
   */
 const promise = new Promise(function (resolve, reject){
     resolve("All is ok")
 });

 const numbers = 15;
 const countNumbers = new Promise(function (resolve,reject) {
     if (numbers > 10) {
         resolve(`we have sufficient numbers, are ${numbers}` )
     } else {
         reject ("insufficient numbers")
     }
 });

 countNumbers.then((result)=>{
     console.log(result);
 }).catch((error) =>{
     console.log(error);
 }).finally(()=> console.log("finally"));


 /** the sentence THEN execute the result if the condition are success, CATCH execute
  * the message of error if this is generated, and FINALLY closed the run code when all conditions are completed in the promise
  */



 /** another example for promises */

 /** create a function of delay that support asynchronism */
 export function delay(time, message) {

    return new Promise(function (resolve, reject) {
      if (message && time) {
        window.setTimeout(() => {
          resolve(message)
        }, time)
      } else {
        reject("not time")
      }
    })
  
  }