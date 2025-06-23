class InventoryPage {
    addFirstItemToCart() {
      cy.get('.inventory_item').first().within(() => {
        cy.contains('Add to cart').click();
      });
    }
  
    goToCart() {
      cy.get('.shopping_cart_link').click();
    }
  }
  
  export default InventoryPage;
  