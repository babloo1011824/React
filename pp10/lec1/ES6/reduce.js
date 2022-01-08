let a=[1,2,3];
function sum(c,d){
    return c+d;

}
let singleAns=a.reduce(sum);
console.log("original");
console.log(singleAns);
//replica

function myRedux(arr,fun){
    let ans=arr[0];
    for(let i=1;i<arr.length;i++){
        ans=fun(ans,arr[i]);
        
    }
    return ans;
}
console.log("replica");
console.log(myRedux(a,sum));