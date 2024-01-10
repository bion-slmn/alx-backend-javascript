////// <reference path="crud.d.ts" /> 
import { RowID, RowElement } from './interface';

import * from './crud' as CRUD

let row : RowElement  {
  firstName: Guillaume
  lastName: Salva
  }

  const newRowID : RowID  = CRUD.insertRow(row);
  insertRow(newRowID)

  const updatedRow: RowElement =  {
    ...row,
      age: 23,
      };

      // Calling the updateRow command
      const updatedRowID: RowID = CRUD.updateRow(newRowID, updatedRow);

 CRUD.deleteRow(newRowID);

