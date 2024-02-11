import { useState } from "react";
import { Card } from "./Card";

export interface FormData {
    name: string;
    description: string;
    interests: string[];
    socials: string[];
}

export function CardRender() {

    const [formData, setFormData] = useState<FormData>({
        name: "",
        description: "",
        interests: [],
        socials: []
    });

    const [formDataArray, setFormDataArray] = useState<FormData[]>([]);


    const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: FormData = {
            name: formData.get("name") as string,
            description: formData.get("description") as string,
            interests: (formData.get("interests") as string).split(" ").filter(val => val.trim() !== ""),
            socials: (formData.get("socials") as string).split(" ").filter(val => val.trim() !== "")
        };
        setFormDataArray([...formDataArray, data]);

        // make form empty
        e.currentTarget.reset()
    };


    return (
        <div>
            <form onSubmit={handleInput} style={styles.form}>
                <div style={styles.inputContainer}>
                    <label style={styles.label}>Name: </label>
                    <input
                        style={styles.input}
                        name="name"
                        type="text"
                        placeholder="your name"
                        required
                    />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label}>Description: </label>
                    <input
                        style={styles.input}
                        name="description"
                        type="text"
                        placeholder="about you"
                        required
                    />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label}>Interests: </label>
                    <input
                        style={styles.input}
                        name="interests"
                        type="text"
                        placeholder="what interests you"
                        required
                    />
                </div>
                <div style={styles.inputContainer}>
                    <label style={styles.label}>Socials: </label>
                    <input
                        style={styles.input}
                        name="socials"
                        type="text"
                        placeholder="your social communities"
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Submit</button>
            </form>

            <div style={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexWrap: 'wrap',
                gap: 20
            }}>
                {
                    formDataArray.map((formData, index) => (
                        <Card
                            key={index}
                            name={formData.name}
                            description={formData.description}
                            interests={formData.interests}
                            socials={formData.socials}
                        />
                    ))
                }
            </div>
        </div>
    )
}


const styles = {
    form: {
        display: 'grid',
        width: '300px',
        margin: 'auto'
    },
    inputContainer: {
        marginBottom: '15px',
    },
    label: {
        marginBottom: '5px',
        fontSize: '16px'
    },
    input: {
        width: '100%',
        padding: '8px',
        fontSize: '16px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    button: {
        width: '100%',
        padding: '15px',
        fontSize: '16px',
        borderRadius: '4px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        marginTop: '10px',
        marginLeft: '10px'
    },
};