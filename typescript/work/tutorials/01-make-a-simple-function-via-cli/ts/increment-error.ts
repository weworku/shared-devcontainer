function increment(num :number) {
    return num + 1;
}
console.log(increment("999"));
// tsc increment.ts 
// node increment.js # error

// ts/increment-error.ts:4:23 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.