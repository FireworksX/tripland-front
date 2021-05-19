import { types } from '@mozaikjs/core'

export type ProfileStoreModal = null | 'createTraveler'

interface profileStoreProps {
  activeModal: ProfileStoreModal
}

interface profileStoreActions {
  setActiveModal: (modal: ProfileStoreModal) => void
}

export const profileStoreModel = types
  .model<profileStoreProps, profileStoreActions>('profileStore', {
    activeModal: types.maybe(types.enumeration('createTraveler'))
  })
  .actions({
    setActiveModal({ dispatch }, modal) {
      dispatch({
        activeModal: modal
      })
    }
  })

export const profileStoreInstance = profileStoreModel.create({
  activeModal: 'createTraveler'
})
