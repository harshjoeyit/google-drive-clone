import React from 'react'
import folder_img from '../../images/folder.png'
import './styles.css'

export default function File() {
    return (
        <div className='object_container'>
            <div className='folder_img_container'>
                <img src={folder_img} alt="folder_icon" />
            </div>
            <p className='object_name'>Photos</p>
        </div>
    )
}
