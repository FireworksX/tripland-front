import React, { FC } from 'react'
import ProfilePanel from '~/panels/ProfilePanel'
import { PANEL_NAMES } from '~router/constants'
import CreateTravelerModal from '~/components/modals/CreateTravelerModal'
import { useStore } from '~/hooks/useStore'
import View from "~/components/View";
import ModalRoot from "~/components/ModalRoot";

interface ProfileView {
  id: string
}

const ProfileView: FC<ProfileView> = () => {
  const { profileStore } = useStore()

  const Modal = (
    <ModalRoot activeModal={profileStore.activeModal} onClose={() => profileStore.setActiveModal(null)}>
      <CreateTravelerModal id='createTraveler' />
    </ModalRoot>
  )

  return (
    <View activePanel={PANEL_NAMES.profileIndex} modal={Modal}>
      <ProfilePanel id={PANEL_NAMES.profileIndex} />
    </View>
  )
}

export default ProfileView
