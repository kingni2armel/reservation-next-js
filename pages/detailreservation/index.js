import Navbar2 from '../../component/header2';
import styles from './detaile.module.scss'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from "react"
import axios from "axios";
import { useRouter } from "next/router";
function Detailreservation() {

    const [user,setUser]= useState([])
    const router = useRouter()
    const idhoraire= router.query.id
    console.log(idhoraire)
    const SOUSCRIRE  = async (e) => {
        e.preventDefault()
        const users = localStorage.getItem('user')
        const containStore = JSON.parse(users)
        console.log(containStore)
        const iduser =containStore['id'];
        console.log(iduser)
        const responses =  await axios.post('http://127.0.0.1:8000/api/souscrire/'+iduser+'/'+idhoraire)
        console.log(responses.data)
        if(responses.data.status===200)
        {
            alert(responses.data.message)
        }
     }     
     useEffect(()=>{
        const userStore= localStorage.getItem('user')
        setUser(JSON.parse(userStore))

    },[])
    return ( 
              <div>
                 <Navbar2/>
                 <div className={styles.containerInput} >
                    <div className={styles.containerInputItem} id={styles.divImage2}>

                        <form onSubmit={SOUSCRIRE}>
                        <button
                                        className={styles.btnsinscrire}
                                        type="submit"
                                        >Soumettre
                                     </button>
                        </form>
                                       
                    </div>
                </div>

                <div className={styles.space}></div>
            </div>
 
     );
}

export default Detailreservation;