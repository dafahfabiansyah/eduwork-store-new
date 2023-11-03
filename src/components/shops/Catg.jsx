import React from 'react';

const Catg = () => {
  const data = [
    {
      cateImg: './images/category/cat-1.png',
      cateName: 'Laptop',
    },
    {
      cateImg: './images/category/cat-2.png',
      cateName: 'Handphone',
    },
    {
      cateImg: './images/category/cat-1.png',
      cateName: 'Food',
    },
    {
      cateImg: './images/category/cat-2.png',
      cateName: 'Drink',
    },
    {
      cateImg: './images/category/cat-1.png',
      cateName: 'Daily',
    },
  ];
  return (
    <>
      <div className="category">
        <div className="chead d_flex">
          <h1>Category</h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
        {/* <div className="box box2">
          <button>View All Brands</button>
        </div> */}
      </div>
    </>
  );
};

export default Catg;
