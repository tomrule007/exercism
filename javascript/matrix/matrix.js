const clone = item => JSON.parse(JSON.stringify(item));
export class Matrix {
  constructor(matrixString) {
    this.matrixString = matrixString;
    this.rowData;
    this.columnData;
  }

  get rows() {
    if (this.rowData === undefined) {
      this.rowData = this.matrixString
        .split('\n')
        .map(rowString => rowString.split(' ').map(Number));
    }

    return clone(this.rowData);
  }

  get columns() {
    if (this.columnData === undefined) {
      this.columnData = this.rows[0].map((_, c) => this.rows.map(r => r[c]));
    }

    return clone(this.columnData);
  }
}
