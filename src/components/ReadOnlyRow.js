import React from 'react';

const ReadOnlyRow = ({donne, handleEditClick, handleDeleteClick}) => {
    return (
        <tr>
                <td>{donne.identite_nationale}</td>
                <td>{donne.nom}</td>
                <td>{donne.date_de_naissance}</td>
                <td>{donne.pay_de_naissance}</td>
                <td>{donne.pay_de_residence}</td>
                <td>{donne.sexe}</td>
                <td>{donne.etat_civil}</td>
                <td>{donne.langue}</td>
        <td>
        <button type="button" onClick={(event)=>handleEditClick(event,donne)} >Edit</button>
        <button type="button" onClick={() => handleDeleteClick(donne)} >Delete</button>
        </td>
        </tr>
       
    );
};

export default ReadOnlyRow;