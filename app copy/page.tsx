import Province from "./Components/province";
import District from "./Components/district";
const URL_PROVINCE =
  "https://api.property24.vn/api/1/LctProvince/GetAll?pageSize=100&pageNumber=1";
const URL_DISTRICT =
  "https://api.property24.vn/api/1/LctDistrict/GetAll?pageSize=100&pageNumber=1";

async function getProvince() {
  const response = await fetch(URL_PROVINCE);
  return response.json();
}

async function getDistrict() {
  const response = await fetch(URL_DISTRICT);
  return response.json();
}

export default async function Home() {
  const provincePromise = getProvince();
  const districtPromise = getDistrict();
  const [districtResponse, provinceResponse] = await Promise.all([
    districtPromise,
    provincePromise,
  ]);
  const province = provinceResponse.data.records
  const district = districtResponse.data.records
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Province 
        data={province}
        // data={'province'}
      />
      <District 
        data={district}
        // data={'district'}
      />
    </main>
  );
}
