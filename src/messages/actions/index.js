import moment from 'moment'
import { GET_MESSAGES } from '@/messages/actions/messageActionTypes'
import { FINISHED_REFRESH_MESSAGES, STARTED_REFRESH_MESSAGES } from '@/messages/mutations/messageMutationTypes'

const exampleMsgs = [ {
  id: 1,
  title: 'API token',
  message: 'Este é seu token de API: 123456',
  avatar: 'https://scontent.fjoi2-1.fna.fbcdn.net/v/t1.0-9/62546796_2208087905906507_8897727135435718656_n.jpg?_nc_cat=102&_nc_oc=AQkPBD2y2WhphaJQNj9nwD-GxthJuzdngL3OfNsFvvUXPf-g_RfVg0G_beMSAQnDsQO1a2I-KMkcYGQiQx5uOCN7&_nc_ht=scontent.fjoi2-1.fna&oh=f52a46047dd86d567988082568b5fbfa&oe=5D7D2918',
  date: moment()
}, {
  id: 2,
  title: 'Aula 1',
  message: 'A aula 1 será adiada para semana seguinte',
  avatar: 'https://scontent.fjoi2-1.fna.fbcdn.net/v/t1.0-9/62546796_2208087905906507_8897727135435718656_n.jpg?_nc_cat=102&_nc_oc=AQkPBD2y2WhphaJQNj9nwD-GxthJuzdngL3OfNsFvvUXPf-g_RfVg0G_beMSAQnDsQO1a2I-KMkcYGQiQx5uOCN7&_nc_ht=scontent.fjoi2-1.fna&oh=f52a46047dd86d567988082568b5fbfa&oe=5D7D2918',
  date: moment().subtract(1, 'day')
} ]

export default {
  [GET_MESSAGES] ({ commit }) {
    commit(STARTED_REFRESH_MESSAGES)
    return window.setTimeout(() => commit(FINISHED_REFRESH_MESSAGES, exampleMsgs), 2000)
  }
}
