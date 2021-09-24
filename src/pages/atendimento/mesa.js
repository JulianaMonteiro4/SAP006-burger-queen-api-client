import React from 'react';

import ButtonMesas from '../../components/button/buttonMesas'
import ButtonPedi from '../../components/button/buttonPedi'
import ButtonResumo from '../../components/button/buttonResumo'
import Section from '../../components/section/section';

const Mesa = () => {
  return (
    <div>
      <div className="buttons">
        <ButtonMesas />
        <ButtonPedi />
        <ButtonResumo />
      </div>
      <Section />
    </div>
  )
}

export default Mesa;