import Head from 'next/head'
import Footer from '../components/footer';
import Login from '../components/login';
import Navigation from '../components/navigation';

const Home = () => {
    return (
        <div>
            <Head>
                <title>NJK Website</title>
            </Head>
            <h1 id="title">NJK-Web</h1>
            <Login />
            <Navigation />
            <Footer />
        </div>
    )
}

export default Home
