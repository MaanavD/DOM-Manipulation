var a = 1;
let b = 2;
const c = 3;

function functionScope(a){
    var a = 4;
    let b = 5; 
    const c = 6;
    console.log("Function Scope: " , a, b, c);
}

for(var a = 0;a<10;a++){
    console.log(`Loop: ${a}`)
}

if(true){
    //Block Scope
    var a = 4; //Notice var was reassinged in an if statement, so it is reassigned
    let b = 5; 
    const c = 6;
    console.log("If Scope: " , a, b, c);
}



functionScope();

console.log("Global Scope: " , a, b, c);