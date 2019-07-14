import { GET_LESSONS } from '@/lessons/actions/lessonsActionTypes'
import { FAILED_REFRESH_LESSONS, FINISHED_REFRESH_LESSONS, STARTED_REFRESH_LESSONS } from '@/lessons/mutations/lessonsMutationTypes'
import actions from './index.js'

jest.mock('@/lessons/resources/lessonsResource', () => ({}))

import lessonsResource from '@/lessons/resources/lessonsResource'

describe('lessons actions', () => {

  describe('GET_LESSONS', () => {

    it('should call FINISHED_REFRESH_LESSONS mutation on successful get', (done, fail) => {
      const commit = jest.fn()
      const fakeItems = [ { name: 'fake item' } ]
      let promiseResolver
      lessonsResource.getAll = jest.fn().mockImplementation(() => new Promise(resolve => promiseResolver = resolve))

      actions[GET_LESSONS]({ commit })
        .then(items => {
          expect(commit.mock.calls.length).toBe(2)
          expect(commit.mock.calls[1][0]).toBe(FINISHED_REFRESH_LESSONS)
          expect(commit.mock.calls[1][1]).toBe(fakeItems)

          expect(items).toBe(fakeItems)
          done()
        })
        .catch(fail)

      expect(commit.mock.calls.length).toBe(1)
      expect(commit.mock.calls[0][0]).toBe(STARTED_REFRESH_LESSONS)

      promiseResolver(fakeItems)
    })

    it('should call FAILED_REFRESH_LESSONS mutation on fail get', (done, fail) => {
      const commit = jest.fn()
      const fakeError = new Error('fake error')
      let promiseRejector
      lessonsResource.getAll = jest.fn().mockImplementation(() => new Promise((resolve, reject) => promiseRejector = reject))

      actions[GET_LESSONS]({ commit })
        .then(fail)
        .catch(error => {
          expect(commit.mock.calls.length).toBe(2)
          expect(commit.mock.calls[1][0]).toBe(FAILED_REFRESH_LESSONS)
          expect(commit.mock.calls[1][1]).toBe(fakeError)

          expect(error).toBe(fakeError)
          done()
        })

      expect(commit.mock.calls.length).toBe(1)
      expect(commit.mock.calls[0][0]).toBe(STARTED_REFRESH_LESSONS)

      promiseRejector(fakeError)
    })

  })

})
