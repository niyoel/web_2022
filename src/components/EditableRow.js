import React from 'react';

const EditableRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
  return (
    
    <tr><td><input type="text" name='identite_nationale' required='required' placeholder='Numero national'/></td>
        <td><input type="text" name='nom' required='required' placeholder='Nom et Prenom' /></td>
        <td><input type="text" name='date_de_naissance' required='required' placeholder='Date de naissace'/></td>
        <td><input type="text" name='pay_de_naissance' required='required' placeholder='Pay de naissace'/></td>
        <td><input type="text" name='pay_de_residence' required='required' placeholder='Pay de residence'/></td>
        <td><input type="text" name='sexe' required='required' placeholder='Genre'/></td>
        <td><input type="text" name='etat_civil' required='required' placeholder='Etat civil'/></td>
        <td><input type="text" name='langue' required='required' placeholder='langue '/></td>
        <td><button type="submit">Add data</button></td>
        <td><button type="submit">save</button></td>
        <td><button type="submit" onClick={() => handleCancelClick()} >Cancel</button>
      </td>
    </tr>
  );
};

export default EditableRow;