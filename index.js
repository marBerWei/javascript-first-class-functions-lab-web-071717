function countdown(callback){
	setTimeout(callback, 2000)
}


function createMultiplier(multiplierValue){
	return function(number){
		return multiplierValue * number
	}
}

var doubler = createMultiplier(2)
// let doubler =  function(number){
// 		return 2 * number
// 	}

var tripler = createMultiplier(3)


function multiplier(a,b){
	a * b
}

var doublerWithBind = multiplier.bind(null, 2)

var triplerWithBind = multiplier.bind(null, 3)

// let tripler =  function(number){
// 		return 3 * number
// 	}


// let doubler = function(multiplierValue){
// 	function createMultiplier(multiplierValue){
// 		multiplierValue * multiplierValue
// 	}
// }

// let tripler = function(multiplierValue){
// 	function createMultiplier(multiplierValue){
// 		multiplierValue * 3
// 	} 
// }


// Create a createMultiplier() function. 
// Make sure it returns the right thing!

// Create a doubler variable that uses the createMultiplier() 
// function to create a function that doubles any given number.

// Create a tripler variable that does the same thing as the doubler, 
// but it triples the value instead.
