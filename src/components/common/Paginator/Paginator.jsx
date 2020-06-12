import React from 'react';
import s from './Paginator.module.css'
const Paginator = ({currentPage,onPageChange,totalCount,pageSize}) => {

    let pagesCount = Math.ceil(totalCount / pageSize);
    let pages=[];
    for(let i = 1; pagesCount >= i; i++) {
        pages.push(i);
    }
    return (
        <div className={s.pageNumbers}>
        {pages.map( p =>
                <span className={currentPage === p && s.currentPage }
                      onClick = { () => {onPageChange(p)} }>{p + ' '}</span>
            )}
        </div>
)
};

export default Paginator;