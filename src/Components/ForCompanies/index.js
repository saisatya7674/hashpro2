import React, { Component } from 'react'
import './index.css'
import { TiArrowRightThick } from "react-icons/ti";

class ForCompanies extends Component {
  render() {
    return (
      <>
      <div className='maindiv2'>
        
        <div className='innerdiv'>
          <h1 className='heading'>Hire Remote Developers <br/>without trial and error</h1>
          <p className='forcompanypara'>We bring you the best developers from diverse backgrounds
            <br /> who are reliable, talented, and versatile. We make sure to match you 
            <br />with the perfect fit for your long-term employment needs, without
            <br /> any language barriers or timezone issues.</p>
            <div>
              <button className='btn btn-dark secondbtn2'>
                Hire Developers
                <TiArrowRightThick />
              </button>
              <button className='btn btn-dark secondbtn'>
                Apply as a Developers
                <TiArrowRightThick/>
                </button>
            </div>
        </div>

        <div>
          <img className='pestoimg' src='https://i.postimg.cc/1XbX8Xfq/pesto-the-startup-that-has-found-a-way-to-boost-skills-incomes-of-techies.webp'/>
          
        </div>
      </div>
      
      <div className='logodiv'>
        
        <img className='companylogos' src='https://i.postimg.cc/y65QnKRp/Amazon-logo-svg.png'/>
        <img className='companylogos2' src='https://i.postimg.cc/5tYqXY7x/Zomato-Logo.png'/>
        <img className='companylogos2' src='https://i.postimg.cc/nVgxm6hp/433-4338596-swiggy-logo-png-image-free-download-searchpng-swiggy.png'/>
        <img className='companylogos2' src='https://i.postimg.cc/Qdwj3CFL/11596996178apaxd1pez2.png'/>
        <img className='companylogos2' src='https://i.postimg.cc/RZs2rDbN/Polygon-blockchain-logo.png'/>
        
      </div>
      
      <div className='div9'>
        <div className='div7'>
            <div>
              <img className='forcompantimg2' src='https://i.postimg.cc/Njb6Mh1k/638d6a87bea1f68013103d6e-Technical-Assesment.webp'/>
            </div>
            <div className='div8'>
              <h1 className='head4'>Build your team</h1>
              <p className='para4'>Hire pre-vetted, remote, full-time developers
                in half the time with time overlap, zero salary
                negotiations,or contracting issues.</p>
                <button className='btn btn-dark'>Start Hiring</button>
            </div>
        </div>
      </div>
      </>
    )
  }
}

export default ForCompanies