import Card from './components/Card';

const App = () => {

  const data = [
    {
      price: 0,
      users: 'Single User'
    },
    {
      price: 9,
      users: '5 Users',
    },
    {
      price: 49,
      users: 'Unlimited Users'
    }
  ]

  const styles = {
    display: 'flex',
    gap: '20px',
  }

  return (
    <div style={styles}>
      <Card data={ data[0] } />
      <Card data={ data[1] } />
      <Card data={ data[2] } />
    </div>
  )
}

export default App;