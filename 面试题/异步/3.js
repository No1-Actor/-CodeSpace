function a(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(1);
            resolve('ok')
        },1000)    
    })
}

function b(){
    setTimeout(() => {
        console.log(2);
    },500)
}

a().then(b)