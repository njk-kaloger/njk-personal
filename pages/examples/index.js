import Head from 'next/head'
import Game from '../../components/tic-tac';
import Timer from '../../components/timer';
import Footer from '../../components/footer';
import Login from '../../components/login';
import Navigation from '../../components/navigation';

const Examples = () => {
    return (
        <div>
            <h1 id="title">Example Page</h1>
            <Login />
            <Navigation />
            <br />
            <br />
            <div className="example-content">
                <Timer />
                <br />
                <Game />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Examples
