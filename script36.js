console.log('api')



const urlf = 'https://data.gov.il/api/action/datastore_search?resource_id=3f06e2f2-e2ad-41ac-9665-37d0625537f2&limit=400'



async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.json();
    return document.querySelectorAll("form-control").innerHTML = myText;
    console.log(myObject)
    console.log(myText)
  }


const btnSearch = document.querySelector('#btnValue')
const inpSearch = document.querySelector('#searchValue')

async function getTable(result){

 const tbody = document.querySelector('#nehiga')
   
  const  myTable = await getText(urlf)
console.log(myTable.result.records[0].ezor)


let datain = myTable.result.records

function fillTable(datain) {
  let tableHTML = ''; // Создаем пустую строку для генерации HTML

  datain.forEach(element => {
    tableHTML += `
      <tr class="table-primary"> 
        <td class="table-primary">${element.ezor}</td>
        <td class="table-primary">${element.shem_beit_sefer}</td>
        <td class="table-primary">${element.menahel}</td>
        <td class="table-primary">${element.ktovet}</td>
        <td class="table-primary">${element.telefon}</td>
        <td class="table-primary">${element._id}</td>
        <td class="table-primary"></td>
      </tr>`;
  });

  return tableHTML; // Возвращаем сгенерированную строку HTML
}

async function getTable(result) {
  const tbody = document.querySelector('#nehiga');
  const myTable = await getText(urlf);
  let datain = myTable.result.records;

  btnSearch.addEventListener('click', (e) => {
    e.preventDefault();
    let searchRes = inpSearch.value;
    let filteredRecords = []
    if(searchRes)

     filteredRecords = datain.filter((e) => ((e.ezor === searchRes)))
    // ?  datain.filter((e) => ) :  tbody.innerHTML = tableHTML))



    console.log(fillTable(datain));
    console.log(filteredRecords);
    
    try {
      let tableHTML = fillTable(filteredRecords);
      tbody.innerHTML = tableHTML; // Устанавливаем содержимое tbody сгенерированной строкой HTML
    } catch (error) {
      
      console.error(error);
    }
  });

  const tableHTML = fillTable(datain);
  tbody.innerHTML = tableHTML; // Устанавливаем содержимое tbody сгенерированной строкой HTML
}

getTable(datain);


//  btnSearch.addEventListener('click', (e) => {
//     e.preventDefault()
//         let searchRes = inpSearch.value
//         console.log(searchRes)
    
      
//             const filteredRecords = datain.filter((e) => e.ezor === searchRes);
//             console.log(filteredRecords)
//             // datain = filteredRecords
//             try  {
//             fillTable(filteredRecords)
//               console.log( fillTable(filteredRecords))
//             console.log(filteredRecords)
           
//           } 
          
//         catch {
//             // getTable();
//           }
//   })

// function fillTable(datain) {

//  datain.forEach(element => {
    
//     tbody.innerHTML += 
//       `
//       <tr class="table-primary"> 
//       <td class="table-primary">${element.ezor}</td>
//       <td class="table-primary">${element.shem_beit_sefer}</td>
//       <td class="table-primary">${element.menahel}</td>
//       <td class="table-primary">${element.ktovet}</td>
//       <td class="table-primary">${element.telefon}</td>
//       <td class="table-primary">${element._id}</td>
//       <td class="table-primary"></td>
      
//       </tr>`
      

// });

// }
// fillTable(datain)
}
getTable()

    //     const filteredRecords = datain.filter((element) => element.ezor === searchRes) ?
    //    getTable(filteredRecords):  getTable();
    //     console.log(element)
    //     console.log(filteredRecords)

 // getText(urlf)
// fetch(urlf)
// .then(myObject => myObject.json())
// .then(data => console.log(data.result.records))
 // const blog = new BateyS()
    // const posts = await getPosts()
      
    
// class BateyS{

//     constructor(ezor, shem_beit_sefer, menahel, ktovet, telefon, _id) {

// this.ezor = ezor
// this.shem_beit_sefer = shem_beit_sefer
// this.menahel = menahel
// this.ktovet = ktovet
// this.telefon = telefon
// this._id = _id
//     }
// }





// console.log(BateyS)