//5. Viết hàm để trả về tổng của các phần từ trong mảng arrayA, các phần tử trong mảng arrayA là số nguyên, 
// arrayA được truyền từ tham số. VD: arrayA = [5, 2, 6, 3, 8]

function sumArray(arrayA: number[]) {
    let result: number = 0;
    for (let i = 0; i < arrayA.length; i++) {
      result += arrayA[i];
    }
    return result;
  }
  let arrayA: number[] = [5, 2, 6, 3, 8];
  let sum: number = sumArray(arrayA);
  console.log(sum);