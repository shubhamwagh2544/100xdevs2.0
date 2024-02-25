"use strict";
// Exclude<Type, ExcludedUnion> : Constructs a type by excluding from Type all union members that are assignable to ExcludedUnion.
function checkEvent(event) {
    console.log(`event is: ` + event);
}
checkEvent('click');
checkEvent('scroll');
// checkEvent('mousemove')      // Error: Argument of type '"mousemove"' is not assignable to parameter of type 'ExcludeEvent'.
