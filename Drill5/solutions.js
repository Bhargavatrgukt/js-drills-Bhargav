const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; 

function keys(obj) {
    let result=[]
    for(let name in obj){
       result.push(name)
    }
   return result;
  }

  function values(obj) {
    let result=[]
    for(let name in obj){
       result.push(obj[name])
    }
   return result;
  }  
 
  function callback(value,key){
    if(typeof(value)==='string'){
        value=value.toUpperCase()
    }
    return value;
  }

  function mapObject(obj, cb) {
    // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
    // http://underscorejs.org/#mapObject
    for(let x in obj){
        obj[x]=cb(obj[x],x);
    }
    return obj
  }

  function pairs(obj) {
    // Convert an object into a list of [key, value] pairs.
    // http://underscorejs.org/#pairs
    let result=[]
    for(let x in obj){
        result.push([x,obj[x]])
    }
    return result;
  }

  function invert(obj) {
    // Returns a copy of the object where the keys have become the values and the values the keys.
    // Assume that all of the object's values will be unique and string serializable.
    // http://underscorejs.org/#invert
    
    let invertObj={}
    for(let x in obj){
        invertObj[obj[x]]=x;
    }
    return invertObj;
  }
  
  function defaults(obj, defaultProps) {
    // Fill in undefined properties that match properties on the `defaultProps` parameter object.
    // Return `obj`.
    // http://underscorejs.org/#defaults
    for (let key in defaultProps){
        if(!obj[key]){
            obj[key]=defaultProps[key];
        }
    }
    return obj;
  }

  const defaultProps={car:"maruthi",age:45}


module.exports={
    keys,values,mapObject,pairs,defaults,invert
}  