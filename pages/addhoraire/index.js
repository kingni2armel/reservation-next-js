import Navbar2 from '../../component/header2';
import styles from './Addhoraire.module.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from "react"
import axios from "axios";
import { useRouter } from "next/router";
function Addhoraire() {
    
    const [horaire_debut,Sethoraire_debut] = useState()
    const [horaire_fin,Sethoraire_fin] =  useState()
    const  [user,setUser]= useState()
    const router= useRouter()
    const createhoraire =  async (e) => {
        e.preventDefault()
        const data = {horaire_debut,horaire_fin}
        const id = user.id
        console.log(data)
        const response  = await axios.post("http://127.0.0.1:8000/api/addhoraire/"+id,data)
        console.log(response)
        if(response.data.status ===200)
        {
          alert(response.data.message) 
        }      
    }
    useEffect(() => {
        const userStore= localStorage.getItem('user')
        setUser(JSON.parse(userStore))
    }, [])

    return ( 
              <div>
                 <Navbar2/>
                 <div className={styles.containerInput} >
                    <div className={styles.containerInputItem} id={styles.divImage2}>
                        <h1 className={styles.titreInscription}>FORMULAIRE DE CREATION D'UNE HORAIRE</h1>
                            <form onSubmit={createhoraire}>
                                    
                                    <input 
                                        placeholder="Entrer votre  nom"
                                        className={styles.input}
                                        type= "datetime-local"   
                                        name="horaire_debut"  
                                        value={horaire_debut}
                                        onChange={(e)=>Sethoraire_debut(e.target.value)}
                        
                                    />  
                                    <input 
                                        placeholder="Entrer  votre password"
                                        className={styles.input}
                                        type= "datetime-local"
                                        name="horaire_fin"
                                        value={horaire_fin}
                                        onChange={(e)=>Sethoraire_fin(e.target.value)}                              
                                    /> 
                                   
                                    <button
                                        className={styles.btnsinscrire}
                                        type="submit"
                                        >Creer l'horaire
                                     </button>
        
                            </form>                  
                    </div>
                </div>

                <div className={styles.space}></div>
            </div>
 
     );
}

export default Addhoraire;