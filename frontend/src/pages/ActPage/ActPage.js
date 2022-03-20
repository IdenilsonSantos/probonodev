import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, FormControl, Form, FormGroup, FormLabel, Button, Image  } from 'react-bootstrap';
import { useState } from 'react';
import api from '../../services/api';
import './styles.css';
import Header from '../../components/Header';
import { getToken, isAuthenticated } from '../../services/auth';

function ActPage() {

  const [city, setCity] = useState({
    name: '',
    data: [],
    error: ''
  });
  const [loading, setLoading] = useState(true);
  let response;
  const token = getToken();

const handleListActivities = async e => {
    e.preventDefault();

    const { name } = city;

    if (name === '') {
        setCity({ ...city, error: 'Preencha seus dados para continuar!' });
    } else {
      setLoading(true);
      
        if(!isAuthenticated){
          response = await api.get('activity/city', { params: {
            city_name: name
          }})

          setCity({...city, data: response.data})
        }
        else {

          let config = {
            headers: {'Authorization': token},
            params: {
              city_name: name
            },
          }
          response = await api.get('activity/user/save', config)

          setCity({...city, data: response.data})
        }
        setLoading(false);
    }

    
};

  return (
    <>
    <Header></Header>
   <Container>
     <Row>
        <Col md={8} className="frm">
          <Card className='card-frm'>
          <Form onSubmit={handleListActivities} className='frm-box'>
  <FormGroup className="mb-4 frm-grp" controlId="formBasicEmail">
    <FormControl type="text" name="city"
                            value={city.name}
                            onChange={e => setCity({ ...city, name: e.target.value })}
 placeholder="Digite sua cidade" />
  <Button className="btn-send" variant="primary" type="submit">
    Buscar
  </Button >
  </FormGroup>
 
</Form>
          </Card>
        </Col>
      </Row>

      <Row>
       {!loading && (
        <>
        
         {city.data.map((item) => (
          <Card key={item._id || item.id} className='card-sug'>
          <span><strong>City Name:</strong> {item.city}</span>
          <span><strong>Activity:</strong> {item.activity_title}</span>
          <span><strong>Suggestion:</strong> {item.suggested_location}</span>
          <span><strong>Conditions:</strong> {item.suggested_weather_conditions}</span>
          <Image src={item.photo_url}></Image>
        </Card>
        ))}
        </>
       )}
      </Row>
   </Container>
    </>
  );
}

export default ActPage;
