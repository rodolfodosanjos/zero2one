import { shallowMount } from '@vue/test-utils'
import ZrPageTitle from './ZrPageTitle'

describe('ZrPageTitle', () => {
  const createComponent = () => shallowMount(ZrPageTitle)

  it('should render normally', () => {
    createComponent()

    expect(true).toBe(true)
  })

})