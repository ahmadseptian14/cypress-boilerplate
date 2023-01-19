class loginLarastore {
    elements = {
      usernameInput: () => cy.get("#username"),
      passwordInput: () => cy.get("#password"),
      loginBtn: () => cy.get("#login-button"),
      errorMessage: () => cy.get('strong[data-test="error"]'),
    };

    typeUsername(username) {
      this.elements.usernameInput().type(username);
    }

    typePassword(password) {
      this.elements.passwordInput().type(password);
    }

    clickLogin() {
      this.elements.loginBtn().click();
    }

    submitLogin(username, password) {
      this.elements.usernameInput().type(username);
      this.elements.passwordInput().type(password);
      this.elements.loginBtn().click();
    }
  }

  module.exports = new loginLarastore();
