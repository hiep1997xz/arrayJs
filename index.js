//******//  concat được sử dụng khi bạn muốn gộp nhiều mảng lại với nhau, phương thức này sẽ trả về một mảng mới.
const iphone = ["ip3", "ip4", "ip5"]
const samsungs = ["galaxy s1", "galaxy s2", "galaxy s3"]
const nokia = ["n8", "n81", "n82"]

const phones = iphone.concat(samsungs, nokia)
console.log(phones);

//******//  copyWithin() được sử dụng khi bạn muốn trích một đoạn trong mảng và ghi đè vào một đoạn khác trong chính mảng đó.
  // Cú pháp: array.copyWithin(target, start, end). Trong đó:
  // target: Vị trí bắt đầu ghi đè.
  // start: Không bắt buộc, là vị trí bắt đầu của mảng muốn trích, mặc định là 0.
  // end: Không bắt buộc, là vị trí kết thúc của mảng muốn trích, mặc định là độ dài của mảng.

const fruits = ["Banana", "Orange", "Apple", "Mango", "strawberry"]
fruits.copyWithin(2)
console.log(fruits);

const samsung = ["galaxy s1", "galaxy s2", "galaxy s3", "galaxy s4", "galaxy s5"]
samsung.copyWithin(0, 2, 4)
console.log(samsung);

//******//  entries() sẽ trả về một Array iterator từ mảng ban đầu, có giá trị là một cặp [key, value].
const fruitsNew  = ["Banana", "Orange", "Apple", "Mango", "strawberry"]
const fruit = fruitsNew.entries()
for(let pair of fruit){
  console.log(pair);
}

//******// every() được sử dụng khi bạn muốn kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn một điều kiện do bạn đặt ra hay không
  // Cú pháp: array.every(function(currentValue, index, arr), thisValue). Trong đó:
  // function(currentValue, index, arr): function callback chạy cho mỗi phần tử mảng.
  // currentValue: Giá trị của phần tử hiện tại
  // index: Không bắt buộc, là vị trí của phần tử hiện tại
  // arr: Không bắt buộc, là mảng mà chứa phần tử hiện tại
  // thisValue: Không bắt buộc, nếu truyền vào thì nó sẽ được làm giá trị this của function, nếu không truyền this sẽ là undefined.

  // Kiểm tra mảng numbers có phải toàn số lẻ hay không?
const number=[1,2,3,4,5,6]
const isNumber = number.every(function(item){
  return item % 2 != 0
})

console.log(isNumber);

  // Kiểm tra numbers có phải mảng giảm dần hay không?
const numbers=[6,5,4,3,2,1]
const checkNumber = numbers.every(function(item, index, arr){
  if(index == 0){
    return true
  }else{
    return item < arr[index - 1]
  }
})
console.log(checkNumber);

//******// Phương thức fill() sẽ làm cho tất cả các phần tử trong mảng trở thành một giá trị giống nhau.
  // Cú pháp: array.fill(value, start, end). Trong đó:
  // value: Bắt buộc, là giá trị mà bạn muốn điền vào mảng
  // start: Không bắt buộc, là vị trí bắt đầu của việc điền vào mảng, mặc định là 0.
  // end: Không bắt buộc, là vị trí kết thúc của việc điền vào mảng, mặc định sẽ là array.length

const fruitArray = ["Banana", "Orange", "Apple", "Mango", "strawberry"]
fruitArray.fill("Banana")
console.log(fruitArray);

  // Điền 2 phần tử cuối cùng thành "Kiwi"
const newArray = ["Banana", "Orange", "Apple", "Mango", "strawberry"]
newArray.fill("kiwi", 3, 5)
console.log(newArray);

//******// filter() được sử dụng để lọc các phần tử trong mảng theo một điều kiện mà bạn đặt ra. Phương thức này sẽ trả về một mảng mới chứa các phần tử thỏa mãn điều kiện.
  // Cú pháp: array.filter(function(currentValue, index, arr), thisValue). Trong đó
  // function(currentValue, index, arr): function callback chạy cho mỗi phần tử mảng.
  // currentValue: Giá trị của phần tử hiện tại
  // index: Không bắt buộc, là vị trí của phần tử hiện tại
  // arr: Không bắt buộc, là mảng mà chứa phần tử hiện tại
  // thisValue: Không bắt buộc, nếu truyền vào thì nó sẽ được làm giá trị this của function, nếu không truyền this sẽ là undefined.

