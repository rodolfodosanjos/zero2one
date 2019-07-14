import { shallowMount } from '@vue/test-utils'
import LessonsPage from './LessonsPage'

describe('LessonsPage', () => {
  const createComponent = () => shallowMount(LessonsPage)

  it('should match snapshot', () => {
    expect(createComponent()).toMatchSnapshot()
  })

})
