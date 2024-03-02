function a(){
    setTimeout(() => {
        console.log(a);
    }, 1000)
}

function b(){
    setTimeout(() => {
        console.log(b);
    }, 1000)
}

function* g(){
    yield a()
    yield b()
}

function run(fn){
    let gen = fn()
    function next(){
        let result = gen.next()
        if(result.done) return
        result.value.then(() => {
            next()
        })
    }
}

let gen = g()
gen.next()