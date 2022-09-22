const argvs = process.argv.slice(2);
const numbers = argvs.slice(1).map(number =>{
    
    if(isNaN(number)){
        console.log(`Sorry, the ${number}  is not a number, please try again`);
        process.exit(1);
    }

    return parseInt(number)
        
    
} )
const [operation, ...rest] = argvs;
// const numbers2 =rest.map()
console.log(numbers);




const sum = (numbers) => numbers.reduce((acc, b) => acc + b)

const avg = (numbers) => sum(numbers)/numbers.length;
    
const error = "I cannot calculate that, please type either sum (to calculate the sum) or avg (To calculate the Average)"

const error2 = `Sorry, the argument  is not a number, please try again`

// switch (operation) {
//     case "sum":
//         sum(numbers);
//         console.log(sum(numbers));
//         break;
//     case "avg":
//         avg(numbers);
//         console.log(avg(numbers));
//         break;
//     case "*" :
//         console.log(error);;
//         break;
//     case "":
//         console.log(error2);
//     break;
//         default :
//         break;
// }

if (operation === "sum") {
    console.log(sum(numbers));
}else if(operation==="avg") {
    console.log(avg(numbers));
}else if(operation!=="sum" || operation!=="avg") {
    console.log(error);
}else if(rest){
    console.log(error2);
}


// console.log(sum([1,2,3,4]));
// console.log(avg([1,2,3,4,5]));
