import { shallowMount } from '@vue/test-utils'
import Logo from './Logo'

describe('Logo', () => {
  const createComponent = () => shallowMount(Logo)

  it('should match snapshot', () => {
    expect(createComponent()).toMatchSnapshot()
  })

})
