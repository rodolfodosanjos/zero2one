import { FAILED_REFRESH_LESSONS, FINISHED_REFRESH_LESSONS, STARTED_REFRESH_LESSONS } from '@/lessons/mutations/lessonsMutationTypes'
import mutations from './index.js'

describe('lessons mutations', () => {

  it('STARTED_REFRESH_LESSONS', () => {
    const state = {
      lessons: {
        isLoading: false,
        items: null,
        error: new Error()
      },
      fakeField: {}
    }

    mutations[STARTED_REFRESH_LESSONS](state)

    expect(state).toEqual({
      lessons: {
        isLoading: true,
        items: []
      },
      fakeField: {}
    })
  })

  it('FINISHED_REFRESH_LESSONS', () => {
    const state = {
      lessons: {
        isLoading: true,
        items: null,
        error: new Error()
      },
      fakeField: {}
    }
    const lessons = [ { name: 'fake name' } ]

    mutations[FINISHED_REFRESH_LESSONS](state, lessons)

    expect(state).toEqual({
      lessons: {
        isLoading: false,
        items: lessons
      },
      fakeField: {}
    })
  })

  it('FAILED_REFRESH_LESSONS', () => {
    const state = {
      lessons: {
        isLoading: true,
        items: null,
        error: null
      },
      fakeField: {}
    }

    mutations[FAILED_REFRESH_LESSONS](state, new Error())

    expect(state).toEqual({
      lessons: {
        isLoading: false,
        items: [],
        error: new Error()
      },
      fakeField: {}
    })
  })

})
