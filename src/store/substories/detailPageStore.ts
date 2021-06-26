import { types } from '@mozaikjs/core'
import { Instance } from '@mozaikjs/core/build/treeNode'
import { reviewModel, reviewModelType } from '~/store/models/reviewModel'

interface addressModelProps {
  title: string
  lat?: number
  lon?: number
}

interface detailPageStoreProps {
  title: string
  description: string
  gallery: string[]
  isLiked: boolean
  address: Instance<addressModelProps>
  includes: string[]
  excludes: string[]
  languages: string[]
  phone: string
  reviews: reviewModelType[]
  rating?: number
}

interface detailPageStoreActions {
  toggleLike(): Promise<boolean>
}

const addressModel = types.model<addressModelProps>('addressModel', {
  title: types.string,
  lat: types.maybe(types.number),
  lon: types.maybe(types.number)
})

export const detailPageStoreModel = types
  .model<detailPageStoreProps, detailPageStoreActions>('detailPageStore', {
    title: types.string,
    description: types.string,
    gallery: types.array(types.string),
    isLiked: types.boolean,
    address: addressModel,
    includes: types.array(types.string),
    excludes: types.array(types.string),
    languages: types.array(types.string),
    phone: types.string,
    reviews: types.array(reviewModel),
    rating: types.maybe(types.number)
  })
  .actions({
    toggleLike({ dispatch, state }) {
      return new Promise(resolve => {
        setTimeout(() => {
          dispatch({
            isLiked: !state().isLiked
          })
          resolve(state().isLiked)
        }, 1500)
      })
    }
  })

export const detailPageStoreInstance = detailPageStoreModel.create({
  title: 'Останкинская телебашня',
  description:
    'Останкинская телебашня — не просто визитная карточка столицы, это памятник грандиозности советской эпохи и одновременно взгляд в будущее российского телевидения. С самой своей постройки телебашня в Останкино стала одним из символов',
  gallery: [
    'https://sun9-28.userapi.com/impg/PjmO-ii1690Ka9wsiTFwHNc70tigQEoSQ_Ht7w/ox6vVUsE6Bc.jpg?size=1024x778&quality=96&sign=1ce254557c1c38531563296b212f750a&type=album',
    'https://sun9-72.userapi.com/impg/xTsvxFweO90HuC061dqdL8qEblntQi33hobK5w/gApQBmLiLZQ.jpg?size=1024x768&quality=96&sign=da5be9dcfb77dffda0526dc51389e012&type=album',
    'https://sun9-17.userapi.com/impg/sJEX5YVyRVS1v0IKsvfIHgaDuyLV8pJH6ksxZA/sct2N97dGhg.jpg?size=1024x768&quality=96&sign=c3e6085164e3532b9d9cf855a2f49a19&type=album'
  ],
  isLiked: false,
  address: addressModel.create({
    title: 'ул. Академика Королёва, 15, корп. 1',
    lat: 0,
    lon: 0
  }),
  includes: [],
  excludes: [],
  languages: [],
  phone: '+7 (495) 926-61-11',
  reviews: new Array(23).fill(null).map(() => reviewModel.create({
    avatar: '',
    name: 'Arthur',
    text: 'Завтрак. Переезд в «моравскую Венецию» ТЕЛЬЧ – город-музей под открытым небом. Транзит по территории Чехии (~290 км). По прибытии прогулка по городу: Захариева площадь с «гирляндой» из разноцветных фасадов домов, Тельчский замок, часовня Всех Святых и т.д. Переезд в замок ВРАНОВ-НАД-ДЫЕЙ, который прошел путь от укрепленной цитадели до роскошной резиденции. Транзит по территории Чехии (~50 км). По дороге (за доп. плату     10 €) остановка в ЙИНДРЖИХУВ-ГРАДЕЦ: Замок на скале над рекой Нежаркой, Площадь Мира, Храм Успения Богородицы и т.д. По прибытии посещение замка (билет от 10 €). Транзит по территории Чехии (~100 км). Прибытие в транзитный отель. Ночь в отеле.',
    date: '2021-06-27'
  })),
  rating: 4.7
})
