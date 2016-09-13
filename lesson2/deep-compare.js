function deepCompare (obj1, obj2) {
  for (var prop in obj1) {
    if (obj1.hasOwnProperty(prop) !== obj2.hasOwnProperty(prop)) {
      return false;
    }

    if (typeof(obj1[prop]) == "object") {
      if (!deepCompare(obj1[prop], obj2[prop])) {
				return false;
			}
    } else if (typeof(obj1[prop]) == "function") {
      if (obj1[prop].toString() !== obj2[prop].toString()) {
        return false;
      }
		} else {
      if (obj1[prop] != obj2[prop]) {
        return false;
      }
    }
  }

  for (var prop in obj2) {
    if (obj2.hasOwnProperty(prop) != obj1.hasOwnProperty(prop)) {
      return false;
    }
  }

  return true;
}

var obj1 = {
  a: 1,
  b: 2,
  c: {
     d: 4
  }
};

var obj2 = {
  a: 1,
  b: 2,
  c: {
     d: 3
  }
};

var obj3 = {
  a: 1,
  b: 2,
  c: {
     d: 3
  }
};

console.log(deepCompare(obj1, obj2));
console.log(deepCompare(obj2, obj3));
