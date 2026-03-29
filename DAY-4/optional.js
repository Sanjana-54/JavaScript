//OPTIONAL CHAINING & NULLISH COALESCING

const p={
      pid:101,
      name:`k`
}

console.log(p.marks?.length??"Marks not available")