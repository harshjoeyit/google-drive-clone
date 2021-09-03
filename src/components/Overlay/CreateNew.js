import React from 'react'
import close_img from '../../images/close.png'
import './styles.css'

export default function CreateNew() {

    const handleChange = (e) => {

    }

    return (
        <div className='overlay_container'>
            <div className='img_container'>
                <img src={close_img} alt='close_btn' />
            </div>
            <div className='content'>
                <p className='heading'>Create new</p>
                <div className='object_type'>
                    <div className='item1 type_selected'>File</div>
                    <div className='item2'>Folder</div>
                </div>
                <input className='input' type='text' onChange={handleChange}/>
                <p className='error_msg'></p>
                {/* error message => File/Folder name already exist! */}
                <button>Create</button>
            </div>
        </div>
    )
}
