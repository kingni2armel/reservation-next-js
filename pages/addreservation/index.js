import Navbar2 from '../../component/header2';
import styles from './Addreservation.module.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from "react"
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
function Addreservation() {
    
    const [listehoraire,setlistehoraire]= useState([])
    const  [user,setUser]= useState()
    const GETLISTE = async (e) =>{
            const response =  await axios.get("http://127.0.0.1:8000/api/listehorairelibre")
            console.log(response.data)
            if(response.data.status===200)
            {
                    setlistehoraire(
                        response.data.allliste
                    )
            }
    }
    useEffect(()=>{
        GETLISTE()
        const userStore= localStorage.getItem('user')
        setUser(JSON.parse(userStore))
   },[])


    return ( 
              <div>
                 <Navbar2/>
                 <div className={styles.containerInput} >
                    <div className={styles.containerInputItem} id={styles.divImage2}>
                        <h1 className={styles.titreInscription}>FORMULAIRE DE SOUSCRIPTION D'UNE RESERVATION</h1>
                            <form >
                                    
                                    <table className={styles.customers}>
                                    <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Horaire debut</th>
                                                <th>Horaire fin</th>
                                                <th>Nom de l'enseignant</th>
                                                <th>Operation</th>
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
                                                        <td>{listehoraire.nom} {listehoraire.prenom}</td>
                                                        <td>
                                                            <Link 
                                                                        href={{
                                                                            pathname:"detailreservation",
                                                                            query:{id:listehoraire.id}
                                                                        }}
                                                                    >
                                                                            <a>
                                                                                    plus
                                                                            </a>
                                                            </Link>
                                                         
                                                        </td>
                                                    </tr>
                                                ))
                                                :
                                                    <tr>
                                                        
                                                    </tr>
                                                }
                                        </tbody>
                                    </table>
                                   
                              
        
                            </form>                  
                    </div>
                </div>

                <div className={styles.space}></div>
            </div>
 
     );
}

export default Addreservation;