import {Link} from "react-router-dom"
function Header(){
    return(
        <div className="header-con">
        <h1>SparkNews</h1>
            <ul className="header-nav">
                 
           <Link to="/everything"> <li>Everything</li></Link>
           <Link to="/topheadlines"> <li>TopHeadLines</li></Link>
           <Link to="/source"> <li>Sources</li></Link>
           <Link to="/contact"> <li>Contact us</li></Link>

        
           </ul>
        </div>

    )
}
export default Header;