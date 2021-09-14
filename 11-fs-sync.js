const fs = require('fs')

fs.readFile('./context/first.txt','utf8',(err,result) => {
	if (err){
		console.log(err);
		return
	}
	const first = result;
	fs.readFile('./context/second.txt','utf8',(err,result) => {
	if (err){
		console.log(err);
		return
		}
		const second = result;
		fs.writeFile('./context/results.txt','here is resule :' + first + second  , (err,result) =>{
			if (err) {
				console.log(err);
				return 
			}
			console.log(result);
		})
 	})

})