const Header = ()=>{
  return (
   <div id="header">
    <div className="header-items">
        <div className="logo"><strong>Reeco</strong></div>
        <div className="nav-bar">    
            <ul>
                <li>Store</li>
                <li>Orders</li>
                <li>Analystics</li>
            </ul>
        </div>
        <div className="cart-login">
            <div className="cart-icon"></div>
            <div className="user-name">Hello, James</div>
        </div>
    </div>
   </div>

  )
}

export default Header;