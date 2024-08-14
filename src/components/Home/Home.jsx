import Nav from "../Nav/Nav.jsx";
import Container from "../Container/Container.jsx";
import Footer from '../Footer/Footer';



function Home() {
    return (
        <>
        <div className="h-screen">
            <Nav />
            <Container />
        </div>
        <Footer/>
        </>
          
        );
    
    }
    
    
    export default Home;