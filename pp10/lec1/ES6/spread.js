// let a=[1,2,3];
// let b=[4,6];
// let c=[...a,...b];
// let d=[...a];
// let e=[...a,...a,...a];
// console.log(e);



let a=[1,2,4,5];
let b=[...a];
console.log(b);

let o1={
    a:1,b:2
}
let o2={
    c:3
}
let o3={
    ...o1,...o2,...o1,...o2
}
console.log(o3);