import Head from 'next/head'
import ContactCard from '../../components/contact-card';
import ImageCard from '../../components/image-card';
import Footer from '../../components/footer';
import Login from '../../components/login';
import Navigation from '../../components/navigation';

const Contact = () => {
    return (
        <div>
            <h1 id="title">Contact Page</h1>
            <Login />
            <Navigation />
            <br />
            <br />
            <br />
            <div className="main">
                <div className="flex-container">
                    <ContactCard
                        type="Personal"
                        email="njk.kaloger@gmail.com"
                        number="0422-127-623"
                    />
                    <ContactCard
                        type="Swinburne"
                        email="101622489@student.swin.edu.au"
                        number="0422-127-623"
                    />
                    <ContactCard
                        type="Inlight"
                        email="nicholas.kaloger@inlight.com"
                        number="0422-127-623"
                    />
                </div>

                <div className="second-container">
                    <ImageCard
                        name="Nicholas Kaloger"
                        image="assets/images/profile.jpg"
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
