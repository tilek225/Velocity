import React, { useState } from 'react'
import './some.css'
import SomeCard from './SomeCard'

const Some = () => {
    const [tab, setTab] = useState(1)
    return (
        <section className='some'>
            <div className='container'>
                <h2 className='some__title'>
                    Tab Section
                </h2>
                <p className='some__text'>
                    This is some text inside of a div block.
                </p>

                <div className='some__tabs'>
                    <button onClick={() => setTab(1)} className={`some__tabs-item ${tab === 1 && 'some__tabs-item-active'}`}>
                        Tab Button 1
                    </button>
                    <button onClick={() => setTab(2)} className={`some__tabs-item ${tab === 2 && 'some__tabs-item-active'}`}>
                        Tab Button 2
                    </button>
                    <button onClick={() => setTab(3)} className={`some__tabs-item ${tab === 3 && 'some__tabs-item-active'}`}>
                        Tab Button 3
                    </button>
                </div>

                {
                    tab === 1
                        ? <SomeCard title="Some Title Here" />
                        : tab === 2 ?
                            <SomeCard title="Some Title Here 2" />
                            :
                            <SomeCard title="Some Title Here 3" />

                }




            </div>
        </section>
    )
}

export default Some