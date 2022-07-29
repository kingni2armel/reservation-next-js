import Link from "next/link";
import { useRouter } from "next/router";
import { useState,useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';import Nav from 'react-bootstrap/Nav';
import style from './Header.module.scss'

function Navbar2() {

    const  [user,setUser]= useState()
    const router = useRouter()
    const Logout = (e) => {
        window.onload
        localStorage.removeItem('user') 
        router.push('/')  
    }
    useEffect(() => {
        const userStore= localStorage.getItem('user')
        setUser(JSON.parse(userStore))
    }, [])
    return (  

        <div className={style.container_header}> 
            <div>
                
            </div>
            <div>
                <ul className={style.conteiner_li}> 
                    <li className={style.liItem}>
                        <Link href='/'>
                                <a>Accueil</a>
                        </Link>
                    </li>
                    <li className={style.liItem}>
                        <Link href=''>
                                <a>Contact</a>
                        </Link>
                    </li>
                    {
                    user?.role?
                    <li className={style.liItem}>
                    
                    </li>
                    :<li className={style.liItem}>
                           <Link href='/sing'>
                                <a>Se connecter</a>
                        </Link>
                    </li>
                }
                    {
                    user?.role?
                    <li className={style.liItem}>
                        <Button  
                            className={style.button}
                            variant="primary"
                            onClick={Logout}
                        >
                            Deconnexion
                        </Button>
                    </li>
                    :<li className={style.liItem}>
                           <Link href='/singup'>
                                <a>S'inscire</a>
                        </Link>
                    </li>
                }
      
                    {
                    user?.role === 'teacher'?
                    <li className={style.liItem}>
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="success" 
                                id="dropdown-basic">
                                {user.nom} {user.prenom}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item 
                                    className={style.navItem}
                                    href="/addhoraire"
                                >
                                   Creer une horaire
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    className={style.navItem}
                                    href="listehoraire"
                                >
                                        Liste des horaires du systeme
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    className={style.navItem}
                                    href="meshoraire"
                                >
                                        Liste des mes horaires Non traités
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    className={style.navItem}
                                    href="horairetraite"
                                >
                                        Liste des mes horaires traités
                                </Dropdown.Item>
                               
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    :<li className={style.liItem}>
                    {/* <Link href='/sing'>
                            <a>Se connecter</a>
                    </Link> */}
                    </li>
                }    
                   {
                    user?.role === 'student'?
                    <li className={style.liItem}>
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="success" 
                                id="dropdown-basic">
                                {user.nom} {user.prenom}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item 
                                    className={style.navItem}
                                    href="/addreservation"
                                >
                                    Creer une reservation
                                </Dropdown.Item>
                                <Dropdown.Item 
                                    className={style.navItem}
                                    href="/reservationstudent"
                                >
                                        Liste de mes reservations
                                </Dropdown.Item>
                             
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                    :<li className={style.liItem}>
                   
                    </li>
                }   
               
                </ul>
            </div>
        </div>
    );
}

export default Navbar2;