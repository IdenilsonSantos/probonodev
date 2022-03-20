import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, FormControl, Form, FormGroup, FormLabel, Button, Image  } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import api from '../../services/api';
import './styles.css';
import Header from '../../components/Header';
import { getToken, isAuthenticated } from '../../services/auth';

function LastActPage() {

  const [city, setCity] = useState({
    name: '',
    data: [],
    error: ''
  });
  const [loading, setLoading] = useState(true);
  let response;
  const token = getToken();

  useEffect(() => {
    const listActivities = async e => {
      
            setLoading(true);
  
            let config = {
              headers: {'Authorization': token}
            }
            response = await api.get('activities/last', config)
  
            setCity({...city, data: response.data})
          setLoading(false);
      
  };
  listActivities()
  }, []);



  return (
    <>
    <Header></Header>
   <Container>
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

export default LastActPage;
