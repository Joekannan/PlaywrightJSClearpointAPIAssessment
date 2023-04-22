const { test, expect } = require('@playwright/test');
import { faker } from '@faker-js/faker';

const randomItem = faker.random.alpha(10)

test('1. Should successfully mark the item completed by PUT request', async ({ request }) => {
    const postResponse = await request.post('/api/todoItems', {
        data: {
            "description": randomItem
        }
    });

   const id = await postResponse.json();

    const getResponse = await request.put(`/api/todoItems/${id}`,{
        data: {
            "id": id,
            "description": randomItem,
            "isCompleted": true
        }
    });
    expect(getResponse.statusText()).toBe('No Content')
    expect(getResponse.status()).toBe(204);
});

test('2. Should get bad request for PUT request', async ({ request }) => {
    const postResponse = await request.post('/api/todoItems', {
        data: {
            "description": randomItem
        }
    });

   const id = await postResponse.json();

    const getResponse = await request.put('/api/todoItems/c96db09f-2ad2-4468-8d05-a94dbe1de52a',{
        data: {
            "id": id,
            "description": randomItem,
            "isCompleted": true
        }
    });
    expect(getResponse.statusText()).toBe('Bad Request')
    expect(getResponse.status()).toBe(400);
});

test('3. Should get not found for PUT request', async ({ request }) => {
    
    const getResponse = await request.put('/api/todoItems/0506a863-8c29-4712-be4e-733473cb7665',{
        data: {
            "id": "0506a863-8c29-4712-be4e-733473cb7665",
            "description": "pysrmgcikv",
            "isCompleted": true
          }
    });
    expect(getResponse.statusText()).toBe('Not Found')
    expect(getResponse.status()).toBe(404);
});