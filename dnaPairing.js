//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  //create containers //split str into array
  var strArray = str.split("");
  var paired = [];
  //loop over str array to add base pair and populate new array 
  for (i=0; i < strArray.length; i++) {
  	switch (strArray[i]) {
  		case "A":
  			paired.push(["A", "T"]);
  			break;
  		case "T":
  			paired.push(["T", "A"]);
  			break;
  		case "G":
  			paired.push(["G", "C"]);
  			break;
  		case "C":
  			paired.push(["C", "G"]);
  			break;
  	}
  }
  //output new array
  	return paired;
}

pairElement("GCG");

//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]