// let addStudent = document.querySelector("#myForm button");

// let table = document.querySelector(".table tbody");

// let count = 3;
// addStudent.addEventListener("click", function (e) {
//     e.preventDefault();

//     let FName = document.getElementsByName("fname")[0].value;
//     let LName = document.getElementsByName("lname")[0].value;
//     let Phone = document.getElementsByName("phone")[0].value;

//     // <tr>
//     //     <th scope="row">2</th>
//     //     <td>Jacob</td>
//     //     <td>Thornton</td>
//     //     <td>1651651321</td>
//     // </tr>

//     let th = document.createElement("th");
//     th.innerText = count;
//     th.setAttribute("scope", "row");

//     let td1 = document.createElement("td");
//     td1.innerText = FName;

//     let td2 = document.createElement("td");
//     td2.innerText = LName;

//     let td3 = document.createElement("td");
//     td3.innerText = Phone;

//     let tr = document.createElement("tr");
//     tr.appendChild(th);
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);

//     table.appendChild(tr);

//     document.getElementsByName("fname")[0].value = "";
//     document.getElementsByName("lname")[0].value = "";
//     document.getElementsByName("phone")[0].value = "";
//     count++;
// });

// console.log(document.querySelectorAll("#mySelect option").length);

console.log(document.getElementById("link").getAttribute("href"))
console.log(document.getElementById("link").getAttribute("target"))