const tasks = [
  {title: "fix 1", status: 'done'},
  {title: "fix 2", status: 'todo'},
  {title: "fix 3", status: 'done'},
]

const doneTasks = tasks.filter((task) => {
  return task.status == 'done'
})
console.log(doneTasks);

//******// find() được sử dụng khi bạn muốn tìm phần tử mảng đầu tiên thỏa mãn điều kiện mà bạn đặt ra.
  // Cú pháp: array.find(function(currentValue, index, arr), thisValue). Trong đó
  // function(currentValue, index, arr): function callback chạy cho mỗi phần tử mảng.
  // currentValue: Giá trị của phần tử hiện tại
  // index: Không bắt buộc, là vị trí của phần tử hiện tại
  // arr: Không bắt buộc, là mảng mà chứa phần tử hiện tại
  // thisValue: Không bắt buộc, nếu truyền vào thì nó sẽ được làm giá trị this của function, nếu không truyền this sẽ là undefined.

  // Tìm user có id là 2
const users = [
  {id: 1, name:'A'},
  {id: 2, name:'B'},
  {id: 3, name:'C'},
]
const myId = 2;
const myInfo = users.find((user) => {
  return user.id == myId
})
console.log(myInfo);

  // Tìm phần tử đầu tiên trong mảng có giá trị lớn hơn 2
const idNumber = [1,2,3,4,5,6]
const checkMaxNumber = idNumber.find((number) => {
  return number > 2
})
console.log(checkMaxNumber);

//******// findIndex() được sử dụng khi bạn muốn tìm vị trí của phần tử mảng đầu tiên thỏa mãn điều kiện bạn đặt ra. (trả về chỉ số ptu dau tien)
  // Cú pháp: array.findIndex(function(currentValue, index, arr), thisValue). Trong đó
  // function(currentValue, index, arr): function callback chạy cho mỗi phần tử mảng.
  // currentValue: Giá trị của phần tử hiện tại
  // index: Không bắt buộc, là vị trí của phần tử hiện tại
  // arr: Không bắt buộc, là mảng mà chứa phần tử hiện tại
  // thisValue: Không bắt buộc, nếu truyền vào thì nó sẽ được làm giá trị this của function, nếu không truyền this sẽ là undefined.

  // Tìm user có id là 2
  const isUsers = [
    {id: 1, name:'A'},
    {id: 2, name:'B'},
    {id: 3, name:'C'},
  ]

  const isUserId = 2;
  const checkUser = isUsers.findIndex((u) => {
    return u.id == isUserId
  })
  console.log(checkUser);
  
  // Tìm phần tử đầu tiên trong mảng có giá trị lớn hơn 2
  const isArrayNumber = [1,2,3,4,5,6]
  const checkIsArrayNumber = isArrayNumber.findIndex((i) => {
    return i > 2
  })
  console.log(checkIsArrayNumber);

//******// forEach() được sử dụng khi bạn muốn duyệt các phần tử mảng.
  // Cú pháp: array.forEach(function(currentValue, index, arr), thisValue). Trong đó
  // function(currentValue, index, arr): function callback chạy cho mỗi phần tử mảng.
  // currentValue: Giá trị của phần tử hiện tại
  // index: Không bắt buộc, là vị trí của phần tử hiện tại
  // arr: Không bắt buộc, là mảng mà chứa phần tử hiện tại
  // thisValue: Không bắt buộc, nếu truyền vào thì nó sẽ được làm giá trị this của function, nếu không truyền this sẽ là undefined.

  const forEachUsers = [
    {id: 1, name:'A'},
    {id: 2, name:'B'},
    {id: 3, name:'C'}
  ]
  forEachUsers.forEach(function(forEachUser){
    console.log(forEachUser.name);
  })

