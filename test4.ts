// 4. Viết hàm tính S(n) = 1 + 2 + 3 + ... + n, n được truyền từ tham số.

function sumS(n : number){
    let result:number=0;
    for(let i=1; i<=n;i++){
      result+= i;
    }
    return result;
  }
  console.log(sumS(12));