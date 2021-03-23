import React from 'react'
import frame1 from '../../assets/frame1.svg'
import frame2 from '../../assets/frame2.svg'
import frame4 from '../../assets/frame4.svg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles/landing.scss'

export default function Landing() {
    const [email, setEmail] = React.useState('')
    return (
        <Container>
            <img className="frame4-move" src={frame4} alt="Frame4" />
            <img className="frame4-move2" src={frame4} alt="Frame4" />
            <img className="frame4-move3" src={frame4} alt="Frame4" />
            <Row>
                <Col md={6}>
                    <div className='top-text'>
                        <h1 className='text-h1'>Help make the world a safer place with Safety Net</h1>
                        <input
                        name="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                        required
                        />
                        <button className='sign-up'>Sign up</button>
                    </div>
                </Col>
                <Col md={2}>
                </Col>
                <Col md={4}>
                    <img className="frame1" src={frame1} alt="Frame1" />
                </Col>
            </Row>
            <Row>
                <br/>
                <div className='how-it-works'>
                    <h1 className='text-h1'>How it works</h1>
                    <hr/>
                </div>
                <Col md={6}>
                    <img className="frame2" src={frame2} alt="Frame2" />
                </Col>
                <Col md={6}>
                    <p className='text-p'>
                        If you ever come into a situation where you need immediate help from people around you but you can't reach them by yelling?
                        Safety Net is an app that alerts everyone in a 200m radius around you. It will show them your exact location and a description
                        of you so you can get the immediate help you need. <span style={{color:'red'}}>(This isn't a replacement for 911)</span>
                    </p>
                    <br/>
                </Col>
            </Row>
        </Container>
    )
}
