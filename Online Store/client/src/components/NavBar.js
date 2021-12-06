import React, {useContext} from 'react';
import {Context} from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import {ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'
import Lovary1 from "../assets/Lovary1.png";
import shopping1 from "../assets/shopping1.png";
const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'red'}} to={BASKET_ROUTE}>Home</NavLink>
                <Nav
                    className="d-flex align-items-center justify-content-center"
                    style={{background: `url(${Lovary1}) no-repeat center center`, width:370, height: 120, backgroundSize: 'cover'}}>
                </Nav>
                {user.isAuth ?

                    <Nav className="ml-4" style={{color: 'white'}}>
                        <Button variant={"outline-danger"}
                                onClick={() => history.push(SHOP_ROUTE)}>
                                    Каталог
                                    </Button>
                        <Button
                            variant={"outline-danger"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Адмін панель
                        </Button>

                        <Button
                            variant={"outline-danger"}
                            onClick={() => logOut()}
                            className="ml-4"
                        >
                            Вийти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-danger"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизація</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;