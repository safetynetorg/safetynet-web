import React from 'react'
import landingimg from '../../assets/landing-img.svg'
import frame5 from '../../assets/frame5.svg'
import frame6 from '../../assets/frame6.svg'
import app from '../../assets/app.svg'
import location from '../../assets/location.svg'
import alert from '../../assets/alert.svg'
import googleplaybadge from '../../assets/google-play-badge.png'
import appstorebadge from '../../assets/appstore-badge.svg'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

import '../styles/landing.scss'



export default function Landing() {
    const [signUp, setSignUp] = React.useState('')
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [question, setQuestion] = React.useState('')

    const SignUp = async () => {
        if (signUp === '' || signUp === null) {
            return
        }
        await axios({
            url: 'https://safetynet-server.herokuapp.com/signup',
            method: 'post',
            data: {
                'email': signUp
            },
        })
    }

    const Contact = async () => {
        if (name === '' || name === null || email === "" || email === null || question === "" || question === null) {
            return
        }
        await axios({
            url: 'https://safetynet-server.herokuapp.com/contact',
            method: 'post',
            data: {
                'name': name,
                'email': email,
                'question': question
            },
        })
    }

    return (
        <Container fluid style={{ 'marginTop': '5.5rem' }}>

            <Row className="justify-content-between">
                <Col lg={5} className='mb-5'>
                    <div className='top-text'>
                        <h1 className='font-large font-weight-bolder'>Help make the world a safer place with Safetynet</h1>
                        <form>
                            <Row className='justify-content-between'>
                                <Col lg={8}>
                                    <input
                                        name="signUp"
                                        type="email"
                                        placeholder="Email Address"
                                        value={signUp}
                                        onChange={e => setSignUp(e.target.value)}
                                        required
                                    />
                                </Col>
                                <Col lg={4}>
                                    <button className='sign-up' onClick={SignUp}>Sign up!</button>
                                </Col>
                            </Row>


                        </form>
                    </div>
                    <div>
                        <h5 className='text-highlight'>Signup for our newsletter</h5>
                    </div>
                </Col>
                <Col lg={4}>
                    <img className="landing-img w-100" src={landingimg} alt="landing img" />
                </Col>
            </Row>
            <div className='buffer'></div>
            <Row className='justify-content-around'>
                <br />
                <div className='how-it-works mb-4'>
                    <h2 className='font-weight-bold'>HOW IT WORKS</h2>
                    <hr />
                </div>
                <Row className='justify-content-around mt-5'>
                    <Col lg={3} className='mb-3'>
                        <div className={'how-it-works-card'}>
                            <img src={app} alt='app' width='100%' className={'how-it-works-img'} />
                            <p className={'text-muted text-left mt-3'}>Open the Safetynet app if you think you are in danger.</p>
                        </div>
                    </Col>
                    <Col lg={3} className='mb-3'>
                        <div className={'how-it-works-card'}>
                            <img src={alert} width='100%' alt='app' />
                            <hr className='mb-4 mt-4' />
                            <p className={'text-muted text-left mt-3'}>
                                Once the app is open, you will see a large white button. Press this button once and you will feel a vibration. All devices within a 200m radius of you with the Safetynet app
                                will be sent an alert.
                            </p>
                        </div>
                    </Col>
                    <Col lg={3} className='mb-3'>
                        <div className={'how-it-works-card'}>
                            <img src={location} width='100%' alt='app' />
                            <hr className='mb-4 mt-4' />
                            <p className={'text-muted text-left mt-3'}>
                                The alert will show the address you are clostest to, your distance away from the person who is alerted and the neighbourhood you are in so the community can help you.
                                </p>
                        </div>
                    </Col>
                </Row>
            </Row>
            <div className='buffer'></div>
            <Row>
                <div className='about-us'>
                    <h1 className='font-weight-bold'>ABOUT US</h1>
                    <h4 className='our-story font-weight-bold text-muted'>OUR STORY</h4>
                    <p className='text-p'>
                        Safetynet is free and simple to use. Just download the app, and use when you feel that you need help.
                        If you like it - spread the word, so that people worldwide can feel safe and empowered while walking alone,
                        taking transport alone, or even being in a public space. A simple push of a button on the app triggers an alert
                        notice to everyone who is in a 200m radius of you. It shows your the location you are currently at so anyone within the
                        space can come help you as soon as possible. Safetynet was inspired by the continued rates of sexual assault in the
                        world, with many incidents taking place on transport or when walking home alone. The app is not a 911 alternative,
                        and is used to inspire the community around you to make sure you feel safe if you are in danger.
                    </p>
                    <img className="frame5" src={frame5} alt="Frame5" />
                </div>
            </Row>
            <div className={'buffer text-center'}>

                <h1 className='font-weight-bold' id='download'>DOWNLOAD NOW</h1>
                <hr />
                <Container fluid className={'mt-3'}>
                    <Row className='justify-content-center'>
                        <Col lg={3}>
                            <img width='100%' src={googleplaybadge} alt='android' />
                        </Col>
                        <Col lg={3}>
                            <img width='80%' height='100%' src={appstorebadge} alt='ios' />
                        </Col>
                    </Row>
                </Container>



            </div>
            <div className='buffer'></div>
            <Row className='justify-content-around mb-5'>
                <br />
                <div className='questions'>
                    <h1 className='font-weight-bold'>HAVE ANY QUESTIONS?</h1>
                    <hr />
                </div>
                <Col lg={4}>
                    <form>
                        <input
                            name="name"
                            placeholder="NAME"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="EMAIL"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                        <textarea
                            name="question"
                            placeholder="QUESTIONS"
                            value={question}
                            onChange={e => setQuestion(e.target.value)}
                            required
                        />
                        <button className='send-message mt-3' onClick={Contact}>SEND MESSAGE</button>
                    </form>
                </Col>
                <Col lg={6}>
                    <img className="frame6" src={frame6} alt="Frame6" />
                </Col>
            </Row>
        </Container>
    )
}
