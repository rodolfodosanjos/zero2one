import { GET_MESSAGES } from '@/messages/actions/messageActionTypes'
import { FAILED_REFRESH_MESSAGES, FINISHED_REFRESH_MESSAGES, STARTED_REFRESH_MESSAGES } from '@/messages/mutations/messageMutationTypes'
import actions from './index.js'

jest.mock('@/messages/resources/messagesResource', () => ({}))

import messagesResource from '@/messages/resources/messagesResource'

describe('messages actions', () => {

  describe('GET_MESSAGES', () => {

    it('should call FINISHED_REFRESH_MESSAGES mutation on successful get', (done, fail) => {
      const commit = jest.fn()
      const fakeItems = [ { name: 'fake item' } ]
      let promiseResolver
      messagesResource.getFromLesson = jest.fn().mockImplementation(() => new Promise(resolve => promiseResolver = resolve))

      actions[GET_MESSAGES]({ commit })
        .then(items => {
          expect(commit.mock.calls.length).toBe(2)
          expect(commit.mock.calls[1][0]).toBe(FINISHED_REFRESH_MESSAGES)
          expect(commit.mock.calls[1][1]).toBe(fakeItems)

          expect(items).toBe(fakeItems)
          done()
        })
        .catch(fail)

      expect(commit.mock.calls.length).toBe(1)
      expect(commit.mock.calls[0][0]).toBe(STARTED_REFRESH_MESSAGES)

      promiseResolver(fakeItems)
    })

    it('should call FAILED_REFRESH_MESSAGES mutation on fail get', (done, fail) => {
      const commit = jest.fn()
      const fakeError = new Error('fake error')
      let promiseRejector
      messagesResource.getFromLesson = jest.fn().mockImplementation(() => new Promise((resolve, reject) => promiseRejector = reject))

      actions[GET_MESSAGES]({ commit })
        .then(fail)
        .catch(error => {
          expect(commit.mock.calls.length).toBe(2)
          expect(commit.mock.calls[1][0]).toBe(FAILED_REFRESH_MESSAGES)
          expect(commit.mock.calls[1][1]).toBe(fakeError)

          expect(error).toBe(fakeError)
          done()
        })

      expect(commit.mock.calls.length).toBe(1)
      expect(commit.mock.calls[0][0]).toBe(STARTED_REFRESH_MESSAGES)

      promiseRejector(fakeError)
    })

  })

})
