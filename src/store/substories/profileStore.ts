import { types } from '@mozaikjs/core'
import { travelerModelModel, travelerModelModelType } from '~/store/models/travelerModel'

export type ProfileStoreModal = null | 'createTraveler'

interface profileStoreProps {
  activeModal: ProfileStoreModal
  travelers: travelerModelModelType[]
}

interface profileStoreActions {
  setActiveModal: (modal: ProfileStoreModal) => void
}

export const profileStoreModel = types
  .model<profileStoreProps, profileStoreActions>('profileStore', {
    activeModal: types.maybe(types.enumeration('createTraveler')),
    travelers: types.array(travelerModelModel)
  })
  .actions({
    setActiveModal({ dispatch }, modal) {
      dispatch({
        activeModal: modal
      })
    }
  })

export const profileStoreInstance = profileStoreModel.create({
  activeModal: null,
  travelers: [
    travelerModelModel.create({
      firstName: 'Arthur',
      lastName: 'Abeltinsh',
      birthDay: '1997-01-20'
    }),
    travelerModelModel.create({
      firstName: 'David',
      lastName: 'Mirov',
      birthDay: '2003-04-20'
    })
  ]
})
