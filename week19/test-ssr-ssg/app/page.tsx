import revalidate from "./lib/actions/action1"

export default async function Home() {
  const res = await fetch("https://sum-server.100xdevs.com/todos", {
    next: {
      //revalidate: 10                          // revalidate the cache every 10 sec
      tags: ['todos']
    }
  })
  const data = await res.json()

  console.log('data found on server is: ')
  console.log(JSON.stringify(data))           // generated as static content

  revalidate();

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
