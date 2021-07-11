import React, { FC } from 'react'
import { PANEL_NAMES } from '~router/constants'
import DetailPanel from "~/panels/DetailPanel";
import View from "~/components/View";

interface DetailViewProps {
  id: string
}

const DetailView: FC<DetailViewProps> = () => {
  return (
    <View activePanel={PANEL_NAMES.detailIndex}>
      <DetailPanel id={PANEL_NAMES.detailIndex}/>
    </View>
  )
}

export default DetailView
