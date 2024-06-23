import React from "react";

function Cards({item}) {
  return (
    <>
      <div className="mt-4 mb-6 my-3 p-3 hover:scale-105 duration-200">
        <div className="card w-92 bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">💲{item.price}</div>
              <div className="cursor-pointer rounded-lg border-[2px] hover:bg-pink-500 hover:text-white px-2 py-1">Buy now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
