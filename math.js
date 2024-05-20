function add (a,b ){
 return a+b;

}

function sub (a,b ){
    return a-b;
   
}

// another way is 
//exports.add = (a,b) => a+b;

module.exports = {add , sub};