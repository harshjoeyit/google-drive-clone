import React from 'react'
import './styles.css'

export default function Breadcrumb({items, onItemClick}) {
    return (
        <div className="bread_crumbs">
        {
            items.length === 0
            ? <p>No items</p>
            : items.map((text, idx) => (
                <div className='item' key={idx}>
                    <span 
                        className={idx == items.length-1 ? 'current' : 'not_current'}
                        onClick={() => onItemClick(idx)}
                    >
                        {text}
                    </span>
                    {
                        (idx !== items.length-1) 
                            && 
                            <span>/</span>
                    }
                </div>
            ))
        }
        </div>
    )
}

