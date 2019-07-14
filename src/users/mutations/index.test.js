import { FAILED_REFRESH_USER, FINISHED_REFRESH_USER, STARTED_REFRESH_USER } from '@/users/mutations/usersMutationTypes'
import mutations from './index.js'

const getDefaultUser = () => ( { profile: {} } )

describe('user mutations', () => {

  it('STARTED_REFRESH_USER', () => {
    const state = {
      user: {
        isLoading: false,
        item: null,
        error: new Error()
      },
      fakeField: {}
    }

    mutations[STARTED_REFRESH_USER](state)

    expect(state).toEqual({
      user: {
        isLoading: true,
        item: getDefaultUser()
      },
      fakeField: {}
    })
  })

  it('FINISHED_REFRESH_USER', () => {
    const state = {
      user: {
        isLoading: true,
        item: null,
        error: new Error()
      },
      fakeField: {}
    }
    const user = { name: 'fake name' }

    mutations[FINISHED_REFRESH_USER](state, user)

    expect(state).toEqual({
      user: {
        isLoading: false,
        item: user
      },
      fakeField: {}
    })
  })

  it('FAILED_REFRESH_USER', () => {
    const state = {
      user: {
        isLoading: true,
        item: null,
        error: null
      },
      fakeField: {}
    }

    mutations[FAILED_REFRESH_USER](state, new Error())

    expect(state).toEqual({
      user: {
        isLoading: false,
        item: getDefaultUser(),
        error: new Error()
      },
      fakeField: {}
    })
  })

})
