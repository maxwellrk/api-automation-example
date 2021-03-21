const request = require('supertest')('https://jsonplaceholder.typicode.com');

describe('API Tests', () => {
    console.log('hello');
    it('Makes a GET req', () => {
        request
            .get('/comments')
            .expect(200)
            .then((resp) => console.log(resp.status))
            .catch((err) => console.log(err));
    });
    it('Makes a POST req', () => {
        request
            .post('/posts')
            .send({ userId: 100, title: 'example title' })
            .expect(201)
            .then((resp) => console.log(resp.body))
            .catch((err) => console.log(err));
    });
    it('Makes a PUT req', () => {
        request
            .put('/posts/1')
            .send({ userId: 100, title: 'example title' })
            .expect(200)
            .then((resp) => console.log(resp.body))
            .catch((err) => console.log(err));
    });
    it('Makes a DELETE req', () => {
        request
            .delete('/posts/1')
            .expect(200)
            .then((resp) => console.log(resp.status))
            .catch((err) => console.log(err));
    });
    it('Set Headers for request', () => {});
    it('Set Body for the request', () => {});
    it('Sucessfully returns 200 code', () => {});
    it('Chains request to a new response', () => {});
});
