import { ChainablePromiseElement } from 'webdriverio';
class LoginPage {
    /**
     * Selectors
     */
    public get userNameInput(): ChainablePromiseElement {
        return $('~test-Username');
    }

    public get loginButton(): ChainablePromiseElement {
        return $('~test-LOGIN');
    };

    public get standardUserLink(): ChainablePromiseElement {
        return $('~test-standard_user');
    };

    /**
     * Methods
     */
    public async loginAsStandardUser(): Promise<void> {
        await this.standardUserLink.waitForDisplayed({ timeout: 5000 });
        await this.standardUserLink.click();
        await this.loginButton.click();
    }
}
export default new LoginPage();
