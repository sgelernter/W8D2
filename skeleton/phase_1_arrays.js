Array.prototype.uniq = function() {
    let newArr = [];
    this.forEach(
        function(el) {
            if (!newArr.includes(el)) {
                newArr.push(el);
            }
        }
    );
    return newArr;
}

Array.prototype.twoSum = function() {

    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            if (j > i && this[i] + this[j] === 0) {
                newArr.push([i, j]);    
            }
        }  
    }  
    return newArr;
}

Array.prototype.transpose = function() {

   let emptyMatrix = Array.from(this[0], function() { return new Array;});

   for (let i = 0; i < this.length; i++) {
       for (let j = 0; j < emptyMatrix.length; j++) {
           emptyMatrix[j][i] = this[i][j];
       }
   }
   return emptyMatrix;
}