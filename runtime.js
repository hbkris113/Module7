const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

// Define the arrays to test
const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();

// Define the timing function
function timeFunction(func, arr) {
    perf.start();
    func(arr);
    let results = perf.stop();
    return results.preciseWords;
}


const arrays = [tinyArray, smallArray, mediumArray, largeArray, extraLargeArray];


const functionsToTest = [doublerAppend, doublerInsert];


for (let func of functionsToTest) {
    console.log(`Timing results for ${func.name}:`);

   
    for (let arr of arrays) {
        // Time the function with this array and print the result
        let time = timeFunction(func, arr);
        console.log(`Array size: ${arr.length}, Time: ${time}`);
    }

    console.log('\n');
}


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);
