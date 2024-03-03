import Button from "./Button";

export default function Signin() {
    return (
        <div>
            Sign In
            <Button />
        </div>
    )
}

/*
Error: Event handlers cannot be passed to Client Component props.
  <button onClick={function} children=...>
*/