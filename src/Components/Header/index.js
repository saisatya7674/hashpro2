import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { TiArrowRightThick } from "react-icons/ti";
import './index.css'

class Header extends Component {
  render() {
    return (
        <nav className="nav-header">
        <div className="blog-container">
        <ul className="nav-menu">
          
        <li className='pesto'><Link to='/'>Pesto</Link></li>
        <li className='options'><Link to="/companies">For Companies</Link></li>
        <li className='options'><Link to="/developers">For Developers</Link></li>
        <li className='options'><Link to="/resources">Resources</Link></li>
        <li>
            <Link to='/become-a-developer'>
                <div className='becomedeveloper'>Become a Developer
                <div className='icon'>
                <TiArrowRightThick />
                </div>
                </div>
            </Link>
        </li>
          </ul>
    
        </div>
      </nav>
    )
  }
}

export default Header