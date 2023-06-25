const request = require('supertest');
const expect = require('chai').expect;
const AUTH = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBlODJkOTY5LTQwMjYtNGIyZi05YjM0LTVmMDdhODE3YTFiZiIsImNvbXBhbnlJZCI6IjAzODdiZmEwLWY1NjctNDhhNC1hMGE4LTQxMDhjMDcwOTYwZiIsImlhdCI6MTY4NzY2OTI2MX0.WJNz3EVcZRzQVM0T7HqcdTx_HhMk1iwnDQ9FohGOgjo'
const catID = '811f547e-a24e-4f94-bfe1-b7ed7d11c03f'

describe('Update Product Kasir Aja', function(){
    //positive scenario/happy flow saat user benar memasukan mandatory items
    it('Success jika produk berhasil diupdate', function(done){
        request('https://kasir-api.belajarqa.com')
            .put('/products/3d29ec25-a5ad-4403-a61f-ce55da520253')
            .send({category_id: catID, code: 'sayur', name: 'brokoli', price: '5000', cost: '3000', stock: '10'})
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

    //negative scenario saat user salah memasukan category id
    it('Gagal ketika tidak memasukan productId', function(done){
        request('https://kasir-api.belajarqa.com')
            .put('/products/')
            .send({category_id: catID, code: 'sayur', name: 'brokoli', price: '5000', cost: '3000', stock: '10'})
            .set({
                Authorization : AUTH,
                Accept : 'aplication/json'
            })
            .expect(404)
            .expect(function(response){
                console.log(response.body)
            })
            .end(done)
    })
})