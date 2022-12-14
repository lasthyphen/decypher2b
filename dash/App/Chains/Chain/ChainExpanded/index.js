import React, { useState, useEffect } from 'react'
import link from '../../../../../resources/link'

import Connection from '../Connection'

import { SubmitChainButton, ChainHeader, EditChainColor, EditChainName, EditChainSymbol, EditChainId, EditTestnet, EditChainExplorer, ChainFooter } from '../Components'

export default (props) => {
  // props
  const { id, name, type, explorer, symbol, isTestnet, filter, on, connection, primaryColor, icon, price } = props
  const chain = { id, type, name, isTestnet, symbol, explorer, primaryColor }

  // state
  const [currentColor, setPrimaryColor] = useState(primaryColor)
  const [currentName, setName] = useState(name)
  const [currentSymbol, setSymbol] = useState(symbol)
  const [currentExplorer, setExplorer] = useState(explorer)
  const [currentTestnet, setTestnet] = useState(isTestnet)

  // effects
  useEffect(() => {
    const updatedChain = { id, type, name: currentName, primaryColor: currentColor, isTestnet: currentTestnet, symbol: currentSymbol, explorer: currentExplorer }
    link.send('tray:action', 'updateNetwork', chain, updatedChain)
  }, [currentColor, currentName, currentSymbol, currentExplorer, currentTestnet])

  useEffect(() => {
    link.send('tray:action', 'setChainColor', chain.id, currentColor)
  }, [currentColor])

  const isMainnet = id === 1

  return (
    <div key={'expandedChain'} className='network cardShow'>
      <ChainHeader 
        type={type}
        id={id}
        primaryColor={currentColor}
        icon={icon}
        name={currentName}
        on={on}
        showToggle={true}
      />
      <EditChainColor 
        currentColor={primaryColor} 
        onChange={setPrimaryColor}
      />
      <EditChainName
        currentName={currentName}
        onChange={setName}
      />
      <EditChainExplorer
        currentExplorer={currentExplorer}
        onChange={setExplorer}
      />
      <EditChainSymbol
        currentSymbol={currentSymbol}
        onChange={setSymbol}
      />
      <div className='chainRow'>
        <ChainFooter
          symbol={symbol}
          price={price}
        />
      </div>
      {!isMainnet && (
        <EditTestnet
          testnet={currentTestnet}
          onChange={setTestnet}
        />
      )}
      <div className='chainModules'>
        <Connection expanded={true} connection={connection} {...chain} />
      </div>
      {!isMainnet ? (
        <div className='chainRow chainRowRemove'>
          <SubmitChainButton
            text='Remove Chain'
            enabled={true}
            textColor={'var(--bad)'}
            onClick={() => {
              const confirmAction = { view: 'notify', data: { notify: 'confirmRemoveChain', notifyData: { chain } } }
              link.send('tray:action', 'navDash', confirmAction)
            }}
          />
        </div>
      ) : <div style={{ height: '8px' }} />}
    </div>
  )
}
