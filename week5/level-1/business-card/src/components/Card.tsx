import { FormData } from "./CardRender";

export function Card(props: FormData) {
    return (
        <div style={{
            backgroundColor: '#f0f0f0',
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            maxWidth: '300px',
            minWidth: '200px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)'
        }}>
            <div>
                <h2 style={{
                    marginTop: 0,
                    marginBottom: '5px',
                    fontSize: '20px',
                    color: '#333',
                }}>{props.name}</h2>
                <h3 style={{
                    marginTop: '5px',
                    marginBottom: '10px',
                    fontSize: '16px',
                    color: '#666',
                }}>{props.description}</h3>
            </div>
            {props.interests.length !== 0 && (
                <div>
                    <h2 style={{
                        marginTop: '10px',
                        marginBottom: '5px',
                        fontSize: '18px',
                        color: '#333',
                    }}>Interests</h2>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '5px',
                        marginTop: '0',
                    }}>
                        {props.interests.map((item, index) => (
                            <div key={index} style={{
                                backgroundColor: '#e5e5e5',
                                padding: '5px 10px',
                                borderRadius: '4px',
                                fontSize: '14px',
                                color: '#666',
                            }}>{item}</div>
                        ))}
                    </div>
                </div>
            )}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '5px',
                marginTop: '20px',
                marginBottom: '10px',
            }}>
                {props.socials.map((item, index) => (
                    <button key={index} style={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '8px 16px',
                        fontSize: '14px',
                        cursor: 'pointer',
                    }}>{item}</button>
                ))}
            </div>
        </div>
    )
}