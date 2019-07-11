import { shallowMount } from '@vue/test-utils'
import App from './App'

describe('App', () => {
  const createComponent = () =>
    shallowMount(App, {
      stubs: [ 'router-view' ]
    })

  it('should match snapshot', () => {
    expect(createComponent()).toMatchSnapshot()
  })

})
