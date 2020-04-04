// Lodash
//1
// function chunck(arr: number[], size: number): number[] {
//     let resChunk: Array<any> = []
//     for(let i = 0 ;i <arr.length ; i+= size) {
//         resChunk.push(arr.slice(i, i + size))
//     }
//     return resChunk
// }
// console.log(chunck([1,2,3,4,5], 3))
//2
// const compact: any = (arr: Array<any>): Array<number> => {
//     let resCompact: Array<any> = []
//     resCompact = arr.filter( number => typeof number == 'number' && number > 0 )
//     return resCompact    
// }
// console.log(compact([0, 1, false, 2, '', 3]))
//3
// function concat(arr: Array<any>): void {
//     const concatArray: Array<any> = []
//     const anyArray: Array<any> = []
//     for(let i=0;i<arr.length;i++) {
//         if(typeof arr[i] == 'object'){
//             anyArray.push(arr[i])
//         } else if (typeof arr[i] == 'number'){
//             concatArray.push(arr[i])
//         }
//     }
//     for(let i=0;i<anyArray.length;i++){
//         for(let j=0;j<anyArray[i].length;j++){
//             concatArray.push(anyArray[i][j])
//         }
//     }
//     console.log(concatArray.sort())
// }
// concat([[1],2,[3],[[4]]])
//4
// function countBy(array: Array<any>, operation: any) : void {
//     let arrFloor: Array<number> = []
//     for(let i=0;i<array.length; i++) {
//         arrFloor.push(operation(array[i]))
//     }
//     let countByObject: object = {}
//     let count: number = 0
//     let countNumber: number = 0
//     for(let i of arrFloor) {
//         for(let j of arrFloor) {
//             if (i == j) {
//                 count = count + 1
//                 countNumber = i
//             }
//             if(count !=0 && countNumber!=0) {
//                 countByObject[countNumber] = count
//             }
//         }
//         count = 0
//         countNumber = 0
//     }
//     console.log(countByObject)
// }
// const array: Array<any> = [6.1, 4.2, 6.3]
// const operation: object = Math.floor
// countBy(array, operation)
var CountBy = /** @class */ (function () {
    function CountBy(arr, operation) {
        this.array = arr;
        this.oper = operation;
    }
    CountBy.prototype.getCountNumberByArray = function () {
        var arrFloor = [];
        for (var i = 0; i < this.array.length; i++) {
            arrFloor.push(this.oper(this.array[i]));
        }
        var countByObject = {};
        var count = 0;
        var countNumber = 0;
        for (var _i = 0, arrFloor_1 = arrFloor; _i < arrFloor_1.length; _i++) {
            var i = arrFloor_1[_i];
            for (var _a = 0, arrFloor_2 = arrFloor; _a < arrFloor_2.length; _a++) {
                var j = arrFloor_2[_a];
                if (i == j) {
                    count = count + 1;
                    countNumber = i;
                }
                if (count != 0 && countNumber != 0) {
                    countByObject[countNumber] = count;
                }
            }
            count = 0;
            countNumber = 0;
        }
        return countByObject;
    };
    return CountBy;
}());
console.log(new CountBy([6.1, 4.2, 6.3], Math.floor).getCountNumberByArray());
