import Navbar2 from "../../component/header2";
import styles from './Meshoraire.module.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from "react"
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";


function Horaitetraite() {
    
    const [listehoraire,setlistehoraire]= useState([])
    const  [user,setUser]= useState('')
    const GETLISTE = async (e) =>{
            const users = localStorage.getItem('user')
            const containStore = JSON.parse(users)
            const id = containStore['id']
            const response =  await axios.get("http://127.0.0.1:8000/api/listehoraireteacherTraite/"+id)
            if(response.data.status===200)
            {
                setlistehoraire(
                    response.data.horaire
                )
            }
    }
    useEffect(()=>{
         
            GETLISTE()  
   },[])
  
    return ( 
              <div>
                 <Navbar2/>
                 <div className={styles.containerInput} >
                    <div className={styles.containerInputItem} id={styles.divImage2}>
                        <h1 className={styles.titreInscription}>LISTE DE MES HORAIRES TRAITES</h1>
                          
                            <table className={styles.customers}>
                            <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Horaire debut</th>
                                        <th>Horaire fin</th>   
                                    </tr>
                            </thead>
                                <tbody>
                                    {
                                        listehoraire.length!=0 ?
                                        listehoraire.map(((listehoraire,index)=>
                                        <tr key={listehoraire.id}>
                                            <td>{index+1}</td>
                                            <td>{listehoraire.horaire_debut}</td>
                                            <td>{listehoraire.horaire_fin}</td>
                                        
                                        
                                        </tr>
                                        ))
                                        :
                                        <tr>
                                               <td> Aucune horaire pour le moment</td>
                                        </tr>
                                        }
                                </tbody>
                            </table>                 
                    </div>
                </div>

                <div className={styles.space}></div>
            </div>
 
     );
}

export default Horaitetraite;
