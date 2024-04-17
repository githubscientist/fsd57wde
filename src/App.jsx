import Card from './components/Card';

const App = () => {

  const styles = {
    display: 'flex',
    gap: '20px',
  }

  return (
    <div style={styles}>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default App;