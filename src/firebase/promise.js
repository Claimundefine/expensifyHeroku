const promise = new Promise((resolve, reject) => {
    resolve("this is resolved");
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});