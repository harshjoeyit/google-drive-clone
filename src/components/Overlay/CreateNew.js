import React, {useState} from 'react'
import close_img from '../../images/close.png'
import './styles.css'

export default function CreateNew({onCreate, onClose, error}) {

    const [state, setState] = useState({
        name: '',
        type: 'file'
    })

    const handleTypeChange = (type) => {
        setState({
            ...state, 
            type
        })
    }

    const handleNameChange = (e) => {
        setState({
            ...state, 
            name: e.target.value
        })
    }

    const handleSubmit = () => {
        onCreate(state.name, state.type)
    }

    return (
        <div className='overlay_container'>
            <div className='img_container' onClick={onClose}>
                <img src={close_img} alt='close_btn' />
            </div>
            <div className='content'>
                <p className='heading'>Create new</p>
                <div className='object_type'>
                    <div 
                        className={`item1 ${state.type==='file' ? ' type_selected' : ' '}`}
                        onClick={() => handleTypeChange('file')}
                    >
                        File
                    </div>
                    <div 
                        className={`item2 ${state.type==='folder' ? ' type_selected' : ' '}`}
                        onClick={() => handleTypeChange('folder')}
                    >
                        Folder
                    </div>
                </div>
                <input className='input' type='text' onChange={handleNameChange}/>
                <p className='error_msg'>{error}</p>
                {/* error message => File/Folder name already exist! */}
                <button onClick={handleSubmit}>
                    Create
                </button>
            </div>
        </div>
    )
}
