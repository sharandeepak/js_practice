function fun1(ms) {
    return new Promise((resolve, reject)=>{
        setTimeout(function () {
            resolve(10);
        }, ms);
    })
}

async function myAsyncFunction() {
    let nothing = await fun1(6000);
    console.log("Hey hey");
    console.log(nothing);
}

function myAsyncFunction2() {
    fun1(5000).then(()=>console.log("After 5 second completion"));
}

myAsyncFunction2();
myAsyncFunction();
console.log("After the function calls !!");