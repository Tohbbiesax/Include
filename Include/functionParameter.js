function language() {
    return 'JavaScript';
}

// passing function language() as a parameter
function name(user, func)
{

    // accessing passed function
    const message = func();

    console.log(`${user} loves ${message}`);
}

name('Samuel', language);
name('Stephen', language);
name('Sanusi', language);