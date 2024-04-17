import './Card.css';

const Card = () => {
  return (
    <div className="card">
        <div className="card-header">
            <h1>$0/month</h1>
        </div>      
        <div className="card-body">
            <p>Single User</p>
            <p>50 GB Storage</p>
            <p>Unlimited Public Projects</p>
            <button className="button">BUTTON</button>
        </div>
    </div>
  )
}

export default Card;