const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token contract', () => {
    let Token, token, owner, addr1, addr2;

    beforeEach(async ()=>{
        Token = await ethers.getContractFactory('Token');
        token = await Token.deploy();
        [owner, addr1, addr2, _] = await ethers.getSigners();
    });

    describe('Deployment',()=> {
        it('Should set the right owner', async()=>{
            expect(await token.owner()).to.equal(owner.address);
        });

        it('Should assign the total supply of tokens to the owner', async ()=>{
            const ownerBalance = await token.balanceOf(owner.address);
            expect(await token.totalSupply()).to.equal(ownerBalance);
        });

    });

    describe('Transaction', ()=>{
        it('Should transfer tokens between accounts', async () =>{
            await token.transfer(addr1.address,50);
            const addr1Balance = await token.balanceOf(addr1.address);
            expect(addr1Balance).to.equal(50);

            await token.connect(addr1).transfer(addr2.address,50);
            const addr2Balance = await token.balanceOf(addr2.address);
            expect(addr2Balance).to.equal(50);


        });

        it('Should fail if sender does not have enough tokens',async()=>{
            const initialOwnerBalance = await token.balanceOf(owner.address);

            await expect(
                token
                    .connect(addr1)
                    .transfer(owner.address, 1)
            )
                .to
                .be
                .revertedWith('Not enough tokens');

            expect(
                await token.balanceOf(owner.address)
            )
                .to
                .equal(initialOwnerBalance);
        });

        it('Should update balance after transfers', async () =>{
            const initialOwnerBalance = await token.balanceOf(owner.address);

            await token.transfer(addr1.address, 100);
            await token.transfer(addr2.address, 50);
            
            const finalOwnerBalance = await token.balanceOf(owner.address);
            expect(finalOwnerBalance).to.equal(initialOwnerBalance-150);

            const addr1balance = await token.balanceOf(addr1.address);
            expect(addr1balance).to.equal(100);

            const addr2balance = await token.balanceOf(addr2.address);
            expect(addr2balance).to.equal(50);

        })

    });


});