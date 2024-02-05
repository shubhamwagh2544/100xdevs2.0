function Responsive1() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-red-500">block1</div>
            <div className="bg-blue-500">block2</div>
            <div className="bg-green-500">block3</div>
            <div className="bg-yellow-500">block3</div>
        </div>
    )
}

function Responsive() {
    return (
        <div className="bg-slate-500 md:bg-orange-500 lg:bg-gray-800">block</div>  //mobile first approach [screen > :prefix render mentioned logic]
    )
}

function Grid() {
    return (
        <div className="grid grid-cols-10">
            <div className="bg-red-500 col-span-4">block1</div>
            <div className="bg-blue-500 col-span-4">block2</div>
            <div className="bg-green-500 col-span-2">block3</div>
        </div>
    )
}

function Flex() {
    return (
        <div className="flex justify-between">
            <div className="bg-red-500">block1</div>
            <div className="bg-blue-500">block2</div>
            <div className="bg-green-500">block3</div>
        </div>
    )
}

export {
    Responsive1,
    Responsive,
    Grid,
    Flex
}