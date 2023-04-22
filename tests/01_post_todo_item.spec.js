const { test, expect } = require('@playwright/test');
import { faker } from '@faker-js/faker';

const randomItem = faker.random.alpha(10)

test('1. Should successfully add unique item using POST request', async ({ request }) => {
    const response = await request.post('/api/todoItems', {
        data: {
            "description": randomItem
        }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody).not.toBeEmpty;
});

test('2. Should successfully add empty item using POST request', async ({ request }) => {
    const response = await request.post('/api/todoItems', {
        data: {
            "description": ''
        }
    });
    expect(response.statusText()).toBe('Bad Request')
    expect(response.status()).toBe(400);
    const responseBody = await response.json();
    expect(responseBody.errors.Description[0]).toEqual("Description field can not be empty");
});

test('3. Should successfully add an existing duplicate item using POST request', async ({ request }) => {
    await request.post(`/api/todoItems`, {
        data: {
            "description": 'Clean House'
        }
    });
    const response = await request.post('/api/todoItems', {
        data: {
            "description": 'Clean House'
        }
    });
    expect(response.statusText()).toBe('Conflict')
    expect(response.status()).toBe(409);
    expect(response).not.toBeEmpty;
});
