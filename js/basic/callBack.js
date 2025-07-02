

hello(hi());

function hello(callback){
    console.log("hello");
    callback();
}

function hi(){
    console.log("hi");
}