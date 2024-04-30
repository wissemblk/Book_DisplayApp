export default function Navbar() {

  /*for the navbar*/
  
    return (
      <nav className="Nav">
        <a href="/" className="Nav-Title">
          <img src="../Img/logo.png" alt="logo image" className="Nav-img" />
        </a>
        <ul>
          
  
          <li className="abril-fatface-regular">
            <a href="/">HOME</a>
          </li>
         
          <li className="abril-fatface-regular">
            <a href="/">ABOUT</a>
          </li>
          <li >
            <a href="/" className="logIn">
              <img src="../Img/user.png" alt="user image" width={30} height={30}></img>
              Login
            </a>
          </li>
          <li className="font">
            <div className="SU">
              <a href="/" className="signUp">
                Sign Up for free
              </a>
            </div>
          </li>
        </ul>
      </nav>
    );
  }