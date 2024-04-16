// Execise 1

const url = 'https://reqres.in/api/users/4';
const body = document.body;


const createElement = (p1, p2) => {
    const content = document.createElement(p1);
    p2.append(content);
    return content;
}


function fetchData1(){
    fetch(url)
    .then(response => response.json())
    .then(result => {
         console.log(result);       // Log the result in console for debugging
         displayData(result);}
        )
};


async function fetchData2(){  
    try {
     let response = await fetch(url);
     let result = await response.json();
     console.log(result);       // Log the result in console for debugging
     displayData(result);
    } 
    catch (error) {
     console.log("Error Fetching data ",error);
    }
 };
 

const displayData = (result) => {
    createElement('h1', body).innerHTML = `User Info`;
    createElement('pre',body).innerHTML = `${JSON.stringify(result, "", '\t')}`;
    createElement('h1', body).innerHTML = `${result.data.first_name} ${result.data.last_name}`;
    createElement('img', body).src = `${result.data.avatar}`;
}

fetchData1();
fetchData2();

