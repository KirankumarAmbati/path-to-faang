const fetchWithTimeout = (url, time) => {
    return new Promise((resolve, reject) => {
        const abortController = new AbortController();
        const signal = abortController.signal;
    
        let timerId;
    
        fetch(url, { signal }).then(resp => {
            resp.json().then(e => {
                clearTimeout(timerId);
                resolve(e);
            }).catch(err => {
                reject(err);
            });
        }).catch(err => {
            reject(err);
        });
    
        timerId = setTimeout(() => {
            abortController.abort();
        }, time);
    });
};

fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 100).then(resp => {
    console.log({ resp });
}).catch(error => {
    console.log({ error });
});