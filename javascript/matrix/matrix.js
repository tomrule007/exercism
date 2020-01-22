const clone = item => JSON.parse(JSON.stringify(item));
export class Matrix {
  constructor(matrixString) {
    this.matrixString = matrixString;
    this.rowsArray = this.matrixString
      .split('\n')
      .map(rowString => rowString.split(' ').map(char => Number(char)));

    this.columnsArray = [];
    for (let rIndex = 0; rIndex < this.rowsArray.length; rIndex++) {
      let selectedRow = this.rowsArray[rIndex];
      for (let cIndex = 0; cIndex < selectedRow.length; cIndex++) {
        if (typeof this.columnsArray[cIndex] === 'undefined') {
          this.columnsArray[cIndex] = [];
        }
        this.columnsArray[cIndex].push(selectedRow[cIndex]);
      }
    }
  }

  get rows() {
    return clone(this.rowsArray);
  }

  get columns() {
    return clone(this.columnsArray);
  }
}
