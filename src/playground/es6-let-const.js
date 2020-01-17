var nameVar = 'Alex';
var nameVar = 'Bec';
console.log('nameVar', nameVar);

let nameLet = 'Ben';
nameLet = 'Praj';
console.log('nameLet', nameLet);

const nameConst = 'Jake';
console.log('nameConst', nameConst);

// Block Scoping

var fullName = 'Alex Toson';

if (fullName) {
	const firstName = fullName.split(' ')[0];
	console.log(firstName);
}

console.log(firstName)