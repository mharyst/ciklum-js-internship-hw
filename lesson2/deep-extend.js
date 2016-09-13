function deepExtend() {
  var extendedObj = arguments[0];

  if (arguments.length < 1 || typeof arguments[0] !== 'object') {
    throw new Error("Error");
  }

  if (arguments.length < 2) {
    return arguments[0];
  }

  for (var i = 0; i < arguments.length; i++) {
    var currObj = arguments[i];
    for (var key in currObj) {
      extendedObj[key] = currObj[key];
      if (currObj[key] === 'object') {
        extendedObj[key] = deepExtend(extendedObj[key], currObject[key]);
      }
    }
  }

  return extendedObj;
}

var obj1 = {
  a: 1,
  b: 2,
  c: {
     d: 4
  },
  e: 4
};

var obj2 = {
  a: 1,
  b: 2,
  c: {
     d: 3
  }
};

var obj3 = {
  a: 4,
  c: {
     d: {
       g: 5
     }
  },
  f: 8
};

deepExtend(obj1, obj2, obj3)
console.log(obj1);
