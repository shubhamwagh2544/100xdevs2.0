// Exclude<Type, ExcludedUnion> : Constructs a type by excluding from Type all union members that are assignable to ExcludedUnion.

type EventType = 'click' | 'scroll' | 'mousemove'
type ExcludeEvent = Exclude<EventType, 'mousemove'>

function checkEvent(event: ExcludeEvent) {
    console.log(`event is: ` + event)
}

checkEvent('click')
checkEvent('scroll')
// checkEvent('mousemove')      // Error: Argument of type '"mousemove"' is not assignable to parameter of type 'ExcludeEvent'.