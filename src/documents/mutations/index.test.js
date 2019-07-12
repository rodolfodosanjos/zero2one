import { FAILED_REFRESH_DOCUMENTS, FINISHED_REFRESH_DOCUMENTS, STARTED_REFRESH_DOCUMENTS } from '@/documents/mutations/documentMutationTypes'
import mutations from './index.js'

describe('documents mutations', () => {

  it('STARTED_REFRESH_DOCUMENTS', () => {
    const state = {
      documents: {
        isLoading: false,
        items: null,
        error: new Error()
      },
      fakeField: {}
    }

    mutations[STARTED_REFRESH_DOCUMENTS](state)

    expect(state).toEqual({
      documents: {
        isLoading: true,
        items: []
      },
      fakeField: {}
    })
  })

  it('FINISHED_REFRESH_DOCUMENTS', () => {
    const state = {
      documents: {
        isLoading: true,
        items: null,
        error: new Error()
      },
      fakeField: {}
    }
    const documents = [ { name: 'fake name' } ]

    mutations[FINISHED_REFRESH_DOCUMENTS](state, documents)

    expect(state).toEqual({
      documents: {
        isLoading: false,
        items: documents
      },
      fakeField: {}
    })
  })

  it('FAILED_REFRESH_DOCUMENTS', () => {
    const state = {
      documents: {
        isLoading: true,
        items: null,
        error: null
      },
      fakeField: {}
    }

    mutations[FAILED_REFRESH_DOCUMENTS](state, new Error())

    expect(state).toEqual({
      documents: {
        isLoading: false,
        items: [],
        error: new Error()
      },
      fakeField: {}
    })
  })

})
