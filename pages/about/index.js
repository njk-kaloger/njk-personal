import ImageCard from '../../components/image-card';
import Footer from '../../components/footer';
import Login from '../../components/login';
import Navigation from '../../components/navigation';

const About = () => {
    return (
        <div>
            <h1 id="title">About Page</h1>
            <Login />
            <Navigation />
            <h2 id="subtitle">About Me</h2>
            <div className="third-container">
                <ImageCard
                    name="Nicholas Kaloger"
                    image="assets/images/profile.jpg"
                />
            </div>
            <Footer />
        </div>
    )
}

export default About
