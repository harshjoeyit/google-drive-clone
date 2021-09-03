import React from 'react'
import add_new from '../../images/add_new_button.png'
import './styles.css'

export default function AddNewBtn() {
    return (
        <div className='object_container'>
            <div>
                <img src={add_new} alt="add_new_button" />
            </div>
        </div>
    )
}
