import { GET_DOCUMENTS } from '@/documents/actions/documentActionTypes'
import { REFRESH_DOCUMENTS } from '@/documents/mutations/documentMutationTypes'

const exampleDocs = [{
  id: 1,
  name: 'example doc 1',
  description: 'example doc 1 taken from Google Images to use as an example',
  url: 'https://www.imtrecruitment.org.uk/file/image/media/5bb20b3de5260_Evidence_of_founation_competence_signatory_guide_screenshot.JPG',
}, {
  id: 2,
  name: 'example doc 2',
  description: 'example doc 2 taken from Google Images to use as an example',
  url: 'https://data2.unhcr.org/images/documents/big_bc0b4d5fb6ee8dce463f75add75aeee8e1f9acff.jpg',
}]

export default {
  [GET_DOCUMENTS] ({ commit }) {
    return Promise.resolve(commit(REFRESH_DOCUMENTS, exampleDocs))
  }
}