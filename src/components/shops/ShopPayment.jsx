import React, { useEffect, useState } from 'react';
import axios from 'axios';
const ShopPayment = () => {
  const [address, setAddress] = useState([]);
  // const [skeleton, setSkeleton] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:3300/address')
      .then((response) => {
        setAddress(response.data);
        // setSkeleton(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // if (skeleton) {
  //   return <Skeleton />;
  // }
  return (
    <div>
      <h2>Informasi Pembayaran</h2>
      <form>
        <div>
          <label htmlFor="fullName">Nama Lengkap:</label>
          <input type="text" id="fullName" name="fullName" placeholder="Masukkan Nama Lengkap" />
        </div>

        <div>
          <label htmlFor="phoneNumber">Nomor Telepon:</label>
          <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Masukkan Nomor Telepon" />
        </div>

        <div>
          <label htmlFor="address">Alamat:</label>
          <select id="address" name="address">
            <option value="alamat1">Alamat 1</option>
            <option value="alamat2">Alamat 2</option>
            <option value="alamat3">Alamat 3</option>
          </select>
        </div>

        <div>
          <label htmlFor="postalCode">Kode Pos:</label>
          <input type="text" id="postalCode" name="postalCode" placeholder="Masukkan Kode Pos" />
        </div>

        <button type="submit">Lanjutkan Pembayaran</button>
      </form>
    </div>
  );
};

export default ShopPayment;
