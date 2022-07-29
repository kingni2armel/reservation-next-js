import Navbar2 from '../../component/header2';
import styles from './Listesouscription.module.scss'
import { useState,useEffect } from "react"
import axios from "axios";
import { useRouter } from "next/router";

function Listesouscription() {
        
        const [listehoraire,setlistehoraire]= useState([])
        const  [user,setUser]= useState('')
        const [id,setId] = useState('')
        const routers = useRouter()
        const idhoraire =routers.query.id
        console.log(idhoraire)

        const GETLISTE = async (e) =>
        {  
          
            const users = localStorage.getItem('user')
            const containStore = JSON.parse(users)
            const iduser =containStore['id']
            const response =  await axios.get("http://127.0.0.1:8000/api/listemessouscription/"+iduser+'/'+idhoraire)
            console.log(response.data)
            if(response.data.status===200)
            {
                setlistehoraire(
                    response.data.listesouscrit
                )
            }
         }

        const ACCEPTER  = async (id) => {
                console.log(id)
                const response =  await axios.post("http://127.0.0.1:8000/api/valider/"+id)
                if(response.status===200)
                {
                    routers.push('/meshoraire')
                    alert('Reservation traité avec success')          
                }

        }

        const REFUSER  = async (id) => {
            console.log(id)
            const response =  await axios.post("http://127.0.0.1:8000/api/refuser/"+id)
            if(response.status===200)
            {
                routers.push('/meshoraire')
                alert('Reservation traité avec success')          
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
                        <h1 className={styles.titreInscription}>LISTE DES ETUDIANTS AYANT SOUCRIT</h1>
                            <form >
                                    
                                    <table className={styles.customers}>
                                    <thead>
                                            <tr>
                                                <th>#</th>
                                      
                                                <th>Heure de la demande</th>
                                                <th>Nom de l'etudiant</th>

                                                <th>Operation</th>                                           
                                            </tr>
                                            
                                    </thead>
                                        <tbody>
                                            {
                                                listehoraire.length!=0 ?
                                                listehoraire.map(((listehoraire,index)=>
                                                    <tr key={listehoraire.id}>
                                                        <td>{index+1}</td>
                                                        <td>{listehoraire.created_at} </td>
                                                        <td>{listehoraire.nom} {listehoraire.prenom}</td>
                                                        <td>
                                                                <div className={styles.parentdiv}>
                                                                        <div className={styles.Itemparentdiv}>
                                                                             <button 
                                                                                onClick={(e)=>{ACCEPTER(listehoraire.id);
                                                                                e.preventDefault()}}    
                                                                             >
                                                                                accepter
                                                                            </button>

                                                                        </div>
                                                                        <div className={styles.Itemparentdiv}>
                                                                                    <button
                                                                                        onClick={(e)=>{REFUSER(listehoraire.id);
                                                                                        e.preventDefault()}}   
                                                                                        className={styles.btnannuler}
                                                                                    >
                                                                                        Refuser
                                                                                    </button>
                                                                        </div>

                                                                </div>
                                                        </td>
                                                   
                                                    </tr>
                                                ))
                                                :
                                                    <tr>
                                                            <td>Aucun étudiant n'a encore souscrit pour l'instant</td>
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

export default Listesouscription;
