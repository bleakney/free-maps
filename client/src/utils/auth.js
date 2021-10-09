import decode from 'jwt-decode';

class AuthService {

    // get user data
    getProfile() {
        return decode(this.getToken());
    }

    // check if user is logged in
    loggedIn() {
        const token = this.getToken();
        return !!token && this.isTokenExpired(token);
    }

    // check if token is expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    // retrieves user token from localStorage
    getToken() {
        return localStorage.getItem('id_token');
    }

    // saves user token to localStorage
    login(idToken) {
        localStorage.setItem('id_token', idToken);
        window.location.assign('/');
    }

    // clears user token and profile data from localStorage
    logout() {
        localStorage.removeItem('id_token');
        window.location.assign('/');
    }
 };

 export default new AuthService();