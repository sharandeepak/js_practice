let myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=> {
        console.log("Resolved");
    }, 3000);
});

myPromise.then(()=>console.log("Promise after then"));