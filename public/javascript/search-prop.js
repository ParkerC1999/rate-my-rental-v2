const propBtn = document.querySelector('.propBtn')

async function newPropSearch() {

   const response = await fetch(`/api/properties`, {
   });
   console.log(response);
   if (response.ok) {
      document.location.replace('/properties');
   } else {
      alert(response.statusText);
   }
}

propBtn.addEventListener('click', function() {
   console.log('Click');
   newPropSearch();
});
