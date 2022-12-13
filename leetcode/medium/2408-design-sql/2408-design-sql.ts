/*
2408-design-sql
leetcode/medium/2408. Design SQL
URL: https://leetcode.com/problems/design-sql/description/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference

*/

class SQL {
  private table: Map<string, string[][]>;

  private tableSizeInfo: Map<string, number>;

  constructor(names: string[], columns: number[]) {
    this.table = new Map<string, string[][]>();
    this.tableSizeInfo = new Map();
    names.map((name, i) => this.tableSizeInfo.set(name, columns[i]));
  }

  insertRow(name: string, row: string[]): void {
    if (!this.table.has(name)) {
      this.table.set(name, []);
    }

    this.table.get(name).push(row.slice(0, this.tableSizeInfo.get(name)));
  }

  deleteRow(name: string, rowId: number): void {
    if (!this.table.has(name)) {
      return;
    }

    this.table.get(name)[rowId - 1] = [];
  }

  selectCell(name: string, rowId: number, columnId: number): string {
    if (!this.table.has(name)) {
      return '';
    }

    return this.table.get(name)?.[rowId - 1]?.[columnId - 1];
  }
}

/**
 * Your SQL object will be instantiated and called as such:
 * var obj = new SQL(names, columns)
 * obj.insertRow(name,row)
 * obj.deleteRow(name,rowId)
 * var param_3 = obj.selectCell(name,rowId,columnId)
 */
