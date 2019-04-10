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
    it('should remove an item from the array', function() {
      var array = [1, 2, 3, 4, 5]
      array.pop()
      expect(array).to.deep.equal([1, 2, 3, 4])
    })

    it('should alter the length properly', function() {
      var array = [1, 7, 7, 6]
      array.pop()
      expect(array.length).to.equal(3)
    })
  })

  describe('#shift()', function() {
    it('should remove an item from the beginning of the array', function(){
      var array = [0, 1, 2, 3, 6]
      array.shift()
      expect(array).to.deep.equal([1, 2, 3, 6])
    })

    it('should alter the length properly', function() {
      var array = [1, 9, 7, 6]
      array.shift()
      expect(array.length).to.equal(3)
    })
  })

  describe('#unshift()', function() {
    it('should add item to the beginning of the array', function() {
      var array = [6, 2, 9]
      array.unshift(7)
      expect(array).to.deep.equal([7, 6, 2, 9])
    })

    it('should alter the length properly', function() {
      var array = [1, 9, 7, 6]
      array.unshift(8)
      expect(array.length).to.equal(5)
    })
  })

})
