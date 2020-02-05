import React from 'react';
import { useSelector } from 'react-redux';

export default function Loading(){

    
    const isLoading = useSelector(state => state.loading);

    return(
        <>
        {isLoading && (
            <div className="loading">
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        )}
        </>
    )
}