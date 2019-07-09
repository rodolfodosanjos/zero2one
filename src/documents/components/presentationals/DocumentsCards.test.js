import { shallowMount } from '@vue/test-utils'
import DocumentsCards from './DocumentsCards'

describe('DocumentsCards', () => {
  const createComponent = props => shallowMount(DocumentsCards, {
    propsData: props,
  })

  it('should show loading then hide it and show documents', () => {
    const fakeDocument1 = {
      name: 'fake 1',
    };
    const fakeDocument2 = {
      name: 'fake 2',
    };
    const documents = [];
    const refresh = jest.fn();
    const download = jest.fn();

    const wrapper = createComponent({
      documents,
      isLoading: false,
      refresh,
      download,
    })

    expect(refresh.mock.calls.length).toBe(1);

    wrapper.setProps({ isLoading: true })

    expect(wrapper.find({ name: 'v-progress-circular' }).exists()).toBe(true)
    expect(wrapper.find({ name: 'DocumentCard' }).exists()).toBe(false)

    documents.push(fakeDocument1, fakeDocument2)
    wrapper.setProps({ isLoading: false })

    const $documents = wrapper.findAll({ name: 'DocumentCard' })

    expect(wrapper.find({ name: 'v-progress-circular' }).exists()).toBe(false)
    expect($documents.length).toBe(2)
    expect($documents.at(0).props('download')).toBe(download)
    expect($documents.at(1).props('download')).toBe(download)
  })

})