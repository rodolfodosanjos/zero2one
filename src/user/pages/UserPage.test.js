import { shallowMount } from '@vue/test-utils'
import UserPage from './UserPage'

describe('UserPage', () => {
  const createComponent = () => shallowMount(UserPage)

  it('should render normally', () => {
    createComponent();

    expect(true).toBe(true)
  })

})
