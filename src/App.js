import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductList from "./ProductList";
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';

function App() {
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     title: 'produk 1',
  //     price: 1000
  //   },
  //   {
  //     id: 2,
  //     title: 'produk 2',
  //     price: 2000
  //   },
  //   {
  //     id: 3,
  //     title: 'produk 3',
  //     price: 4000
  //   },
  //   {
  //     id: 4,
  //     title: 'produk 4',
  //     price: 6000
  //   },
  //   {
  //     id: 5,
  //     title: 'produk 5',
  //     price: 6000
  //   }
  // ])

  // const deleteProduct = (productId) => {
  //   const newProducts = products.filter(product => product.id !== productId)
  //   setProducts(newProducts);
  // }

  return (
    <Router>
      <div>        
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route path="/add">
            <AddProduct />
          </Route>
          <Route path="/edit/:id">
            <EditProduct />
          </Route>  
        </Switch>
      </div>
    </Router>
  )
}
export default App;

// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
// import  List  from './List';


// function App() {
//   const [contacts,setContacts] = useState([
//     {
//       id : 1,
//       name: 'dimas kenzo',
//       telp: '123456'
//     },
//     {
//       id : 2,
//       name: 'ani ruwanti',
//       telp: '1234567'
//     }
//   ]);

//   return (
//     <div>
//       <Container>
//         <Row className="justify-content-center">
//           <Col xs={5} className="py-5">
//             <Card>
//               <Card.Body>
//                 <Form>
//                 <h4 style ={{textAlign: 'center'}} >Aplikasi Kontak</h4>
//                 <h5 style ={{textAlign: 'center'}} >Tambah Data Kontak</h5>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Nama Kontak</Form.Label>
//                     <Form.Control type="text" placeholder="Masukan Nama" />
//                   </Form.Group>
//                   <Form.Group className="mb-3">
//                     <Form.Label>No Hp</Form.Label>
//                     <Form.Control type="text" placeholder="Masukan No HP" />
//                   </Form.Group>
//                   <Button variant="primary" type="submit">Submit</Button>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//       <List />
//     </div>
//   );
// }
// export default App;
