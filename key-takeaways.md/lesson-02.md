# Tìm hiểu về Git 

- Three stages

     - Working Directory (Red) : Các file mới hoặc file có thay đổi
     - Staging (Green) :Các file đưa vào vùng chuẩn bị commit
     - Repository : Các commit (dưới dạng phiên bản)

- Commit convention
     - chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
     - feat: thêm tính năng mới, test case mới
     - fix: sửa lỗi 1 test trước đó


# Javacript
    
## In ra màn hình

     console.log('nội dung');

     // có thể để nội dung trong ("",'',``)

## Biến, hằng

- Biến :
  
      Var <tên biến> = <giá trị>; // Phạm vi global, cho khai báo lại, sử dụng ít
   
      Let <tên biến> = <giá trị>; // Phạm vi block , không cho khai báo lại, sử dụng nhiều

- Hằng :

      const <tên hằng> = <giá trị>

## Data type

- Kiểu nguyên thuỷ (primitive types) :

  - Number : Số nguyên và số thực
  - String : Chuỗi ký tự
  - Boolean : Giá trị logic
  - Undefined
  - Null
  - Symbol
    BigInt

- Kiểu tham chiếu (reference types) :
  
   - Object

## Toán tử so sánh

    So sánh bằng : == và ===
    
    So sánh không bằng : !
    
    So sánh lớn hơn, nhỏ hơn : > , < , <= , >=

## Toán tử logic

    && (AND): trả về đúng nếu cả 2 vế của mệnh đề đúng
   
    || (OR): trả về đúng nếu một trong 2 vế của mệnh đề đúng

## Toán tử một ngôi

- Prefix: toán tử nằm ở phía trước - tăng trước, trả về sau
    
      ++x;
      --x;
- Postfix: toán tử nằm ở phía sau - trả về trước, tăng sau
  
      x++;
      x--;

## Toán tử toán học 
     +, -, *, /

## Câu điều kiện

      if (<điều kiện>) {
        // code...
    }

## Vòng lặp

    
      for (<điều kiện khởi tạo>; <điều kiện lặp>;     <cập nhật>) {
       // code
      }