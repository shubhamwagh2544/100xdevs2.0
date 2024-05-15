export default async function Home() {
  const res = await fetch("https://sum-server.100xdevs.com/todos", {
    next: {
      revalidate: 10                          //
    }
  })
  const data = await res.json()

  console.log('data found on server is: ')
  console.log(JSON.stringify(data))           // generated as static content

  return (
    <div>
      {data.todos.map((todo: any) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
          <p>{todo.description}</p>
        </div>
      ))}
    </div>
  );
}
