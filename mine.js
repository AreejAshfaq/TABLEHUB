var arr = [
    {name: "Rimsha",     age: 20 , color:"pink" },
    {name: "Sahbana" ,    age: 22 , color:"Blue" },
    {name: "Saman" , age: 20 , color:"pink" },
    {name: "Areej " ,   age: 20 , color:"Black" }
]






var tbody =document.getElementById("tbody");




for( var index= 0; index <= arr.length; index++){
    var row = `<tr>
    <td> ${arr[index].name} </td>
    <td> ${arr[index] .age} </td>
    <td> ${arr[index].gmail} </td>

   </tr> `;


   console.log(row)

        tbody.innerHTML += row;
}