import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, FormControl, Form, FormGroup, FormLabel, Button  } from 'react-bootstrap';
import api from '../services/api';
import '../App.css';
import { useState } from 'react';
import { login, isAuthenticated } from '../services/auth';
import { useNavigate } from 'react-router-dom';

function LoginPage() {

  const [user, setUser] = useState({
    error: '',
    email: '',
    password: '',
    messageStatus: ''
});

let navigate = useNavigate();

const handleSignIn = async e => {
    e.preventDefault();

    const { email, password } = user;

    if (user.email === '' || user.password === '') {
        setUser({ ...user, error: 'Preencha seus dados para continuar!' });

    } else {
        const response = await api.post('login', {email, password});
        
        if (response.status === 200) {
            setUser({ ...user, messageStatus: "Logado com sucesso" });
            login(response.data.token);
            navigate('/')
            
        }
        else{
            setUser({ ...user, messageStatus: "Usuário não logado" });
        }

        
        
    }
};

  return (
    
   <Container>
     <Row>
        <Col md={8} className="col-frm">
          <Card className='col-card'>
          <Form onSubmit={handleSignIn}>
  <FormGroup className="mb-4" controlId="formBasicEmail">
    <FormLabel>Email</FormLabel>
    <FormControl type="email" name="email"
                            value={user.email}
                            onChange={e => setUser({ ...user, email: e.target.value })}
 placeholder="Digite seu Email" />
  </FormGroup>

  <FormGroup className="mb-3" controlId="formBasicPassword">
    <FormLabel>Senha</FormLabel>
    <FormControl name="password"
                            value={user.password}
                            onChange={e => setUser({ ...user, password: e.target.value })}
 type="password" placeholder="Digite sua senha" />
  </FormGroup>
  <Button className="btn-login" variant="primary" type="submit">
    Logar
  </Button >
</Form>
          </Card>
        </Col>
        
      </Row>
   </Container>
  );
}

export default LoginPage;
