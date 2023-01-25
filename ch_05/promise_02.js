function promiseTimeout(ms) {
    return new Promise((resolve, relest) => {
        setTimeout(resolve, ms);
    });
}

console.log('Strart');
promiseTimeout(2000)
    .then(() => {
        console.log("Done!!");
        return promiseTimeout(1000);
    })
    .then(() => {
        console.log("Also done!!");
        return Promise.resolve(42);
    })
    .then((result) => {
        console.log(result);
    })
    .catch(() => {
        console.log("Error!");
    });
    console.log('End');