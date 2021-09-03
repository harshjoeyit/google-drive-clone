import React from 'react'
import close_img from '../../images/close.png'
import './styles.css'

export default function Rename() {

    const handleChange = (e) => {

    }

    return (
        <div className='overlay_container'>
            <div className='img_container'>
                <img src={close_img} alt='close_btn' />
            </div>
            <div className='content'>
                <p className='heading'>Rename</p>
                <input type='text error_input' onChange={handleChange}/>
                <p className='error_msg'></p>
                <button>Rename</button>
            </div>
        </div>
    )
}
