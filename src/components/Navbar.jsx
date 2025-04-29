function Navbar() {
  return (
    <nav className="navbar">
        <div className="leftSide">
            <img src="./bolt.svg" alt="logo" className="logo" />
            <h1>FSA</h1>
        </div>
        <div className="rightSide">
            <h2 className="nowrap">Log In</h2>
            <button className="btn">Get Started</button>
        </div>
    </nav>
  );
}

export default Navbar;