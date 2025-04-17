function mergeSortRec(arr) {
    // Base Case return the elemen
    if (arr.length <= 1) {
        return arr;
    } else {
        let leftSide = arr.slice(0, arr.length / 2);
        let rightSide = arr.slice(arr.length / 2, arr.length);
        function fusion(a, b) {
            let mergedArr = [];
            let indexTotalMerged = a.length + b.length;    
            for (let index = 0; index < indexTotalMerged; index++) {
                if (a.length == 0 && b.length != 0) {
                    mergedArr.push(b[0]);
                    b.shift();
                } else if (b.length == 0 && a.length != 0) {
                    mergedArr.push(a[0]);
                    a.shift();
                } else {
                    let leftElem = a[0];
                    let rightElem = b[0];
                    if (leftElem < rightElem) {
                        mergedArr.push(leftElem);
                        a.shift();
                    } else {
                        mergedArr.push(rightElem);
                        b.shift();
                    }
                }
            }
            return mergedArr
        }
        let mergedArr = fusion(mergeSortRec(leftSide), mergeSortRec(rightSide));
        return mergedArr;
    }
}

let a = [];

console.log(mergeSortRec([0,555,1,32,24,55,-32,-2,9999,3214213, -232, 5464556]), a[0]);