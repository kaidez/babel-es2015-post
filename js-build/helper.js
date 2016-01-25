export let nameBuilder = ( getEl, fName="Kai", lName="Gittens" ) => {
  let getName =  `Hello ${fName} ${lName}`;
  getEl.html( getName )
}