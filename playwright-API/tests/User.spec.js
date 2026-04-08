import { test, expect } from '@playwright/test';
import { UserService } from '../api/UserService.js';

test('Get Users API', async ({ request }) => {

  const userService = new UserService(request);

  const response = await userService.getUsers();

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body.length);

});