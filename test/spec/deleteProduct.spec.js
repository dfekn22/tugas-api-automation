const request = require('supertest');
const expect = require('chai').expect;
const AUTH = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBlODJkOTY5LTQwMjYtNGIyZi05YjM0LTVmMDdhODE3YTFiZiIsImNvbXBhbnlJZCI6IjAzODdiZmEwLWY1NjctNDhhNC1hMGE4LTQxMDhjMDcwOTYwZiIsImlhdCI6MTY4NzY2OTI2MX0.WJNz3EVcZRzQVM0T7HqcdTx_HhMk1iwnDQ9FohGOgjo'
const catID = '811f547e-a24e-4f94-bfe1-b7ed7d11c03f'

describe('Delete Product Kasir Aja', function(){
    //positive scenario/happy flow saat user benar memasukan mandatory items
    it('Success jika produk berhasil dihapus', function(done){
        request('https://kasir-api.belajarqa.com')
            .delete('/products/34312b5c-a264-4341-96da-b378122afed2')
            .send({status: '', message: ''})
            .set({
                Authorization : AUTH,
                Accept : 'aplication/json'
            })
            .expect(200)
            .expect(function(response){
                console.log(response.body)
            })
            .end(done)
    })
})