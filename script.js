var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];



//===========================================================================//
                      // ~~~ # 1 ~~~ //
//===========================================================================//

// rat
// cat
// butterfly
// marmot

function notLast(arr) {

    for (var i = 0; i < arr.length-1; i++) {

        console.log(arr[i]);
    };
}

// notLast(animals); //-> works


//===========================================================================//
                      // ~~~ # 2 ~~~ //
//===========================================================================//

// rat
// butterfly
// ocelot

function evens(arr) {

    for (var i = 0; i < arr.length; i += 2) {

        console.log(arr[i]);
    };
}

// evens(animals); // -> works


//===========================================================================//
                      // ~~~ # 3 ~~~ //
//===========================================================================//

// ocelot
// marmot
// butterfly
// cat
// rat

function reverseArr(arr) {

    for (var i = arr.length - 1; i >= 0; i--) {

        console.log(arr[i]);
    };
}

//reverseArr(animals); // -> works


//===========================================================================//
                      // ~~~ # 4 ~~~ //
//===========================================================================//

// rat
// cat
// cat
// butterfly
// butterfly
// marmot
// marmot
// ocelot

function doubleExceptFirstAndLast(arr) {

    for (var i = 0; i < arr.length; i++) {

        //If first or last element, only log once
        if ( (i === 0) || (i === arr.length -1) ) {
        
            console.log(arr[i]);

        // If between first and last element, log twice
        } else {

            console.log(arr[i]);
            console.log(arr[i]);
        }
    };
}


// doubleExceptFirstAndLast(animals); //-> Works