class CheckoutPage {
    clickCheckout() {
      cy.get('[data-test="checkout"]').click();
    }
  
    fillCheckoutInfo(firstName, lastName, postalCode) {
      cy.get('[data-test="firstName"]').type(firstName);
      cy.get('[data-test="lastName"]').type(lastName);
      cy.get('[data-test="postalCode"]').type(postalCode);
      cy.get('[data-test="continue"]').click();
    }
  
    finishOrder() {
      cy.get('[data-test="finish"]').click();
    }
  
    verifyOrderSuccess() {
      cy.contains('Thank you for your order!').should('be.visible');
    }
  }
  
  export default CheckoutPage;
  