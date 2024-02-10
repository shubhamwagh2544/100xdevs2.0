import { Card } from "./components/Card"

function App() {

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      gap: 25
    }}>
      <Card
        name='shubham wagh'
        description='software engineer'
        interests={['coding', 'writing']}
        socials={['linkedin', 'instagram']}
      />
      <Card
        name='shubham ramesh wagh'
        description='software engineer'
        interests={['coding', 'writing']}
        socials={['linkedin', 'instagram']}
      />
      <Card
        name='shubham wagh'
        description='software engineer at microsoft india'
        interests={['coding', 'writing']}
        socials={['linkedin', 'instagram']}
      />
      <Card
        name='shubham wagh'
        description='software engineer'
        interests={['coding', 'writing', 'coding', 'writing', 'coding', 'writing', 'coding', 'writing']}
        socials={['linkedin', 'instagram']}
      />
      <Card
        name='shubham wagh'
        description='software engineer'
        interests={['coding', 'writing', 'coding', 'writing', 'coding', 'writing', 'coding', 'writing']}
        socials={['linkedin', 'instagram', 'linkedin', 'instagram', 'linkedin', 'instagram']}
      />
    </div>
  )
}

export default App
