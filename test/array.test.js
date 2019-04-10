// Here are some tests for some of JavaScript's built-in Array methods
var chai = require('chai')
var expect = chai.expect

describe('Array', function() {
  describe('#push()', function() {
    it('should add an item to the array', function() {
      var array = [1, 2, 3, 4]
      array.push(5)
      expect(array).to.deep.equal([1, 2, 3, 4, 5])
    })

    it('should alter the length properly', function() {
      var array = [1, 1, 1, 1]
      array.push(1)
      expect(array.length).to.equal(5)
    })
  })

  describe('#pop()', function() {
    it('should remove an item from the array', function(){
      var array = [1, 2, 3, 4]
      array.pop()
      expect(array).to.deep.equal([1, 2, 3])
    })

    it('should alter the length properly', function() {
      var array = [1, 7, 7, 3]
      array.pop()
      expect(array).to.deep.equal([1, 7, 7])
    })

  })
})
