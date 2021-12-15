import About from "./About";
import Button from "./Button";
import Footer from "./Footer";
import ReusableButton from "./ReusableButton";

const Home = () => {
    return (
        <div className="container">
            <h1>Home</h1>
            <p>This is the home page!</p>
            <ReusableButton>Home Page Button</ReusableButton>
            <About></About>
            <ReusableButton>About Page Button</ReusableButton>
            <Footer></Footer>
        </div>
    );
};

export default Home;