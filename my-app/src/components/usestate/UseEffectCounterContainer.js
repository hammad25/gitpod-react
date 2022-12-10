import React, {useState} from 'react'
import UseEffectsCounter from './UseEffectsCounter'

function UseEffectCounterContainer() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=> {
            setDisplay(!display)
        }}>
            Toggle Display
        </button>
        {display && <UseEffectsCounter/>}
    </div>
  )
}

export default UseEffectCounterContainer