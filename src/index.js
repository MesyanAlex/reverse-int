module.exports = function reverse (n) {
    if (n < 0) {
        let negative = n * -1;
        return negative.toString().split('').reverse().join('');
    }    
    else {
        return n.toString().split('').reverse().join('');
    }
}
