import { shallowMount } from '@vue/test-utils'
import UserPage from './UserPage'

describe('UserPage', () => {
  const createComponent = () => shallowMount(UserPage)

  it('should match snapshot', () => {
    expect(createComponent()).toMatchSnapshot()
  })

})
