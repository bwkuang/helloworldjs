function repeatHelloWorld() {

    setInterval(sayHelloWorld, 1000); 
}

function sayHelloWorld(){
    console.log("Hello World");
}

module.exports.repeatHelloWorld = repeatHelloWorld;
module.exports.sayHelloWorld = sayHelloWorld;
