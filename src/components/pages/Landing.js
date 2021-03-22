import React from 'react'
import frame1 from '../../assets/frame1.svg'
import frame2 from '../../assets/frame2.svg'
import '../styles/Landing.scss'

export default function Landing() {
    const [email, setEmail] = React.useState('')
    return (
        <div>
            <img className="frame1" src={frame1} alt="Frame1" />
            <div className='topText'>
                <h1 className='textH1'>Help make the world a safer place with Safety Net</h1>
                <input
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={e=> setEmail(e.target.value)}
                required
                />
                <button className='signUp'>Sign up</button>
            </div>
            <br/>
            <div style={{textAlign: 'center', marginTop: '50px'}}>
                <h1 className='textH1'>How it works</h1>
                <hr/>
                <p className='textP'>
                    If you ever come into a situation where you need immediate help from people around you but you can't reach them by yelling?
                    Safety Net is an app that alerts everyone in a 200m radius around you. It will show them your exact location and a description
                    of you so you can get the immediate help you need. <span style={{color:'red'}}>(This isn't a replacement for 911)</span>
                </p>
                <img className="frame2" src={frame2} alt="Frame2" />
            </div>
        </div>
    )
}
