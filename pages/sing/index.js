import Navbar2 from '../../component/header2';
import styles from './Sing.module.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
function Singup() {
    
    
    const [email,setEmail] = useState()
    const [password,setPassword]=useState()
    const router= useRouter()
    const Sing =  async (e) => {
        e.preventDefault()
        const data = {email,password}
        console.log(data)
        const response  = await axios.post("http://127.0.0.1:8000/api/authentification",data)
        console.log(response)
        if(response.data.status ===200)
        {
            localStorage.setItem('user', JSON.stringify(response.data.user))
            alert('Connexion resussit')
            router.push('/')
          
        }
            
    }
    return ( 
              <div>
                 <Navbar2/>
                 <div className={styles.containerInput} >
                    <div className={styles.containerInputItem} id={styles.divImage2}>
                        <h1 className={styles.titreInscription}>FORMULAIRE DE CONNEXION</h1>
                            <form onSubmit={Sing}>
 
                                     <input 
                                        placeholder="Entrer votre  email"
                                        className={styles.input}
                                        type= "email"   
                                        name='email'
                                        value={email}                         
                                        onChange={(e)=>setEmail(e.target.value)}                           
                                    /> 
                                    <input 
                                        placeholder="Entrer  votre password"
                                        className={styles.input}
                                        type= "password"
                                        name="password"
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}                              
                                    /> 
                                   
                                    <button
                                        className={styles.btnsinscrire}
                                        type="submit"
                                        >S'inscrire
                                     </button>
        
                            </form>                  
                    </div>
                </div>

                <div className={styles.space}></div>
            </div>
 
     );
}

export default Singup;