import decode from "jwt-decode";

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token ? true : false;
  }

  getToken() {
    return localStorage.getItem("id_token");
  }

  login(idToken, history) {
    localStorage.setItem("id_token", idToken);
    history("/")
  }

  logout() {
    localStorage.removeItem("id_token");
    window.location.reload();
  }
}

export default new AuthService();
