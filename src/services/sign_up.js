import axios from 'axios'


export default async function signUpService(email){
    if (email === '' || email === null) {
        return
    }
    await axios({
        url: 'https://safetynet-server.herokuapp.com/signup',
        method: 'post',
        data: {
            'email': email
        },
    })
}