# Javascript
## Câu điều kiện nâng cao

### break 
- thoát hoàn toàn khỏi vòng lặp ngay lập tức 

### continue 
-  bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo.

### if...else

- Thực thi code khác nhau cho trường hợp true và
false:

### if...else...if
- Kiểm tra nhiều điều kiện theo thứ tự

### Ternary operator (toán tử điều kiện)

-  Cách viết ngắn gọn cho if...else
```javascript
let age = 20;
let status = (age >= 18) ? "Người lớn" : "Trẻ em";
console.log(status); // "Người lớn"

```

### For ...in loop
- with Object
```javascript
let person = {
    myName : 'Thao',
    age : 26
};
for (let key in person){
    console.log(`key : ${key}`);
} // gia tri cua object
```
- with array
```javascript
const arr2 = ["Thao","Hang","Trang"];
for (let i in arr2){
    console.log(i) // arr.index
}
```

```javascript
const arr2 = ["Thao","Hang","Trang"];
for (let i of arr2){
    console.log(i)
} // giá trị
```

## Utils function

### strim()
- strim() : cắt khoảng trắng hai đầu
- strimLeft(): cắt bên trái
- trimRight(): cắt bên phải

### toLowerCase()
-  chuyển chuỗi thành chữ thường

### toUpperCase()
-  chuyển chuỗi thành chữ hoa

### includes(<substr>): 
- kiểm tra chuỗi bao gồm chuỗi con <substr>

### replace
- thay thế chuỗi : (<chuỗi cần thay>, <chuỗi mới>)

### split
- tách chuỗi : (<tách_bởi_gì>)

### substring
- lấy 1 chuỗi con từ điểm bắt đầu tới điểm kết thúc:(<điểm_bắt_đầu>, <điểm_kết_thúc>)

### indexOf
-  tìm vị trí của chuỗi con : (<chuỗi kí tự>)