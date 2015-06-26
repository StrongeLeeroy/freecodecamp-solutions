function sym(args){
	var countObj = {};
	var result = [];
	args = Array.prototype.slice.call(arguments);
	if (args.length == 1) {
		return args[0].filter(function(item, pos){
			return args[0].indexOf(item) == pos;
		})
	}
	return args.reduce(function(a, b){
		return symCompare(a, b);
	});
}

function symCompare(arrayOne, arrayTwo){
	var result = [];
	arrayOne.forEach(function(item){
		if (result.indexOf(item) < 0) {
			result.push(item);
		}
		for (var i = 0; i < arrayTwo.length; i++) {
			if (item === arrayTwo[i]) {
				result = result.filter(function(remove){
                  return item != remove;
                });
			}
		}
	});
	arrayTwo.forEach(function(item){
		if (result.indexOf(item) < 0) {
			result.push(item);
		}
		for (var i = 0; i < arrayOne.length; i++) {
			if (item === arrayOne[i]) {
				result = result.filter(function(remove){
                  return item != remove;
                });
			}
		}
	});
	return result;
}

sym([1, 1]);