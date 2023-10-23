var obj = {
    a : 1,
    b : 2,
    c : 3
}

// obj.a = 2
// obj.b = 3
// obj.c = 4

with(obj){
    a = 2,
    b = 3,
    c = 4
}

function foo(obj) {
    with(obj){
        a = 2
    }
}

var o1 = {
    a : 3
}

foo(o1)

var o2 = {
    b : 3
}

foo(o2)

console.log(a);