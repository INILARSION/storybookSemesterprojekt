let stop = false;

self.addEventListener('message', function(e) {
    if (e.data) {
        stop = e.data;
    } else {
        writePrimes();
    }
}, false);

let lastPrime = 0;

function nextPrime(value) {
    if (value > 2) {
        let i, q;
        do {
            i = 3;
            value += 2;
            q = Math.floor(Math.sqrt(value));
            while (i <= q && value % i) {
                i += 2;
            }
        } while (i <= q);
        return value;
    }
    return value === 2 ? 3 : 2;
}

function writePrimes(){
    lastPrime = nextPrime(lastPrime);
    self.postMessage(lastPrime);
    if (!stop){
        setTimeout(writePrimes, 0);
    }
}
