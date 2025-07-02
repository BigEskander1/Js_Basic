let fruits = ["apple", "orange", "grape", "banana"];

function doSplice(array, index, num ) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        if (i >= index && i < index + num) {
            continue;
        }
        res.push(array[i]);
    }

    array.length = 0;         // مسح كل العناصر
    Array.prototype.push.apply(array, res); // نقل العناصر الجديدة للمصفوفة الأصلية
}

doSplice(fruits, 1, 2);
console.log(...fruits); // apple banana
