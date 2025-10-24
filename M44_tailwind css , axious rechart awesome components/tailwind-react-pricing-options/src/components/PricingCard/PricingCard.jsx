import React from 'react';

const PricingCard = ({pricing}) => {
    // console.log(pricing)
    return (
        <div className='border bg-amber-600 rounded-2xl p-5'>
          {/* card header */}
          <div>
            <h1 className='text-5xl'>{pricing.name}</h1>
            <h4>{pricing.price}</h4>
          </div>
          {/* card body */}
          <div>
           <p>{pricing.description}</p>
          </div>
        <button class="btn w-full">Subscribe</button>
        </div>
    );
};

export default PricingCard;