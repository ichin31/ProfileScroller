const data = [
  {
    name:'John Doe',
    age: 32,
    gender:'male',
    lookingfor:'female',
    location: 'Delray Beach FL',
    image: 'https://randomuser.me/api/portraits/men/83.jpg'
  },
  {
    name:'Jen Smith',
    age: 32,
    gender:'female',
    lookingfor:'female',
    location: 'Boca Raton FL',
    image: 'https://randomuser.me/api/portraits/women/84.jpg'
  },
  {
    name:'Will Johnson',
    age: 32,
    gender:'male',
    lookingfor:'female',
    location: 'Boynton Beach FL',
    image: 'https://randomuser.me/api/portraits/men/84.jpg'
  },
]
const profiles = profileIterator(data);
// Call first profile
nextProfile();
// Next Event
document.getElementById('next').addEventListener('click',nextProfile);


function nextProfile(){
  const currentProfile = profiles.next().value;
if (currentProfile !== undefined) {
  document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
      <li class="list-group-item">Name: ${currentProfile.name}</li>
      <li class="list-group-item">Age: ${currentProfile.age}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
      <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>
    `;
  document.getElementById('imageDisplay').innerHTML = `<img src='${currentProfile.image}'>`
} else {
  // no more profiles
  window.location.reload();
}
}

// profile iterator
function profileIterator(profiles){
  let nextIndex = 0;
  return{
    next: function() {
      return nextIndex < profiles.length ? 
      {value: profiles[nextIndex++], done:false } :
      {done: true}
   }
  };
}

