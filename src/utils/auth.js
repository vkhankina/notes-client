const storageKey = "notes-edu.auth";
const { localStorage } = window;

class AuthStorage {
  static getUser() {
    const userStringified = localStorage.getItem(storageKey);

    if (!userStringified) {
      return null;
    }

    const user = JSON.parse(userStringified);

    if (AuthStorage.isExpired(user.token)) {
      AuthStorage.removeUser();
      return null;
    } else {
      return user;
    }
  }

  static isExpired({ expires_at }) {
    return new Date() >= new Date(expires_at);
  }

  static removeUser() {
    localStorage.removeItem(storageKey);
  }

  static setUser(user) {
    if (user) {
      localStorage.setItem(storageKey, JSON.stringify(user));
    } else {
      AuthStorage.removeUser();
    }
  }
}

export default AuthStorage;
