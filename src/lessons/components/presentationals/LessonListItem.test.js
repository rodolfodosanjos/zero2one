import { mount } from '@vue/test-utils'
import moment from 'moment'
import LessonListItem from './LessonListItem'

describe('LessonListItem', () => {
  const createComponent = props => mount(LessonListItem, {
    propsData: props,
    stubs: [ 'LessonDialog' ]
  })

  const fakeLesson = {
    name: 'fake name',
    date: moment('2019-07-10'),
    description: 'fake description'
  }

  it('should match snapshot', () => {
    expect(createComponent({
      lesson: fakeLesson,
      lessonIndex: 1234
    })).toMatchSnapshot()
  })

  it('should show all infos', () => {
    const DATE_FORMAT = 'DD/MM/YYYY'
    const LESSON_INDEX = 4321

    const $wrapper = createComponent({
      lesson: fakeLesson,
      lessonIndex: LESSON_INDEX
    })

    expect($wrapper.text()).toContain(LESSON_INDEX + 1)
    expect($wrapper.text()).toContain(fakeLesson.name)
    expect($wrapper.text()).toContain(moment(fakeLesson.date).format(DATE_FORMAT))
  })

})
