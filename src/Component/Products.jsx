import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Products({ finalProducts }) {
  let item = finalProducts.map((v, i) => {
    return <ProductItem v={v} key={i} />;
  });

  return (
    <div className="grid grid-cols-3 place-items-center gap-4">
      {item.length >= 1 ? (
        item
      ) : (
        <h4 className="text-[22px] font-[500]">No data found</h4>
      )}
    </div>
  );
}

function ProductItem({ v }) {
  return (
    <div className="shadow-lg text-center px-3 py-5">
      <img src={`${v.images[0]}`} />
      <h3 className="text-[18px] font-[500] mt-4">{v.title}</h3>
      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-2 items-left">
          <b>{v.price}</b>
          <img
            className="w-[15px] h-[15px]"
            src="https://uaelogos.ae/storage/3754/conversions/Dirham-thumb.png"
            alt=""
          />
        </div>
        <button
          className="bg-[orange] px-3 py-1 border-none rounded-sm text-sm text-[white]
"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
