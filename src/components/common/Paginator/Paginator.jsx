import React, {useState} from 'react';
import s from './Paginator.module.css'
const Paginator = ({currentPage,onPageChange,totalCount,pageSize,portionSize = 10}) => {

    let pagesCount = Math.ceil(totalCount / pageSize);

    let pages=[];
    for(let i = 1; pagesCount >= i; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [currentPortion, setCurrentPortion] = useState(1);
    let leftPortion = (currentPortion - 1) * portionSize + 1 ;
    let rightPortion = currentPortion * portionSize;

    return (
        <div className={s.pageNumbers}>
            {currentPortion > 1 &&
            <button onClick={()=>{setCurrentPortion(currentPortion - 1)}}>prev</button> }
        {pages
            .filter( p => p >= leftPortion && p <= rightPortion)
            .map( (p) =>
                <span className={currentPage === p && s.currentPage }
                      onClick = { () => {onPageChange(p)} }>{p + ' '}</span>
            )}
            {portionCount > currentPortion &&
            <button onClick={()=> {setCurrentPortion(currentPortion + 1)}}>next</button> }
        </div>
)
};

export default Paginator;