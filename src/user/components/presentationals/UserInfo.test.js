import { shallowMount } from '@vue/test-utils'
import UserInfo from './UserInfo'

describe('UserInfo', () => {
  const createComponent = props => shallowMount(UserInfo, {
    propsData: props
  })

  it('should show loading then hide it and show user info', () => {
    const fakeUser = {
      name: 'fake 1',
      profile: {
        name: 'admin'
      }
    }
    const refresh = jest.fn()

    const wrapper = createComponent({
      user: {
        profile: {}
      },
      isLoading: false,
      refresh
    })

    expect(refresh.mock.calls.length).toBe(1)

    wrapper.setProps({ isLoading: true })

    expect(wrapper.find({ name: 'v-progress-circular' }).exists()).toBe(true)
    expect(wrapper.text()).not.toContain(fakeUser.name)
    expect(wrapper.text()).not.toContain(fakeUser.profile.name)

    wrapper.setProps({ isLoading: false })
    wrapper.setProps({ user: fakeUser })

    expect(wrapper.find({ name: 'v-progress-circular' }).exists()).toBe(false)
    expect(wrapper.text()).toContain(fakeUser.name)
    expect(wrapper.text()).toContain(fakeUser.profile.name)
  })

})
