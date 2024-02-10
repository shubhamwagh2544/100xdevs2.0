interface Data {
    name: string,
    description: string,
    interests: string[],
    socials: string[]
}

export function Card(props: Data) {
    return (
        <div style={{
            backgroundColor: 'gray',
            border: '1px solid black',
            padding: '20px',
            maxWidth: '300px',
            minWidth: '200px'
        }}>
            <div>
                <h2 style={{
                    margin: 0
                }}>{props.name}</h2>
                <h3 style={{
                    marginTop: 5,
                    fontWeight: 'lighter'
                }}>{props.description}</h3>
            </div>
            <h2 style={{
                marginTop: 5,
                marginBottom: 0
            }}>interests</h2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 5,
                marginTop: 0
            }}>
                {props.interests.map((item, index) => (
                    <h4 style={{ marginTop: 5, marginBottom: 0, fontWeight: 'lighter' }} key={index}>{item}</h4>
                ))}
            </div>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 5,
                marginTop: 20,
                marginBottom: 10
            }}>
                {
                    props.socials.map((item, index) => (
                        <button style={{ backgroundColor: 'burlywood' }}
                            key={index}>{item}</button>
                    ))
                }
            </div>
        </div>
    )
}