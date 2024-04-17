import './Card.css';

const Card = (props) => {

  return (
    <div className="card">
        <div className="card-header">
        <h1>${ props.data.price }/month</h1>
        </div>      
        <div className="card-body">
            <p>{ props.data.users }</p>
            <p>50 GB Storage</p>
            <p>Unlimited Public Projects</p>
            <button className="button">BUTTON</button>
        </div>
    </div>
  )
}

export default Card;