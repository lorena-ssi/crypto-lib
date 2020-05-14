module.exports = class CryptographyInterface {
  constructor () {
    if (!this.randomDID) {
      // Creates a random DID
      /* istanbul ignore next */
      throw new Error('Cryptographic classes must have function `randomDID`!')
    } else if (!this.hash) {
      // Hash function used in class
      /* istanbul ignore next */
      throw new Error('Cryptographic classes must have function `hash`!')
    } else if (!this.random) {
      /* istanbul ignore next */
      throw new Error('Cryptographic classes must have function `random`!')
    } else if (!this.checkSignature) {
      // Checks signature of a message.
      /* istanbul ignore next */
      throw new Error('Cryptographic classes must have function `checkSignature`!')
    } else if (!this.signMessage) {
      // Signs a message with a keypair.
      /* istanbul ignore next */
      throw new Error('Cryptographic classes must have function `signMessage`!')
    } else if (!this.decryptSymmetric) {
      // Decrypts (symmetric) a message with a keypair.
      /* istanbul ignore next */
      throw new Error('Cryptographic classes must have function `decryptSymmetric`!')
    } else if (!this.encryptSymmetric) {
      // Encrypts (symmetric) a message with a keypair.
      /* istanbul ignore next */
      throw new Error('Cryptographic classes must have function `encryptSymmetric`!')
    } else if (!this.decryptAsymmetric) {
      // Decrypts (asymmetric) a message with a keypair.
      /* istanbul ignore next */
      throw new Error('Cryptographic classes must have function `decryptAsymmetric`!')
    } else if (!this.encryptAsymmetric) {
      // Encrypts (asymmetric) a message with a keypair.
      /* istanbul ignore next */
      throw new Error('Cryptographic classes must have function `encryptAsymmetric`!')
    } else if (!this.newKeyPair) {
      // Creates a new Key Pair
      /* istanbul ignore next */
      throw new Error('Cryptographic classes must have function `newKeyPair`!')
    } else if (!this.publicKey) {
      // Creates a new Public Key
      /* istanbul ignore next */
      throw new Error('Cryptographic classes must have function `publicKey`!')
    }
  }
}
