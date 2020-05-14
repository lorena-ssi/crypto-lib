'use strict'
const chai = require('chai')
const CryptographyInterface = require('../src/index.js')

// Configure chai
chai.should()
const expect = chai.expect

describe('Lorena Cryptography interface', function () {
  it('Should generate a correct class if all methods are implemented', () => {
    class TestCryptography extends CryptographyInterface {
      randomDID(){}
      hash(){}
      random(){}
      checkSignature(){}
      signMessage(){}
      decryptSymmetric(){}
      encryptSymmetric(){}
      decryptAsymmetric(){}
      encryptAsymmetric(){}
      newKeyPair(){}
      publicKey(){}
    }

    const Cryptography = new TestCryptography()
    expect(Cryptography).to.be.an('object')
  })
})
