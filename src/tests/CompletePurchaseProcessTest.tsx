require('dotenv').config();
import LoginPage from '../pages/LoginPage';
import BasePage from '../pages/BasePage';

describe('Should login to shop', () => {
    before(async () => {
        await driver.startActivity(
            process.env.APP_PACKAGE!,
            process.env.APP_ACTIVITY!
        );
    });

    it('should login as standard user', async () => {
        await LoginPage.loginAsStandardUser();
        await expect(BasePage.closeButton).toBeDisplayed();
    });
});