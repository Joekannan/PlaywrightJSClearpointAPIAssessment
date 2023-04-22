const { test, expect } = require('@playwright/test');
import { faker } from '@faker-js/faker';

const randomItem = faker.random.alpha(10)

test('1. Should successfully get all added /empty item using GET request', async ({ request }) => {
    const response = await request.get('/api/todoItems');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).not.toBeEmpty;
});

test('2. Should successfully get the added item by id using GET request', async ({ request }) => {
    const postResponse = await request.post('/api/todoItems', {
        data: {
            "description": randomItem
        }
    });

   const id = await postResponse.json();

    const getResponse = await request.get(`/api/todoItems/${id}`);
    expect(getResponse.ok()).toBeTruthy();
    expect(getResponse.status()).toBe(200);
    const responseBody = await getResponse.json();
    expect(responseBody).not.toBeEmpty;
});

test('3. Should successfully get not found when reteriving not available item by id using GET request', async ({ request }) => {
    const getResponse = await request.get('/api/todoItems/c96db09f-2ad2-4468-8d05-a94dbe1de52a');
    expect(getResponse.statusText()).toBe('Not Found')
    expect(getResponse.status()).toBe(404);
    expect(getResponse).not.toBeEmpty;
});


