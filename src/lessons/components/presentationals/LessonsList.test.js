import { shallowMount } from '@vue/test-utils'
import LessonsList from './LessonsList'

describe('LessonsList', () => {
  const createComponent = props => shallowMount(LessonsList, {
    propsData: props
  })

  it('should match snapshot', () => {
    expect(createComponent({
      lessons: [],
      isLoading: false,
      refresh: jest.fn()
    })).toMatchSnapshot()
  })

  it('should show loading then hide it and show lessons', () => {
    const fakeItem1 = {
      name: 'fake 1'
    }
    const fakeItem2 = {
      name: 'fake 2'
    }
    const lessons = []
    const refresh = jest.fn()

    const $wrapper = createComponent({
      lessons,
      isLoading: false,
      refresh
    })

    expect(refresh.mock.calls.length).toBe(1)

    $wrapper.setProps({ isLoading: true })

    expect($wrapper.find({ name: 'v-progress-circular' }).exists()).toBe(true)
    expect($wrapper.find({ name: 'LessonListItem' }).exists()).toBe(false)

    lessons.push(fakeItem1, fakeItem2)
    $wrapper.setProps({ isLoading: false })

    const $lessons = $wrapper.findAll({ name: 'LessonListItem' })

    expect($wrapper.find({ name: 'v-progress-circular' }).exists()).toBe(false)
    expect($lessons.length).toBe(2)
    expect($lessons.at(0).props('lesson')).toBe(fakeItem1)
    expect($lessons.at(0).props('lessonIndex')).toBe(0)
    expect($lessons.at(1).props('lesson')).toBe(fakeItem2)
    expect($lessons.at(1).props('lessonIndex')).toBe(1)
  })

})
