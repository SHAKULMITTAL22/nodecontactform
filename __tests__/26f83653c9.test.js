// ********RoostGPT********
/*
Test generated by RoostGPT for test nodejs-test-1 using AI Type Open AI and AI Model gpt-4

ROOST_METHOD_HASH=26f83653c9
ROOST_METHOD_SIG_HASH=26f83653c9


*/

// ********RoostGPT********
const request = require('supertest');
const app = require('../app');

describe('Server Test', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(3000, () => {
      global.agent = request.agent(server);
      done();
    });
  });

  afterAll(async () => {
    await server.close();
  });

  test('should start server at port 3000', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  test('should return error for invalid route', async () => {
    const response = await request(app).get('/invalid-route');
    expect(response.statusCode).toBe(404);
  });
});
