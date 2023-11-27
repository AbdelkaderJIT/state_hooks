import Card from 'react-bootstrap/Card';




const  MovieCard = (props) => {
    console.log(props.el)
    return ( 
<>

        <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={props.el.posterUrl} />
      <Card.Body>
        <Card.Title>Title: {props.el.title} </Card.Title>
        <Card.Text>
         Movie description: {props.el.description} 
        </Card.Text>
        <Card.Text>
         Rating : {props.el.rating} Stars
        </Card.Text>
      </Card.Body>
    </Card>


</>
  );
}

export default MovieCard;