//******// from() được sử dụng khi bạn muốn tạo ra một mảng mới từ một đối tượng dạng mảng
// Đối tượng dạng mảng là đối tượng có thuộc tính length và các phần tử thì được đánh vị trí (đánh index) hoặc các đối tượng khả duyệt như Map, Set
  // Cú pháp: Array.from(object, mapFunction(currentValue, index), thisValue). Trong đó:
  // object: Bắt buộc, là đối tượng bạn muốn chuyển sang dạng mảng.
  // mapFunction(currentValue, index): Không bắt buộc, là một function hoạt động tương tự như array.map, sẽ duyệt lần lượt trên từng phần tử mảng.
  // currentValue: Giá trị của phần tử hiện tại đang xét.
  // index: Vị trí của phần tử hiện tại đang xet.
  // thisValue: Không bắt buộc, là giá trị this khi thực hiện mapFunction

  const myArrr = Array.from("12345", function(item, index, arr){
    return item * 2
  })
  console.log(myArrr);

//******// includes() được sử dụng để kiểm tra một phần tử có xuất hiện trong mảng hay không. Phương thức này trả về true nếu phần tử mảng có
// xuất hiện trả về false nếu phần tử mảng không xuất hiện.

  // Cú pháp: array.includes(element, start). Trong đó
  // element: Bắt buộc, là giá trị của phần tử muốn kiểm tra.
  // start: Không bắt buộc, là vị trí bắt đầu tìm kiếm trong mảng, mặc định là 0.

  const arrFruits = ["Banana", "Orange", "Apple", "Mango"];
  const checkArrFruits = arrFruits.includes("Banana")
  console.log(checkArrFruits);

//******// indexOf() được sử dụng khi bạn muốn tìm vị trí (đầu tiên) của một phần tử trong mảng. Phương thức sẽ trả về -1 nếu không tìm thấy.
  // Cú pháp: array.indexOf(item, start). Trong đó:
  // item: Bắt buộc, giá trị của phần tử muốn tìm kiếm vị trí.
  // start: Không bắt buộc, là vị trí bắt đầu tìm kiếm, mặc định là 0.

  const fruitsArray = ["Banana", "Orange", "Apple", "Mango"];
  const checkFruitsArray = fruitsArray.indexOf("Apple")
  console.log(checkFruitsArray)

//******// isArray() được sử dụng để kiểm tra một đối tượng có phải là array hay không. Phương thức trả về true nếu đối tượng là array
// trả về false nếu không phải là array.
  const newArrayFruit = ["Banana", "Orange", "Apple", "Mango"];
  const isArrayFruit = Array.isArray(newArrayFruit)
  console.log(isArrayFruit);

//******// join() được sử dụng khi bạn muốn nối các phần tử của mảng thành một string.
  const arrIsFruits = ["Banana", "Orange", "Apple", "Mango"];
  const isListArray = arrIsFruits.join()
  console.log(isListArray);

//******//  keys() phương thức sẽ trả về một đối tượng Array Iterator với giá trị là các keys của mảng.
  const listFruits = ["Banana", "Orange", "Apple", "Mango"];
  const lF = listFruits.keys()
  for(x of lF){
    console.log(x)
  }

//******// lastIndexOf() được sử dụng khi bạn muốn tìm kiếm vị trí cuối cùng của một phần tử trong mảng mà bạn truyền vào
  //Phương thức trả về -1 nếu không tìm thấy.

  //   Cú pháp: array.lastIndexOf(item, start). Trong đó:
  // item: Bắt buộc, giá trị của phần tử muốn tìm kiếm vị trí.
  // start: Không bắt buộc, là vị trí bắt đầu tìm kiếm, mặc định là 0.

  const listNewFr = ["Banana", "Orange", "Apple", "Mango"];
  const lNF = listNewFr.lastIndexOf("Apple")
  console.log(lNF);

//******// map() được sử dụng khi bạn muốn làm thay đổi giá trị của các phần tử trong mảng theo một logic nào đó.
   //Logic được thể hiện dưới dạng một callback, giá trị trả về của callback sẽ là giá trị mới cho phần tử mảng tương ứng.

  //  Cú pháp: array.map(function(currentValue, index, arr), thisValue). Trong đó:
  // function(currentValue, index, arr): function callback chạy cho mỗi phần tử mảng.
  // currentValue: Giá trị của phần tử hiện tại
  // index: Không bắt buộc, là vị trí của phần tử hiện tại
  // arr: Không bắt buộc, là mảng mà chứa phần tử hiện tại
  // thisValue: Không bắt buộc, nếu truyền vào thì nó sẽ được làm giá trị this của function, nếu không truyền this sẽ là undefined.

  const isNum = [1,2,3,4,5]
  const checkIsNum = isNum.map((item) => {
    return item * 2
  })
  console.log(checkIsNum);

