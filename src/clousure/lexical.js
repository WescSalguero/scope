const myGlobal = 0;

function myFunction() {
  const myNumber = 1;

  console.log(myGlobal);

  function parent() {
    //funcion interna
    const innert = 2;

    console.log(myNumber, myGlobal);

    function child() {
      console.log(innert, myNumber, myGlobal);
    }
    return child();
  }

  return parent();
}

myFunction();
