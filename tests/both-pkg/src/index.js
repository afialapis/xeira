const fobj= require('farrapa-objects')
const {fooit} = require('./foo');


const bothPkg = (f) => {
  let obj1= {
    he: 'is',
    the: 'painkiller',
    "this": {
      is: 'the',
      'painkiller': 'painkiller'
    }
  };
  let obj2= {
    ...obj1,
    by: {
      'judas': 'priest'
    }
  };
  let obj3= fooit(fobj.objClone(obj2));
  console.log(`Called both-pkg's bothPkg() => ${JSON.stringify(obj3)}`);
};

module.exports= {
  bothPkg
}
