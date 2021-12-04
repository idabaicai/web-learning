// Type 'unknown' is not assignable to type 'number'
// const aNumber:number = maybe;
if (maybe === true) {
    //  TS knowns that maybe is a boolean now
    var aBoolean = maybe;
    // Type 'boolean' is not assignable to type 'string'.
    // const aString: string = maybe;
}
if (typeof maybe === 'string') {
    // TS knowns that maybe is a 'string' now
    var aString = maybe;
    // Type 'string' is not assignable to type 'boolean'
    // const aBoolean: boolean = maybe;
}
