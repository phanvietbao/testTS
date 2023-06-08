// 6. có object:
// salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
//   }
// Viết hàm để trả về tổng lương của các người trên

function sumSalaries(salaries:  {[key: string]: number}): number{
    let tongLuong : number = 0;
     for(let name in salaries){
        tongLuong += salaries[name];
     }
     return tongLuong;
  }
  let salaries: {[key: string]: number} = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  let tongLuong: number = sumSalaries(salaries);
  console.log("Tong luong la: "+ tongLuong);