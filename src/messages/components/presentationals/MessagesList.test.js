import { shallowMount } from '@vue/test-utils'
import MessagesList from './MessagesList'

describe('MessagesList', () => {
  const createComponent = props => shallowMount(MessagesList, {
    propsData: props
  })

  it('should match snapshot', () => {
    expect(createComponent({
      messages: [],
      isLoading: false,
      refresh: jest.fn()
    })).toMatchSnapshot()
  })

  it('should show loading then hide it and show messages', () => {
    const fakeMessage1 = {
      name: 'fake 1'
    }
    const fakeMessage2 = {
      name: 'fake 2'
    }
    const messages = []
    const refresh = jest.fn()

    const $wrapper = createComponent({
      messages,
      isLoading: false,
      refresh
    })

    expect(refresh.mock.calls.length).toBe(1)

    $wrapper.setProps({ isLoading: true })

    expect($wrapper.find({ name: 'v-progress-circular' }).exists()).toBe(true)
    expect($wrapper.find({ name: 'MessageListItem' }).exists()).toBe(false)

    messages.push(fakeMessage1, fakeMessage2)
    $wrapper.setProps({ isLoading: false })

    const $messages = $wrapper.findAll({ name: 'MessageListItem' })

    expect($wrapper.find({ name: 'v-progress-circular' }).exists()).toBe(false)
    expect($messages.length).toBe(2)
    expect($messages.at(0).props('message')).toBe(fakeMessage1)
    expect($messages.at(1).props('message')).toBe(fakeMessage2)
  })

})
