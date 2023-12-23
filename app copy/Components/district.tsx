"use client";
import React from "react";
type District = {
  districtName: string;
  districtCode: string;
  englishName: string;
  fullName: string;
  englishFullName: string;
  nameCode: string;
  provinceCode: string;
  province: null;
  status: number;
  id: number;
};
type propsData = {
  data: District[];
//   data: string;
};

const URL_DISTRICT =
  "https://api.property24.vn/api/1/LctDistrict/GetAll?pageSize=100&pageNumber=1";
const District = ({ data }: propsData) => {
//   async function getDistrict() {
//     const response = await fetch(URL_DISTRICT);
//     return response.json();
//   }
//   const districtPromise = await getDistrict();
//   const district = districtPromise.data.records;
//   console.info("district", district);
  return (
    <div>
      <h3>Quận</h3>
      <ul>
        {(data || []).map((el, idx) => (
          <li key={idx}>{el?.fullName}</li>
        ))}
        {/* {(district || []).map((el:any, idx:number) => (
          <li key={idx}>{el?.fullName}</li>
        ))} */}
      </ul>
    </div>
  );
};
export default District;
