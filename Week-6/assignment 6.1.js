const kadane = (alpha) => {
    if(!Array.isArray(alpha)) {
        throw "Invalid";
    }
    let n = alpha.length;
    let g = alpha[0];
    let c = alpha[0];
    for(let i =1; i<n; i++){
        c=Math.max(alpha[i], c+alpha[i]);
        if(c>g) {
            g=c;
        }
    }
    return g;
};
try {
    let x= kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    console.log(x);
}
catch (e) {
    console.log(e);
}
// output is 6
// time complexity O(n)
// space complexity O(1)