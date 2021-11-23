Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
}

Array.prototype.myMap = function(callback) {
    let mapped = new Array;
    let method = function(el) {
        mapped.push(callback(el));
    }
    this.myEach(method);
    return mapped;
}

Array.prototype.myReduce = function(callback, initialValue) {

    let acc = 0
    let starterValue = true 

    if (initialValue === undefined) {
        acc = this[0];
        starterValue = false;
    } else {
        acc = initialValue;
        starterValue = true;
    }
    
    let updateAcc = function(el) {
        if (!starterValue) {
            starterValue = true;
        } else {
            acc = callback(acc, el);
        }
    }

    this.myEach(updateAcc);
    return acc;
}