const request = require('supertest')('https://jsonplaceholder.typicode.com');
const expect = require('chai').expect;

describe('API Tests', () => {
    it('Makes a GET req', () => {
        return request.get('/comments').expect(200);
    });

    it('Makes a POST req', () => {
        return request
            .post('/posts')
            .send({ userId: 100, title: 'example title' })
            .expect(201);
    });

    it('Makes a PUT req', () => {
        return request
            .put('/posts/1')
            .send({ userId: 100, title: 'example title' })
            .expect(200);
    });

    it('Makes a DELETE req', () => {
        return request.delete('/posts/1').expect(200);
    });

    it('Set Headers for request', () => {
        return request
            .get('/posts/1')
            .set('Accept', 'application/json')
            .set('Cookie', '023u0jd0808108h1f')
            .send({ userId: 100, title: 'example title' })
            .expect(200);
    });

    it('Set Body for the request', () => {
        return request
            .post('/posts')
            .send({ userId: 100, title: 'example title' })
            .expect(201);
    });

    it('Sucessfully returns 200 code', () => {
        return request
            .get('/comments')
            .then((resp) => expect(resp.status).to.equal(200));
    });

    it('Chains request to a new response', () => {
        return request
            .get('/posts/1')
            .expect(200)
            .then((resp) => {
                return request.post('/posts').send(resp.body).expect(201);
            });
    });
});