//******// pop() sẽ xóa phần tử cuối cùng trong mảng, đồng thời trả về phần tử vừa xóa.
const listNewFruit = ["Banana", "Orange", "Apple", "Mango"];
const listF = listNewFruit.pop()
console.log(listF);

//******// push() được sử dụng để thêm một phần tử vào cuối mảng, đồng thời trả về độ dài của mảng.
const listNewFrui = ["Banana", "Orange", "Apple", "Mango"];
const listNF = listNewFrui.push("Kiwi")
console.log(listNF);

//******//reduce() được sử dụng khi bạn muốn thực thi một callback lên từng phần tử (từ trái qua phải) với một biến 
  //được “tích lũy” để trả về một giá trị duy nhất.

  // Cú pháp: array.reduce(function(total, currentValue, currentIndex, arr), initialValue). Trong đó:
  // function(total, currentValue, index, arr): Bắt buộc, là callback sẽ thực thi trên từng phần tử mảng.
  // total: Bắt buộc, là giá trị của tham số initialValue trong lần chạy đầu tiên, hoặc là giá trị trả về của callback này ở phần tử trước.
  // currentValue: Bắt buộc, là giá trị của phần tử hiện tại
  // index: Không bắt buộc, là vị trí của phần tử hiện tại.
  // arr: Không bắt buộc, là mảng mà phần tử hiện tại thuộc về.
  // initialValue: Không bắt buộc, là giá trị ban đầu cho biến total trong callback.

  const isNumberNew = [1,2,3,4,5,6,7]
  const sum = isNumberNew.reduce((total, number)=>{
    return total + number
  }, 0)
  console.log(sum);

//******// phương thức reduceRight() tương tự như reduce(), tuy nhiên reduceRight() sẽ thực thi callback lên từng phần tử theo thứ tự từ phải qua trái.
const isNumberNew1 = [1,2,3,4,5,6,7]
const sum1 = isNumberNew1.reduce((total, number)=>{
  return total - number
}, 0)
console.log(sum1);

//******// reverse() được sử dụng khi bạn muốn đảo ngược thứ tự các phần tử trong mảng. Tức là phần tử đầu sẽ trở thành phần tử cuối.
const array1 = ["Banana", "Orange", "Apple", "Mango"];
array1.reverse()
console.log(array1);

//******// shift() được sử dụng khi bạn muốn xóa phần tử đầu tiên của mảng, đồng thời trả về phần tử đó.
const array2 = ["Banana", "Orange", "Apple", "Mango"];
array2.shift()
console.log(array2);

//******// slice() được sử dụng khi bạn muốn trích một mảng con từ vị trí n tới vị trí m trong mảng ban đầu
  // Lưu ý mảng được trích sẽ không bao gồm phần tử thứ m.

  // Cú pháp: array.slice(start, end). Trong đó:
  // start: Không bắt buộc, là vị bắt đầu bạn muốn trích, mặc định sẽ là 0. Bạn cũng có thể sử dụng số âm nếu muốn 
  // vị trí bắt đầu được tính từ cuối mảng (-1 là vị trí của phần tử cuối mảng).
  // end: Không bắt buộc, là vị trí kết thúc của mảng con muốn trích. Bạn cũng có thể sử dụng số âm nếu muốn vị trí
  // kết thúc được tính từ cuối mảng (-1 là vị trí của phần tử cuối mảng).

  const fruit1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
  const checkf1 = fruit1.splice(1, 3)
  console.log(checkf1);

