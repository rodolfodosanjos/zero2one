import { shallowMount } from '@vue/test-utils'
import MessagesPage from './MessagesPage'

describe('MessagesPage', () => {
  const createComponent = () => shallowMount(MessagesPage)

  it('should match snapshot', () => {
    expect(createComponent()).toMatchSnapshot()
  })

})
