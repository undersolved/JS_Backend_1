const evenNum = [];
const oddNum = [];

for (let i = 0; i <= 100; i++) {
	if (i % 2 == 0) {
		evenNum.push(i);
	} else {
		oddNum.push(i);
	}
}

console.log(evenNum, typeof evenNum);
console.log(oddNum, typeof oddNum);
