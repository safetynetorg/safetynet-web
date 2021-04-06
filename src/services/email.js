import axios from 'axios'


export default async function emailService(name, email, question){
    if (name === '' || name === null || email === "" || email === null || question === "" || question === null) {
        return
    }
    await axios({
        url: 'https://safetynet-server.herokuapp.com/contact',
        //url: 'http://localhost:8080/contact',
        method: 'post',
        data: {
            'name': name,
            'email': email,
            'question': question
        },
    })
}