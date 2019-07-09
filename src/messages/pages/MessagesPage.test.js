import { shallowMount } from '@vue/test-utils'
import MessagesPage from './MessagesPage'

describe('MessagesPage', () => {
  const createComponent = () => shallowMount(MessagesPage)

  it('should render normally', () => {
    createComponent()

    expect(true).toBe(true)
  })

})