import axios from 'axios'


export default async function signUpService(email){
    if (email === '' || email === null) {
        return
    }
    await axios({
        url: 'https://safetynet-server.herokuapp.com/signup',
        //url: 'http://localhost:8080/signup',,
        method: 'post',
        data: {
            'email': email
        },
    })
}