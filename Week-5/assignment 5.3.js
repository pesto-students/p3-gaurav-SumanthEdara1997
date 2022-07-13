const hasDuplicates = (arr) => {
    let set = new Set()
    return arr.some(el => {
      if (set.has(el)) return true
      set.add(el)
    })
  }
  
  console.log(hasDuplicates([1,5,-1,4])) // false
