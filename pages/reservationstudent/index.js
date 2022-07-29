import Navbar2 from '../../component/header2';
import styles from './Reservation.module.scss'
import { useState,useEffect } from "react"
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

function ListReservationstudent() {
    
    const [listereservations,setListereservation]= useState([])
    const router = useRouter()
    const GETLISTE = async (e) =>{  
        const users = localStorage.getItem('user')
        const containStore = JSON.parse(users)
        const iduser = containStore['id'] 
        const response =  await axios.get("http://127.0.0.1:8000/api/listereservation/"+iduser)
        console.log(response.data)
        if(response.data.status===200)
        {
            setListereservation(
                response.data.listereservation
            )
        }
    }

    const ANNULERRESERVATION = async (id) => {
        console.log(id)
        const response =  await axios.post("http://127.0.0.1:8000/api/annuler/"+id)
        if(response.data.status===200){
            
                alert(response.data.message)
                router.push('/')
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
                            <h1 className={styles.titreInscription}>
                                LISTE DES HORAIRES QUE J'AI RESERVE
                            </h1>
                        <table className={styles.customers}>
                            <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Horaire debut</th>
                                        <th>Horaire fin</th>    
                                        <th>Statut</th>                                           
                                    </tr>                                   
                            </thead>
                            <tbody>
                                {
                                    listereservations.length!=0 ?
                                    listereservations.map(((listereservations,index)=>
                                        <tr key={listereservations.id}>
                                            <td>{index+1}</td>
                                            <td>{listereservations.horaire_debut}</td>
                                            <td>{listereservations.horaire_fin}</td>
                                            <td>
                                                {
                                                     listereservations.statut_traitement===1&&listereservations.statut_validite===0?<p>deja traité : refusé</p>:
                                                     <p></p>
                                                }
                                                {
                                                    listereservations.statut_traitement===1&&listereservations.statut_validite===1?<p>deja traité : accepté</p>:
                                                   <p></p>

                                                } 
                                                {
                                                    listereservations.statut_traitement===0&&listereservations.statut_validite===0?
                                                    <p>en attente 
                                                        <button 
                                                            className={styles.annuler}
                                                            onClick={()=>{ANNULERRESERVATION(listereservations.id);
                                                            }}  
                                                        >
                                                            Annuler
                                                        </button>
                                                    </p>
                                                   
                                                    :
                                                   <p></p>

                                                } 
                                                

                 
                                            </td>                          
                                      </tr>
                                    ))
                                    :
                                        <tr>
                                            <td>Pas de reservation pour le moment</td>
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

export default ListReservationstudent;
