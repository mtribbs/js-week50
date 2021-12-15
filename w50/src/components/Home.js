import About from "./About";
import Button from "./Button";
import Footer from "./Footer";

const Home = () => {
    return (
        <div className="container">
            <h1>Home</h1>
            <p>This is the home page!</p>
            <Button></Button>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;