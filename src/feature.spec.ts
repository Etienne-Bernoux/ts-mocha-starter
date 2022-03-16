import {expect} from 'chai'
import feature from './feature'

describe(`Unit`, function () {
  describe(`#feature`, function () {
    it(`true is not false`, function () {
      feature()
      expect(true).to.be.false
    })
  })
})