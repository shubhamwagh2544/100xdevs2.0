export function GET() {
    // db logic
    return Response.json({
        message: 'data fetched successfully',
        name: 'shubham wagh',
        email: 'shubhamwagh@gmail.com'
    })
}

export function POST() {
    return Response.json({
        message: 'data posted successfully',
        name: 'shubham wagh',
        email: 'shubhamwagh@gmail.com'
    })
}