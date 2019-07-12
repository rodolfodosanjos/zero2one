import { GET_USER } from '@/users/actions/userActionTypes'
import { FAILED_REFRESH_USER, FINISHED_REFRESH_USER, STARTED_REFRESH_USER } from '@/users/mutations/userMutationTypes'
import actions from './index.js'

jest.mock('@/users/resources/usersResource', () => ({}))

import usersResource from '@/users/resources/usersResource'

describe('users actions', () => {

  describe('GET_USER', () => {

    it('should call FINISHED_REFRESH_USER mutation on successful get', (done, fail) => {
      const commit = jest.fn()
      const fakeItem = { name: 'fake item' }
      let promiseResolver
      usersResource.get = jest.fn().mockImplementation(() => new Promise(resolve => promiseResolver = resolve))

      actions[GET_USER]({ commit })
        .then(item => {
          expect(commit.mock.calls.length).toBe(2)
          expect(commit.mock.calls[1][0]).toBe(FINISHED_REFRESH_USER)
          expect(commit.mock.calls[1][1]).toBe(fakeItem)

          expect(item).toBe(fakeItem)
          done()
        })
        .catch(fail)

      expect(commit.mock.calls.length).toBe(1)
      expect(commit.mock.calls[0][0]).toBe(STARTED_REFRESH_USER)

      promiseResolver(fakeItem)
    })

    it('should call FAILED_REFRESH_USER mutation on fail get', (done, fail) => {
      const commit = jest.fn()
      const fakeError = new Error('fake error')
      let promiseRejector
      usersResource.get = jest.fn().mockImplementation(() => new Promise((resolve, reject) => promiseRejector = reject))

      actions[GET_USER]({ commit })
        .then(fail)
        .catch(error => {
          expect(commit.mock.calls.length).toBe(2)
          expect(commit.mock.calls[1][0]).toBe(FAILED_REFRESH_USER)
          expect(commit.mock.calls[1][1]).toBe(fakeError)

          expect(error).toBe(fakeError)
          done()
        })

      expect(commit.mock.calls.length).toBe(1)
      expect(commit.mock.calls[0][0]).toBe(STARTED_REFRESH_USER)

      promiseRejector(fakeError)
    })

  })

})
