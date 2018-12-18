const fileMock = require('./fileMock');

describe('fileMock', () => {
  test('should return file-mock-stub', () => {
    expect(fileMock).toEqual('file-mock-stub');
  });
});
