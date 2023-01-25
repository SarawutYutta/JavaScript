function circmference(r){
    if (Num.isNaN(Number.parseFloat(r))) {
        return 0;
    }
    return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circmference("4.567abcdefgh"));

console.log(circmference("abcdefgh"));
