What we learned from this project? 
(Testing and Test automation in Web 3.0 using HardHat)
Hardhat is the development environment based on ethereum. It is a flexible, fast and highly extensible environment to develop smart contracts.
A smart contract is a self-executing contract in which the conditions of the buyer-seller agreement are directly encoded into lines of code. The code and the agreements contained within it are spread throughout a decentralized blockchain network. Transactions are trackable and irreversible, and the code controls the execution.
Smart contracts allow for trustworthy transactions and agreements to be carried out between disparate, anonymous participants without the requirement for a centralized authority, legal system, or external enforcement mechanism.

While blockchain technology has come to be known largely as the foundation for bitcoin, it has progressed well beyond that role.
Hardhat is an ethereum development environment which allows to make and deploy contracts while also giving an opportunity to test and debug those contracts.

The contracts are developed using solidity and test cases are written using js. so nodejs is required to write the test cases. The test cases can be made fully automatic.

Typical steps to follow for developing your own hardhat project
Steps to follow:
Write smart contract using solidity
Compile the contract using hardhat runner.
Write tests
Deploy the contract on live Network

The setup process of hardhat was pretty simple and straightforward. We can easily download the hardhat package using npm and start writing our contract or test cases. 
After developing the contract you can easily write test cases and also deploy it to a live network. It's not the actual network but a network specifically directed to test the contract before final deployment.
Hardhat allows solidity to run locally. And also allows you to easily deploy your contracts, run tests and debug Solidity code without dealing with live environments. Hardhat Network is a local Ethereum network designed for development. Hardhat is the best choice for Solidity debugging. You get Solidity stack traces, console.log and explicit error messages when transactions fail.

Detailed code regarding developing and testing contract is uploaded on this project repository. According to our observation writing test cases for contracts was much similar to writing test cases for UI using jest. I think that’s because both are based on javascript.
