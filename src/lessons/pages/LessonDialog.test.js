import { shallowMount } from '@vue/test-utils'
import LessonDialog from './LessonDialog'

describe('LessonDialog', () => {
  const createComponent = (props = {
    lesson: {}
  }) =>
    shallowMount(LessonDialog, {
      propsData: props
    })

  it('should pass right props to lesson content', () => {
    const fakeLesson = {
      name: 'fake name'
    }
    const $wrapper = createComponent({
      lesson: fakeLesson
    })

    $wrapper.vm.open()

    const $LessonContent = $wrapper.find( { name: 'LessonContent' } )
    expect($LessonContent.props('lesson')).toBe(fakeLesson)
  })

  describe('open and close dialog', () => {

    it('should open dialog', () => {
      const $wrapper = createComponent()
      const $dialog = $wrapper.find( { name: 'v-dialog' } )

      expect($dialog.vm.value).toBe(false)

      $wrapper.vm.open()

      expect($dialog.vm.value).toBe(true)
    })

    it('should close dialog', () => {
      const $wrapper = createComponent()
      const $dialog = $wrapper.find( { name: 'v-dialog' } )

      $wrapper.setData( { isOpen: true } )

      expect($dialog.vm.value).toBe(true)

      $wrapper.vm.close()

      expect($dialog.vm.value).toBe(false)
    })

  })

})
