// Importing RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Type declarations for CRUD functions
declare module 'crud' {
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
}

