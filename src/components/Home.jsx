import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/about");
    }

  return (
      <div>
        <p>Welcome to the Home page! You can find more information about us on the About page by clicking the below button.</p>
          
        <button onClick={handleClick}>Know More</button>
    </div>
  )
}

export default Home;