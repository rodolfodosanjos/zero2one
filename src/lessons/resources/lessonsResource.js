import moment from 'moment'

const lessonsExample = [ {
  id: '1',
  name: 'Aula 1 - Introdução',
  date: moment(),
  description: `
    **Introdução**
    * Perfil de programador
    * Cliente/servidor
    * WEB estática
    * FORMs com actions
    * Server side rendering (JSP)
    * Linguagens
    * Navegadores
    * NodeJS

    **HTML**
    * Conceito
    * Sintaxe básica
    * Tags básicas
    * Forms
    * Head
    * HTML5`
}, {
  id: '2',
  name: 'Aula 2 - CSS',
  date: moment(),
  description: `
    **CSS**
    * Conceito
    * Sintaxe básica
    * Seletores básicos
    * Propriedades básicas
    * Unidades de medida
    * Displays
    * Positions
    * Seletores avançados
    * Transitions
    * Animations`
} ]

export default {
  getAll: () =>
    new Promise(resolve => window.setTimeout(() => resolve(lessonsExample)), 2000)
}
