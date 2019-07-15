import { shallowMount } from '@vue/test-utils'
import LessonDialog from './LessonDialog'

describe('LessonDialog', () => {
  const createComponent = () => shallowMount(LessonDialog)

  const createFakeLesson = () => ({
    name: 'fake name'
  })

  describe('open and close dialog', () => {

    it('should open dialog and set lesson', () => {
      const fakeLesson = createFakeLesson()
      const $wrapper = createComponent()
      const $dialog = $wrapper.find( { name: 'v-dialog' } )

      expect($dialog.vm.value).toBe(false)

      $wrapper.vm.open(fakeLesson)

      expect($dialog.vm.value).toBe(true)

      const $LessonContent = $wrapper.find( { name: 'LessonContent' } )
      expect($LessonContent.props('lesson')).toBe(fakeLesson)
    })

    it('should close dialog and clear lesson', () => {
      const fakeLesson = createFakeLesson()
      const $wrapper = createComponent()
      const $dialog = $wrapper.find( { name: 'v-dialog' } )

      $wrapper.setData( { isOpen: true } )
      $wrapper.setData( { lesson: fakeLesson } )

      expect($dialog.vm.value).toBe(true)

      $wrapper.vm.close()

      expect($dialog.vm.value).toBe(false)

      expect($wrapper.find( { name: 'LessonContent' } ).exists()).toBe(false)
      expect($wrapper.vm.lesson).toEqual({})
    })

  })

})
