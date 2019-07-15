import { mount } from '@vue/test-utils'
import DocumentCard from './DocumentCard'

describe('DocumentCard', () => {
  const createComponent = props => mount(DocumentCard, {
    propsData: props
  })

  const fakeDocument = {
    name: 'fake 1',
    description: 'fake description',
    imgUrl: 'fakeurl.jpg'
  }

  it('should match snapshot', () => {
    expect(createComponent({
      document: fakeDocument,
      download: jest.fn()
    })).toMatchSnapshot()
  })

  it('should show all infos', () => {
    const $wrapper = createComponent({
      document: fakeDocument,
      download: jest.fn()
    })

    expect($wrapper.text()).toContain(fakeDocument.name)
    expect($wrapper.text()).toContain(fakeDocument.description)
    expect($wrapper.find({ name: 'v-img' }).props('src')).toBe(fakeDocument.imgUrl)
  })

  it('should download document on button click', () => {
    const download = jest.fn()
    const $wrapper = createComponent({
      document: fakeDocument,
      download
    })
    $wrapper.find('button').trigger('click')

    expect(download.mock.calls.length).toBe(1)
    expect(download.mock.calls[0][0]).toBe(fakeDocument)
  })

})
