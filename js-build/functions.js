export let getName = ( getEl, firstName="Kai", lastName="Gittens" ) => {
  let fullName =  `Hello ${firstName} ${lastName}`;
  getEl.html( fullName );
}