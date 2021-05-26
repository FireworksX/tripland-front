import { types } from '@mozaikjs/core'
import { notificationModel, notificationModelType } from '~/store/models/notificationModel'

interface notificationsStoreProps {
  list: notificationModelType[]
}

export const notificationsStoreModel = types.model<notificationsStoreProps>('notificationsStore', {
  list: types.array(notificationModel)
})

export const notificationsStoreInstance = notificationsStoreModel.create({
  list: [
    notificationModel.create({
      title: 'Приближается поездка',
      text: 'Через 2 дня начинается Ваш маршрут “Москва — 24 апреля - 25 апреля”',
      checked: false
    }),
    notificationModel.create({
      title: 'Приближается поездка',
      text: 'Через 2 дня начинается Ваш маршрут “Москва — 24 апреля - 25 апреля”',
      checked: false
    }),
    notificationModel.create({
      title: 'Приближается поездка',
      text: 'Через 2 дня начинается Ваш маршрут “Москва — 24 апреля - 25 апреля”',
      checked: true
    }),
    notificationModel.create({
      title: 'Приближается поездка',
      text: 'Через 2 дня начинается Ваш маршрут “Москва — 24 апреля - 25 апреля”',
      checked: false
    })
  ]
})
