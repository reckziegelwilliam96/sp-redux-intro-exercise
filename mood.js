const emoji = document.querySelector('#emoji');
const happy = document.querySelector('#happy');
const angry = document.querySelector('#angry');
const confused = document.querySelector('#confused');
const sad = document.querySelector('#sad');

function updateMoodDisplay() {
    const state = store.getState();
    emoji.innerText = state.mood;
  }
  
store.subscribe(updateMoodDisplay);

happy.addEventListener('click', function(e) {
  store.dispatch({ type: 'happy', payload: "ʘ‿ʘ" });
});

angry.addEventListener('click', function(e) {
  store.dispatch({ type: 'angry', payload: "ಠ▃ಠ" });
});

confused.addEventListener('click', function(e) {
  store.dispatch({ type: 'confused', payload: "ఠ_ఠ" });
});

sad.addEventListener('click', function(e) {
  store.dispatch({ type: 'sad', payload: "⊙︿⊙"});
});
  
updateMoodDisplay();
  
  