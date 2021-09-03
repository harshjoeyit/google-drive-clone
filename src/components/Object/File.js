import React from 'react'
import file_img from '../../images/file.png'
import './styles.css'

export default function File() {
    return (
        <div className='object_container'>
            <div className='file_img_container'>
                <img src={file_img} alt="file_icon" />
                <p className='tag'>.pdf</p>
            </div>
            <p className='object_name'>Resume.pdf</p>
        </div>
    )
}
