export class LoginPage {
    constructor(page){
        this.page = page
        this.username = '#username'
        this.password ='#password'
        this.loginButton = '#submit'
        this.successMessage = '.post-title'
}
    async navigate(){
        await this.page.goto('https://practicetestautomation.com/practice-test-login/')
    }
    async enterUsername(username){
        await this.page.fill(this.username ,username)
    }
     async enterPassword(password){
        await this.page.fill(this.password ,password)
    }
    async clickButton (){
        await this.page.click(this.loginButton)
    }

    async login(username , password){
        await this.enterUsername(username)
        await this.enterPassword(password)
        await this.clickButton()
    }
}