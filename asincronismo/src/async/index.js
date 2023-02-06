const fnAsync = () => {
    return new Promise ((resolve,reject)=> {
        (true)
        ? setTimeout(()=> resolve('Async'),2000)
        : reject(new Error('Error'));
    });
}

const fn2 = async() =>{
    const some = await fnAsync();
    console.log(some);
    console.log('Hi');
}

console.log("before");
fn2();
console.log("after");