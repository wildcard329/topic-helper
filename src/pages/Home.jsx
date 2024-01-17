import { LoginButton } from "../components/button"

const Home = () => 
  // temporary link
  <a href="/topics">
  <div className="page-wrapper" id="home-wrapper">
    <h1 className="title-wrapper">Welcome to Topic Helper!</h1>
    <div className="login-wrapper">
      <h3 className="title-wrapper">Please log in to continue.</h3>
      <ul className="login-options-list">
        <li><LoginButton loginEntity={"google"} /></li>
        <li><LoginButton loginEntity={"facebook"} /></li>
        <li><LoginButton loginEntity={"amazon"} /></li>
        <li><LoginButton loginEntity={"apple"} /></li>
      </ul>
    </div>
  </div>
  {/* temporory link */}
  </a>

export default Home
