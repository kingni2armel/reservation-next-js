import Navbar2 from '../../component/header2';
import styles from './Liste.module.scss'
import { useState,useEffect } from "react"
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

function GetlistehoraireTeacher() {
    
    const [listehoraire,setlistehoraire]= useState([])
    const  [user,setUser]= useState('')
    const [id,setId] = useState('')
    const GETLISTE = async (e) =>{      
            const response =  await axios.get("http://127.0.0.1:8000/api/listehorairelibrebyid")
            console.log(response.data)
            if(response.data.status===200)
            {
                setlistehoraire(
                    response.data.laliste
                )
            }
    }
    useEffect(()=>{
        GETLISTE()
        const userStore= localStorage.getItem('user')
        setUser(JSON.parse(userStore))
        const statex = JSON.parse(userStore)
        setId(statex.id)


   },[])


    return ( 
              <div>
                 <Navbar2/>
                 <div className={styles.containerInput} >
                    <div className={styles.containerInputItem} id={styles.divImage2}>
                        <h1 className={styles.titreInscription}>LISTE DES HORAIRES AVES LES AUTRES PROFESSEURS</h1>
                            <form >
                                    
                                    <table className={styles.customers}>
                                    <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Horaire debut</th>
                                                <th>Horaire fin</th>
                                                <th>Nom de l'enseignant</th>
                                               
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

export default GetlistehoraireTeacher;
