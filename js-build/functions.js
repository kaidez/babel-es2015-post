export let getName = ( getEl, fName="Kai", lName="Gittens" ) => {
  let fullName =  `Hello ${fName} ${lName}`;
  getEl.html( fullName );
}