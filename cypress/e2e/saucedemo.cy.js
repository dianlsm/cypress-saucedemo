import LoginPage from '../support/pageObjects/loginPage';
import InventoryPage from '../support/pageObjects/inventoryPage';
import CheckoutPage from '../support/pageObjects/checkoutPage';

describe('SauceDemo E2E Test', () => {
  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const checkoutPage = new CheckoutPage();

  it('should login, add product to cart, and checkout successfully', () => {
    loginPage.visit();
    loginPage.fillUsername('standard_user');
    loginPage.fillPassword('secret_sauce');
    loginPage.clickLogin();

    inventoryPage.addFirstItemToCart();
    inventoryPage.goToCart();

    checkoutPage.clickCheckout();
    checkoutPage.fillCheckoutInfo('John', 'Doe', '12345');
    checkoutPage.finishOrder();
    checkoutPage.verifyOrderSuccess();
  });
});
