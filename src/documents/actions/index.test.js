import { GET_DOCUMENTS, DOWNLOAD_DOCUMENT } from '@/documents/actions/documentActionTypes'
import { FAILED_REFRESH_DOCUMENTS, FINISHED_REFRESH_DOCUMENTS, STARTED_REFRESH_DOCUMENTS } from '@/documents/mutations/documentMutationTypes'
import actions from './index.js'

jest.mock('@/documents/resources/documentsResource', () => ({}))
jest.mock('file-saver', () => ({}))

import documentsResource from '@/documents/resources/documentsResource'
import fileSaver from 'file-saver'

describe('documents actions', () => {

  describe('GET_DOCUMENTS', () => {

    const fakeLesson = {
      id: 123
    }

    it('should call FINISHED_REFRESH_DOCUMENTS DOCUMENTS on successful get', (done, fail) => {
      const commit = jest.fn()
      const fakeItems = [ { name: 'fake item' } ]
      let promiseResolver
      documentsResource.getFromLesson = jest.fn().mockImplementation(() => new Promise(resolve => promiseResolver = resolve))

      actions[GET_DOCUMENTS]({ commit }, fakeLesson.id)
        .then(items => {
          expect(commit.mock.calls.length).toBe(2)
          expect(commit.mock.calls[1][0]).toBe(FINISHED_REFRESH_DOCUMENTS)
          expect(commit.mock.calls[1][1]).toBe(fakeItems)
          expect(documentsResource.getFromLesson.mock.calls[0][0]).toBe(fakeLesson.id)

          expect(items).toBe(fakeItems)
          done()
        })
        .catch(fail)

      expect(commit.mock.calls.length).toBe(1)
      expect(commit.mock.calls[0][0]).toBe(STARTED_REFRESH_DOCUMENTS)

      promiseResolver(fakeItems)
    })

    it('should call FAILED_REFRESH_DOCUMENTS mutation on fail get', (done, fail) => {
      const commit = jest.fn()
      const fakeError = new Error('fake error')
      let promiseRejector
      documentsResource.getFromLesson = jest.fn().mockImplementation(() => new Promise((resolve, reject) => promiseRejector = reject))

      actions[GET_DOCUMENTS]({ commit }, fakeLesson.id)
        .then(fail)
        .catch(error => {
          expect(commit.mock.calls.length).toBe(2)
          expect(commit.mock.calls[1][0]).toBe(FAILED_REFRESH_DOCUMENTS)
          expect(commit.mock.calls[1][1]).toBe(fakeError)
          expect(documentsResource.getFromLesson.mock.calls[0][0]).toBe(fakeLesson.id)

          expect(error).toBe(fakeError)
          done()
        })

      expect(commit.mock.calls.length).toBe(1)
      expect(commit.mock.calls[0][0]).toBe(STARTED_REFRESH_DOCUMENTS)

      promiseRejector(fakeError)
    })

  })

  describe('DOWNLOAD_DOCUMENT', () => {

    it('should save document', () => {
      const fakeDocument = {
        url: 'fakeUrl.pdf',
        fileName: 'fake name'
      }
      fileSaver.saveAs = jest.fn()

      actions[DOWNLOAD_DOCUMENT](null, fakeDocument)

      expect(fileSaver.saveAs.mock.calls.length).toBe(1)
      expect(fileSaver.saveAs.mock.calls[0][0]).toBe(fakeDocument.url)
      expect(fileSaver.saveAs.mock.calls[0][1]).toBe(fakeDocument.fileName)
    })

  })

})
