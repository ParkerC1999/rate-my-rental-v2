const landlordBtn = document.querySelector('#landlordBtn')

async function newlandlordSearch() {

   const response = await fetch(`/api/landlords`, {
   });
   console.log(response);
   if (response.ok) {
      document.location.replace('/landlords');
   } else {
      alert(response.statusText);
   }
}

landlordBtn.addEventListener('click', function() {
   console.log('Click');
   newlandlordSearch();
});