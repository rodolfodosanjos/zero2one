const exampleDocs = [ {
  id: 1,
  name: 'example doc 1',
  fileName: 'doc.jpg',
  description: 'example doc 1 taken from Google Images to use as an example',
  imgUrl: 'https://www.imtrecruitment.org.uk/file/image/media/5bb20b3de5260_Evidence_of_founation_competence_signatory_guide_screenshot.JPG',
  url: 'https://www.imtrecruitment.org.uk/file/image/media/5bb20b3de5260_Evidence_of_founation_competence_signatory_guide_screenshot.JPG'
}, {
  id: 2,
  name: 'example doc 2',
  fileName: 'doc2.jpg',
  description: 'example doc 2 taken from Google Images to use as an example',
  imgUrl: 'https://data2.unhcr.org/images/documents/big_bc0b4d5fb6ee8dce463f75add75aeee8e1f9acff.jpg',
  url: 'https://data2.unhcr.org/images/documents/big_bc0b4d5fb6ee8dce463f75add75aeee8e1f9acff.jpg'
} ]

export default {
  getFromLesson: () =>
    new Promise(resolve => window.setTimeout(() => resolve(exampleDocs)), 2000)
}
