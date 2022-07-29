import Navbar2 from '../../component/header2';
import styles from './Singup.module.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
function Singup() {
    
    const [nom,setNom] =  useState()
    const [prenom,setPrenom] = useState()
    const [age,setAge] = useState()
    const [telephone,setTelephone] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword]=useState()
    const [role,setRole]=useState('teacher')

    const router= useRouter()
    const Singup =  async (e) => {
        e.preventDefault()
        const data = {nom,prenom,age,telephone,email,password,role}
        console.log(data)
        const response  = await axios.post("http://127.0.0.1:8000/api/singup",data)
        console.log(response)
        if(response.data.status ===200)
        {
            alert(response.data.message)
            setNom('')
            setPrenom('')
            setAge('')
            setTelephone('')
            setEmail('')
            setPassword('')
            setRole('')
            router.push('/sing')
        }
            
    }

    return ( 
              <div>
                 <Navbar2/>
                 <div className={styles.containerInput} >
                    <div className={styles.containerInputItem} id={styles.divImage2}>
                        <h1 className={styles.titreInscription}>FORMULAIRE D'INSCRIPTION</h1>
                            <form onSubmit={Singup}>
                                    
                                    <input 
                                        placeholder="Entrer votre  nom"
                                        className={styles.input}
                                        type= "text"   
                                        name="nom"  
                                        value={nom}
                                        onChange={(e)=>setNom(e.target.value)}
                        
                                    />  
                                    <input 
                                        placeholder="Entrer votre  Prenom"
                                        className={styles.input}
                                        type= "text"
                                        name="prenom"  
                                        value={prenom}
                                        onChange={(e)=>setPrenom(e.target.value)}
                                    />  
                                     <input 
                                        placeholder="Entrer votre  age"
                                        className={styles.input}
                                        type= "number"
                                        name="age"  
                                        value={age}
                                        onChange={(e)=>setAge(e.target.value)}             
                                    />  
                                    <input 
                                        placeholder="Entrer votre  numero de telephone"
                                        className={styles.input}
                                        type= "number" 
                                        name="telephone"  
                                        value={telephone}
                                        onChange={(e)=>setTelephone(e.target.value)}                             
                                    /> 
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
                                    <select 
                                        className={styles.input}
                                        name="role"
                                        onChange={(e)=>setRole(e.target.value)}
                                        value={role}
                                    >
                                        <option value="teacher">Teacher</option>
                                        <option value="student">Student</option>
                                    </select>
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