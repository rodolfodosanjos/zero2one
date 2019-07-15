import { mount } from '@vue/test-utils'
import MessageListItem from './MessageListItem'

describe('MessageListItem', () => {
  const createComponent = props => mount(MessageListItem, {
    propsData: props
  })

  const fakeMessage = {
    avatar: 'test.jpg',
    title: 'fake title',
    message: 'fake message'
  }

  it('should match snapshot', () => {
    expect(createComponent({
      message: fakeMessage
    })).toMatchSnapshot()
  })

  it('should show all infos', () => {
    const $wrapper = createComponent({
      message: fakeMessage
    })

    expect($wrapper.text()).toContain(fakeMessage.title)
    expect($wrapper.text()).toContain(fakeMessage.message)
    expect($wrapper.find({ name: 'v-img' }).props('src')).toBe(fakeMessage.avatar)
  })

})
