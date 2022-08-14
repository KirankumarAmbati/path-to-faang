async function run() {
    await sleep(500);
    console.log('hello');
    await sleep(500);
    console.log('world');
}

function sleep(time) {
    return new Promise(res => {
        setTimeout(res, time);
    });
}

run();