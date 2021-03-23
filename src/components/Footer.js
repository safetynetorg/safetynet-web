import React from 'react'
import frame7 from '../assets/frame7.svg'
import './styles/footer.scss'

export default function Footer() {
    return (
        <div className='footer-items'>
            <ul className='footer-content'>
                <li>
                    <img className="frame7" src={frame7} alt="Frame7" />
                </li>
                <li>
                    <p className='footer-dash'>-</p>
                </li>
                <li className='footer-button' onClick={()=> window.location.href="https://www.instagram.com/safetynet.app/"}>
                    <i className="fab fa-instagram"/>
                </li>
                <li className='footer-button' onClick={()=> window.location.href="https://www.instagram.com/safetynet.app/"}>
                    <i className="fab fa-twitter"/>
                </li>
                <li className='footer-button' onClick={()=> window.location.href="https://www.instagram.com/safetynet.app/"}>
                    <i className="fab fa-facebook"/>
                </li>
            </ul>
        </div>
    )
}
