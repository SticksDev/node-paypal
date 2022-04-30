class payPalClientError extends Error {
  constructor(message) {
    super(message);
    this.name = 'payPalClientError';
  }
}

// Export errors
module.exports = {
    payPalClientError
}