// not so good way
function App1() {
    return (
        <>
            <CardWrapper innerComponent={<TextComponent />} />
            <CardWrapper innerComponent={<TextComponent />} />
            <CardWrapper innerComponent={<TextComponent />} />
        </>
    )
}

function TextComponent() {
    return <div>
        hey there
    </div>
}

function CardWrapper({ innerComponent }) {
    // create a div with border
    // inside render props
    return (
        <div style={{
            border: "2px solid red",
            padding: 20,
            margin: 20
        }}>
            {innerComponent}
        </div>
    )
}

export default App1;
