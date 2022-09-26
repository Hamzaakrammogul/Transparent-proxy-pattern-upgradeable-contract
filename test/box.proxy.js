const {expect}= require('chai')

let Box, box;

//Test Block
describe('Box (proxy)', function () {
    beforeEach(async function(){
         Box = await ethers.getContractFactory('Box')
         box = await upgrades.deployProxy(Box, [42], {initializer: 'store'})
        });
    // Test case
    it('retrieve returns a value previously initialized', async function(){
        //Test if the returned value is the same one
        //Note that we need to use strings to compare the 256 bit integers
        // Caliing function in proxy contract and our delicate call should send it to retrieve function in implementation
        expect((await box.retrieve()).toString()).to.equal('42') 
        expect(() => { box.increment() }).to.throw(TypeError)

    });
    // it('upgrades', async function () {
    //     const BoxV2 = await ethers.getContractFactory("BoxV2")
    //     box = await upgrades.upgradeProxy(box.address, BoxV2)
    //     await box.increment()
    //     let result = await box.retrieve()
    //     expect(result).to.equal(43)
    //   });


})