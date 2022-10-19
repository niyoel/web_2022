import React, { useState,Fragment } from "react";
import "./App.css";
import { nanoid } from 'nanoid';
import data from "./mock_data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

function App() {
  const [donnes, setDonnes] = useState(data);
  const [addFormData,setAddFormData]=useState({
    identite_nationale: "",
    nom:"",
    date_de_naissance: "",
    pay_de_naissance: "",
    pay_de_residence: "",
    sexe: "",
    etat_civil: "",
    langue: ""
  });
    const [editFormData, setEditFormData] = useState({
      identite_nationale: "",
      nom:"",
      date_de_naissance: "",
      pay_de_naissance: "",
      pay_de_residence: "",
      sexe: "",
      etat_civil: "",
      langue: ""
    })
  
    const [editDonneId, setEditDonneId]=useState(null);
  
  const handleAddFormChange=(event)=>{
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...addFormData};
    newFormData[fieldName]=fieldValue;

    setAddFormData(newFormData);

  };
  const handleEditFormChange = (event)=>{
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData};
    newFormData[fieldName]=fieldValue;
    
    setEditFormData(newFormData)
  };
  const handleAddFormSubmit=(event)=>{
    event.preventDefault()

    const newdDonne={
    id:nanoid(), 
    identite_nationale:addFormData.identite_nationale,
    nom:addFormData.nom,
    date_de_naissance:addFormData.date_de_naissance,
    pay_de_naissance:addFormData.pay_de_naissance,
    pay_de_residence:addFormData.pay_de_residence,
    sexe:addFormData.sexe,
    etat_civil:addFormData.etat_civil,
    langue:addFormData.langue
    }
    const newDonnes = [...donnes,newdDonne];
    setDonnes(newDonnes)
  };

  const handleEditFormSubmit=(event)=>{
    event.preventDefault()

    const editedonneId={
    id:editedonneId,
    identite_nationale:editFormData.identite_nationale,
    nom:editFormData.nom,
    date_de_naissance:editFormData.date_de_naissance,
    pay_de_naissance:editFormData.pay_de_naissance,
    pay_de_residence:editFormData.pay_de_residence,
    sexe:editFormData.sexe,
    etat_civil:editFormData.etat_civil,
    langue:editFormData.langue
    }
    const newDonnes = [...donnes];
    const index = donnes.findIndex((donne)=>donne.id === editedonneId)
    newDonnes[index] = editedonneId 
    setDonnes(newDonnes)
    setEditDonneId(null)
  };

  const handleEditClick = (event,donne)=>{
    event.preventDefault();
    setEditDonneId(donne.id);
    const formValues={
      identite_nationale:donne.identite_nationale,
      nom:donne.nom,
      date_de_naissance:donne.date_de_naissance,
      pay_de_naissance:donne.pay_de_naissance,
      pay_de_residence:donne.pay_de_residence,
      sexe:donne.sexe,
      etat_civil:donne.etat_civil,
      langue:donne.langue
    }
    setEditFormData(formValues);
  };
  const handleCancelClick=()=>{
    setEditDonneId(null);
  }
  const handleDeleteClick = (ct)=>{
    const newDonnes=[...donnes];
    const index = donnes.findIndex((donne)=>donne.id===ct.id);
    newDonnes.splice(index,1);
    setDonnes(newDonnes);
  }
  // const handleDeleteClick = (donnes)=>{

  // }

  return ( 
    <div>
    <tabele>
      <thead>
        <tr>
          <th>Identite_nationale</th>
          <th>Nom</th>
          <th>Date de naissance</th>
          <th>Pay de naissance</th>
          <th>Pay de residence</th>
          <th>Sexe</th>
          <th>Etat civil</th>
          <th>Langue</th>
        </tr>
      </thead>
      <tbody>
          {donnes.map((donne) => (
            <Fragment>
              {editDonneId === donne.id ? (
                <EditableRow  
                  editFormData={editFormData}
                  handleEditFormChange={handleEditFormChange}
                  handleEditFormSubmit={handleEditFormSubmit}
                  handleCancelClick={handleCancelClick}
                />
              ) : (
                <ReadOnlyRow
                  donne={donne}
                  handleEditClick={handleEditClick}
                  handleDeleteClick={handleDeleteClick}
                />
              )}
            </Fragment>
         ))}
        </tbody>
  </tabele>

  <h4>Add Data</h4>
  <form onSubmit={handleAddFormSubmit} onChange={ handleAddFormChange} >
 
        <input type="text" name='identite_nationale' required='required' placeholder='Numero national'onChange={handleAddFormChange}/>
        <input type="text" name='nom' required='required' placeholder='Nom et Prenom' onChange={handleAddFormChange}/>
        <input type="text" name='date_de_naissance' required='required' placeholder='Date de naissace'onChange={handleAddFormChange}/>
        <input type="text" name='pay_de_naissance' required='required' placeholder='Pay de naissace'onChange={handleAddFormChange}/>
        <input type="text" name='pay_de_residence' required='required' placeholder='Pay de residence'onChange={handleAddFormChange}/>
        <input type="text" name='sexe' required='required' placeholder='Genre'onChange={handleAddFormChange}/>
        <input type="text" name='etat_civil' required='required' placeholder='Etat civil'onChange={handleAddFormChange}/>
        <input type="text" name='langue' required='required' placeholder='langue ' onChange={handleAddFormChange}/>
        <button type="submit">Add data</button>
        </form>
        </div>
        );
      }

export default App;
