import { FAILED_REFRESH_LESSONS, FINISHED_REFRESH_LESSONS, STARTED_REFRESH_LESSONS } from '@/lessons/mutations/lessonsMutationTypes'

export default {
  [STARTED_REFRESH_LESSONS]: state =>
    state.lessons = {
      isLoading: true,
      items: []
    }
  ,
  [FINISHED_REFRESH_LESSONS]: (state, lessons) =>
    state.lessons = {
      isLoading: false,
      items: lessons
    }
  ,
  [FAILED_REFRESH_LESSONS]: (state, error) =>
    state.lessons = {
      isLoading: false,
      items: [],
      error
    }
}
