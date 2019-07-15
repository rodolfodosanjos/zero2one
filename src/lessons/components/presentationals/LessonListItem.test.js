import { mount } from '@vue/test-utils'
import LessonListItem from './LessonListItem'

describe('LessonListItem', () => {
  const createComponent = props => mount(LessonListItem, {
    propsData: props,
    stubs: [ 'LessonDialog' ]
  })

  const fakeLesson = {
    name: 'fake name',
    description: 'fake description'
  }

  it('should match snapshot', () => {
    expect(createComponent({
      lesson: fakeLesson
    })).toMatchSnapshot()
  })

  it('should show all infos', () => {
    const $wrapper = createComponent({
      lesson: fakeLesson
    })

    expect($wrapper.text()).toContain(fakeLesson.name)
    expect($wrapper.text()).toContain(fakeLesson.description)
  })

})
