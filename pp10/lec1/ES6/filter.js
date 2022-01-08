let a=[1,2,3,4,5,6];
function isEven (x){

    return x%2==0;
}

let filteredArray=a.filter(isEven);
let mapArray=a.map(isEven);
console.log("original function of filter");
console.log(a);
console.log(filteredArray);//isse only true ka value  print hoga like 2,4,6
console.log(mapArray);//true false print hoga



//replica
function myFilter(arr,fun) {
    let ans=[];
    for(let i=0;i<arr.length;i++){
        if(fun(arr[i])){
            ans.push(arr[i]);

        }
       
        
    }
    return ans; 
    
}
console.log("created filtered function");
console.log(a);
console.log(myFilter(a,isEven));
