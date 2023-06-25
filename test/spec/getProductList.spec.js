const request = require('supertest');
const expect = require ('chai');
const AUTH = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBlODJkOTY5LTQwMjYtNGIyZi05YjM0LTVmMDdhODE3YTFiZiIsImNvbXBhbnlJZCI6IjAzODdiZmEwLWY1NjctNDhhNC1hMGE4LTQxMDhjMDcwOTYwZiIsImlhdCI6MTY4NzY2OTI2MX0.WJNz3EVcZRzQVM0T7HqcdTx_HhMk1iwnDQ9FohGOgjo'
const catID = '811f547e-a24e-4f94-bfe1-b7ed7d11c03f'



describe('Product list', function(){
    it('Product List yang baru saja ditambahkan', function(done){
        request('https://kasir-api.belajarqa.com')
        .get('/products')
        .send({page: '1', q: 'brokoli', withStock: '', withCategory: '', categoryId: catID})
        .set({
            Authorization : AUTH,
            Accept : 'application/json'
        })
        .expect(200)
        .expect(function(response){
             console.log(response.body)
        })
        .end(done)
    })
})