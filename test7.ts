// 7. Có array object:

// - Viết hàm để tạo 1 mảng mới chưa tên tất cả con vật
// - Viết hàm để tạo 1 mảng mới để lọc những con vật có cân nặng dưới 150
// - Viết hàm để tính tổng cân nặng của tất cả con vật
// - Viết hàm để tính tổng cân nặng của tất cả con vật có cân nặng dưới 150
// * Có thể sử dụng hàm có sẵn như map. filter, reduce,...

const animals = [
    {
        name: "cat",
        size: "small",
        weight: 5
    },
    {
        name: "dog",
        size: "small",
        weight: 10
    },
    {
        name: "lion",
        size: "medium",
        weight: 150
    },
    {
        name: "elephant",
        size: "big",
        weight: 5000
    }
  ];
  // - Viết hàm để tạo 1 mảng mới chưa tên tất cả con vật
  const nameAnimals: string[] = animals.map(animals => animals.name);
  console.log("Ten cac con vat la: " + nameAnimals);
  
  // Viết hàm để tạo 1 mảng mới để lọc những con vật có cân nặng dưới 150
  const weightAnimals:typeof animals = animals.filter( animals => animals.weight <150);
  console.log ("Nhung con vat co can nang duoi 150 kg la: " , weightAnimals);
  
  // - Viết hàm để tính tổng cân nặng của tất cả con vật
  const sumWeight = animals.reduce((sum, animals) => sum + animals.weight,0);
  console.log("Tong can nang cua tat ca cac con vat la:",sumWeight, "kg");
  
  // - Viết hàm để tính tổng cân nặng của tất cả con vật có cân nặng dưới 150
  
  const sumWeight2 = weightAnimals.reduce((sum,animals) => sum  + animals.weight,0);
  console.log("Tong can nang cua tat ca cac con vat duoi 150 la:", sumWeight2, "kg");