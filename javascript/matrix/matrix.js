const clone = item => JSON.parse(JSON.stringify(item));
export class Matrix {
  constructor(matrixString) {
    this.matrixString = matrixString;
  }

  get rows() {
    return clone(
      this.matrixString
        .split('\n')
        .map(rowString => rowString.split(' ').map(Number))
    );
  }

  get columns() {
    return clone(this.rows[0].map((_, c) => this.rows.map(r => r[c])));
  }
}