//******// Phương thức some() sẽ giúp bạn kiểm tra một mảng có thỏa mãn điều kiện hay không. Điều kiện được thể hiện dưới dạng một callback 
  // duyệt lần lượt các phần tử mảng, nếu kết quả callback của một trong số các phần tử mảng trả về true, thì phương thức some() trả về true, 
  // nếu callback của tất cả các phần tử mảng trả về false, phương thức some trả về false.

  //   Cú pháp: array.some(function(currentValue, index, arr), thisValue). Trong đó:
  // function(currentValue, index, arr): function callback chạy cho mỗi phần tử mảng.
  // currentValue: Giá trị của phần tử hiện tại
  // index: Không bắt buộc, là vị trí của phần tử hiện tại
  // arr: Không bắt buộc, là mảng mà chứa phần tử hiện tại
  // thisValue: Không bắt buộc, nếu truyền vào thì nó sẽ được làm giá trị this của function, nếu không truyền this sẽ là undefined.

  // Kiểm tra mảng numbers có số nào là số lẻ hay không?
  const number1 = [1,2,3,4,5,6]
  const checknum1 = number1.some(function(item){
    return item % 2 != 0;
  })
  console.log(checknum1);

//******// sort() được sử dụng khi bạn muốn sắp xếp các phần tử trong mảng theo chiều tăng dần hoặc giảm dần
  // Sắp xếp phần tử mảng theo thứ tự bảng chữ cái
  const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
  fruits1.sort()
  console.log(fruits1);

  // Sắp xếp mảng tăng dần
  const number2 = [1,3,2,6,5,4]
  console.log(number2.sort());

  // Sắp xếp mảng giảm dần
  const number3 = [1,3,2,6,5,4]
  number3.sort(function(a, b){
    return b - a
  })
  console.log(number3);

//******// splice() được sử dụng khi bạn muốn thay thế một số phần tử trong mảng bằng một số phần tử khác.
  // Cú pháp: array.splice(index, howmany, item1, ....., itemX). Trong đó:
  // index: Bắt buộc là vị trí bắt đầu thay thế, bạn có thể sử dụng số âm để tính vị trí từ cuối mảng lên (phần tử cuối cùng là -1).
  // howmany: Không bắt buộc, có bao nhiêu phần tử sẽ được thay thế, mặc định là 0.
  // item1,… itemX: Là các phần tử sẽ được thay thế vào mảng kể từ vị trí index.

  // Thay thế 1 phần tử tính từ index 2 bằng các phần tử "Lemon", "Kiwi"
  const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
  fruits2.splice(2, 1, "Lemon", "Kiwi")
  console.log(fruits2);

  // Do các tham số item1,... itemX là không bắt buộc
  // Nên chúng ta có thể sử dụng phương thức này để xóa hàng loạt các phần tử trong mảng, xet ví dụ dưới đây
  // Xóa 2 phần tử mảng kể từ index 2
  const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
  fruits3.splice(2, 2)
  console.log(fruits3);

//******// toString() sẽ trả về một string từ mảng ban đầu, với các phần tử mảng ngăn cách nhau bằng dấu phẩy “,”.
const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits4.toString()
console.log(f);


//******// unshift() được sử dụng khi bạn muốn thêm một hoặc một số phần tử vào đầu mảng. Phương thức sẽ trả về số lượng phần tử trong mảng sau khi thêm.

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];
const f1 = fruits5.unshift("kiwi", "Lemon")
console.log(f1);

// ************** Tong ket *************** //

//******// Nhóm thêm, xóa vào đầu, cuối mảng
  // pop(): Xóa phần tử cuối mảng
  // push(): Thêm vào cuối mảng
  // shift(): Xóa phần tử đầu mảng
  // unshift(): Thêm phần tử vào đầu mảng

//******// Nhóm check mảng:
  // every(): Kiểm tra tất cả phần tử mảng phải thỏa mãn điều kiện
  // some(): Kiểm tra một trong số các phần tử mảng có phần tử nào thỏa mãn điều kiện.
  // includes(): Kiểm tra trong mảng có phần tử bạn cần tìm hay không?

//******//  Nhóm tìm cái gì đó trong mảng:
  // find(): Tìm phần tử mảng đầu tiên thỏa mãn điều kiện
  // findIndex(): Tìm vị trí của phần tử mảng đầu tiên thỏa mãn điều kiện
  // indexOf(): Tìm vị trí đầu tiên của phần tử xuất hiện trong mảng.
  // lastIndexOf(): Tìm vị trí cuối cùng của phần tử xuất hiện trong mảng.