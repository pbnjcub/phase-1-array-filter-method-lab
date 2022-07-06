// Code your solution here

function findMatching(collection, string){
  let newString = string.toLowerCase()
 
    let matchName = collection.filter(function(driver){
       let newDriver = driver.toLowerCase()
      return newDriver === newString
    })
  return matchName
  }

  function fuzzyMatch(collection, string){
    let newString = string.toLowerCase()
      let matchName = collection.filter(function(driver){
        let newDriver = driver.toLowerCase()
        for(let i = 0; i<newString.length; i++){
          return newDriver[i] === newString[i]
        }
      })
    return matchName
    }

    function matchName(collection, string){
      let newString = string.toLowerCase()
        let nameMatch = collection.filter(function(driver){
          let newDriver = driver.name.toLowerCase()
          return newDriver === newString
          
          })
         return nameMatch
        }

