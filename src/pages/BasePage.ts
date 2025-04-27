import { ChainablePromiseElement } from 'webdriverio';

class BasePage {

    /**
     * Selectors
     */
    public get menuButton(): ChainablePromiseElement {
        return $('~test-Menu');
    }

    public get closeButton(): ChainablePromiseElement {
        return $('~test-Close');
    }

    /**
     * Methods
     */
    public async expandMenu():Promise<void> {
        await this.menuButton.click();
        await browser.waitUntil(this.closeButton.isDisplayed);
    }
}

export default new BasePage();