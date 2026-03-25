export class LoginPage {
    constructor(page) {
        this.page = page;
        //locators
        this.usernameInput = page.getByPlaceholder('Username')
        this.passwordInput = page.getByPlaceholder('Password')
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.dashboardHeading = page.getByRole('heading', { name: "Dashboard" })
    }
    //actions
    async navigate() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }
    async login(username, password) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()

    }
    //assertion helpers
    async verifyLoginSuccess(){
        await this.page.waitForURL(/dashboard/)
        await expect (this.dashboardHeading).isVisible();
    }
}

