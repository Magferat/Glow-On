import React from 'react';

const DynamicRatings = ({ value }) => {
    return (
        <div>
            {
                [...Array(5)].map((ignore, ind) => {
                    return (
                        <span className="rate" key={ind}>
                            <i
                                className={
                                    value >= ind + 1
                                        ? 'fas fa-star'
                                        : value >= ind + 0.5
                                            ? 'fas fa-star-half-alt'
                                            : 'far fa-star'
                                }
                            ></i>
                        </span>
                    )
                })
            }
        </div>
    );
};

export default DynamicRatings;