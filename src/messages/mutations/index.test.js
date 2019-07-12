import { FAILED_REFRESH_MESSAGES, FINISHED_REFRESH_MESSAGES, STARTED_REFRESH_MESSAGES } from '@/messages/mutations/messageMutationTypes'
import mutations from './index.js'

describe('messages mutations', () => {

  it('STARTED_REFRESH_MESSAGES', () => {
    const state = {
      messages: {
        isLoading: false,
        items: null,
        error: new Error()
      },
      fakeField: {}
    }

    mutations[STARTED_REFRESH_MESSAGES](state)

    expect(state).toEqual({
      messages: {
        isLoading: true,
        items: []
      },
      fakeField: {}
    })
  })

  it('FINISHED_REFRESH_MESSAGES', () => {
    const state = {
      messages: {
        isLoading: true,
        items: null,
        error: new Error()
      },
      fakeField: {}
    }
    const messages = [ { name: 'fake name' } ]

    mutations[FINISHED_REFRESH_MESSAGES](state, messages)

    expect(state).toEqual({
      messages: {
        isLoading: false,
        items: messages
      },
      fakeField: {}
    })
  })

  it('FAILED_REFRESH_MESSAGES', () => {
    const state = {
      messages: {
        isLoading: true,
        items: null,
        error: null
      },
      fakeField: {}
    }

    mutations[FAILED_REFRESH_MESSAGES](state, new Error())

    expect(state).toEqual({
      messages: {
        isLoading: false,
        items: [],
        error: new Error()
      },
      fakeField: {}
    })
  })

})
