import {test as base } from '@playwright/test'
import {LoginPage } from '../pages/LoginPage'

export const test = base.extend({
    loginpage:async ({page}) => {
        const loginpage = new LoginPage(page);
        await use(LoginPage);
    }
})

export const expect = base.expect()