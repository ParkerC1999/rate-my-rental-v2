async function newPropSearch(event) {
   event.preventDefault();

   const response = await fetch(`/api/properties`, {
      method: 'GET',
      body: JSON.stringify({
         
         
      }),
      headers: {
         'Content-Type': 'application/json'
      }
   });

   if (response.ok) {
      document.location.replace('/properties');
   } else {
      alert(response.statusText);
   }
}

document.getElementsByClassName('.propBtn').addEventListener('click', newPropSearch);
console.log(newPropSearch)
