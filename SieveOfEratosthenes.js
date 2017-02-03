function print(s){
    if(process.stdout.write)
        process.stdout.write(s);
    else
        console.log(s);
}


function sieveOfEratosthenes(n){

    var prime = new Array(n+1).fill(true);

    for(let p = 2; p*p <= n; p++){
            // If prime[p] is not changed, then it is a prime
            if(prime[p] === true){

                // Update all multiples of p
                for(let i = p*2; i <= n; i += p)
                    prime[i] = false;
            }
    }

    for(let i = 2; i <= n; i++){
            if(prime[i] === true)
                print(i+" ");
    }

}
console.time('sieveOfEratosthenes');
sieveOfEratosthenes(30);
console.timeEnd('sieveOfEratosthenes');