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
