"use client";
import React from "react";
type Province = {
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
  data: Province[];
//   data: string;
};
const URL_PROVINCE = "https://api.property24.vn/api/1/LctProvince/GetAll?pageSize=100&pageNumber=1";
const Province = ({data}: propsData) => {
    // async function getProvince() {
    //     const response = await fetch(URL_PROVINCE);
    //     return response.json();
    //   }
    //   const provincePromise = await getProvince();
    //   const province = provincePromise.data.records;
    //   console.info("province", province);
  return (
    <div>
      <h3>Tỉnh</h3>
      <ul>
        {(data || []).map((el, idx) => (
          <li key={idx}>{el?.fullName}</li>
        ))}
        {/* {(province || []).map((el:any, idx:number) => (
          <li key={idx}>{el?.fullName}</li>
        ))} */}
      </ul>
    </div>
  );
}
export default Province
