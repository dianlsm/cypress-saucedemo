class LoginPage {
    visit() {
      cy.visit('/');
    }
  
    fillUsername(username) {
      cy.get('[data-test="username"]').clear().type(username);
    }
  
    fillPassword(password) {
      cy.get('[data-test="password"]').clear().type(password);
    }
  
    clickLogin() {
      cy.get('[data-test="login-button"]').click();
    }
  }
  
  export default LoginPage;
  