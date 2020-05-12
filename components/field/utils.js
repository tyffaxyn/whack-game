const getBreakPoint = (num) => {
    if (num <= 414) {
        return 2
    }

   if (num <= 768) {
       return 3
   }

   if (num <= 1024) {
       return 4
   }

   return 5
}

const calculationElementsRowsAndHeight = (elem) => {
   const {width, top} = elem.getBoundingClientRect();
   const {height: bodyHeight} = document.body.getBoundingClientRect();
   const point = getBreakPoint(width);
   const part = (width / point) / 1.18;
   const rows = point * (Math.floor((bodyHeight - top) / (part + 12)))

   return {rows: rows < 0 ? 0 : rows, height: part}
}

export {calculationElementsRowsAndHeight}