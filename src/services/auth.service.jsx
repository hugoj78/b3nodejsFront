import jwtDecode from 'jwt-decode';

export default class AuthService {
    login(body) {
        return fetch(
            'http://localhost:3030/api/v1/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(body)
        }).then(res => {
            console.log(res);
            return res.json();
        })
    }

    SignUp(body) {
        return fetch(
            'http://localhost:3030/api/v1/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(body)
        }).then(res => {
            console.log(res);
            return res.json();
        })
    }

    getToken() {
        return localStorage.getItem('token');
    }

    getUserProfil() {
        return jwtDecode(this.getToken());
    }

    getUserDetail(id) {
        return fetch(`http://localhost:3030/api/v1/user/${id}`, {
                method: 'GET', 
                headers: {'x-access-token': this.getToken()}
            })
            .then(res => {
                return res.json();
            })
    }
}
