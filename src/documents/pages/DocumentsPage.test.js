import { shallowMount } from '@vue/test-utils'
import DocumentsPage from './DocumentsPage'

describe('DocumentsPage', () => {
  const createComponent = () => shallowMount(DocumentsPage)

  it('should not crash', () => {
    createComponent()

    expect(true).toBe(true)
  })

})
