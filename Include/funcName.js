function funcName() {
    console.log( arguments.callee.name );
}

funcName();

