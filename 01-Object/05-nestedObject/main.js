const product1 = {
    name: 'Water',
    distributor: {
      name: 'Giraffe Water Company',
      address: {
        street: 'Phetchaburi',
        subdistrict: 'Thanonphetchaburi',
        district: 'Ratchathewi',
        province: 'Bangkok'
      }
    }
  };

  console.log(product1.distributor.address.province);

  const product2 = {}

  console.log(product2.distributor?.address.province); // ใส่ ? เพื่อ <undefined>?.<key> >> ช่วยเช็คว่าข้างหน้าสามารถ dot ต่อได้ไหม