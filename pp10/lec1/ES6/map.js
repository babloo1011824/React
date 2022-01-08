let a=[1,2,3,4,5];
function double(x) 
{
    return 2*x;
    
}
let ansArray=a.map(double);
console.log("original map function");
console.log(a);
console.log(ansArray);


//replica using function of map

function myMap(arr,fun) {
    let ans=[];

    for(let i=0;i<arr.length;i++){
        ans.push(fun(arr[i]));
    }
    return ans;
    
}
console.log("created map by replica");
console.log(a);
console.log(myMap(a,double));