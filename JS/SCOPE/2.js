function foo() {
    if (1) {
      var x = 1; 
      let y = '块级作用域'; 
    }
  
    console.log(x); 
  }
  
  foo(); 
  