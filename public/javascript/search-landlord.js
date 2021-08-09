<<<<<<< HEAD
const landlordBtn = document.querySelector('.landlordBtn')
console.log("I am here");
=======
const landlordBtn = document.querySelector('#landlordBtn')

>>>>>>> ba4d0f7589ae94262cd1656df9854f4f969c6d79
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