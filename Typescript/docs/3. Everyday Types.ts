
/**
 * Object type
 */

function printName(name: { firstName: string,  lastName?: string}) {
  console.log(name.lastName?.toUpperCase());
}

printName({ firstName: 'Zhang', lastName: 'YM' });
printName({ firstName: 'Zhang' });
