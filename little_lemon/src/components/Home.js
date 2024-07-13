import Footer from './Footer';
import Title from './Title';
import { Outlet, Link } from "react-router-dom";
//import Header from './Header';
function Home(){
    return(
    <>
    <Title/>
    <main>
        <section class="home" id="home">
            <div>
            <img src="https://t3.ftcdn.net/jpg/00/27/57/96/360_F_27579652_tM7V4fZBBw8RLmZo0Bi8WhtO2EosTRFD.jpg" alt="images" width="300px" class="img"/>
                <h2>New-Menu</h2>
                <p>Try out our new recepies here. </p>
                <Link to="/menu">Click Here</Link>
            </div>
            <div><img src="https://media.istockphoto.com/id/912129754/photo/reserved-sign-on-restaurant-table-with-bar-background.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=M_rMx1hUYjsnL0Qkve2fe7qGuWZduZ1VtLWsv8G8NrA=" alt="r1"width="300px" />
                <h2>Book the table</h2>
                <p>Make sure to make reservation for table here.</p>
                <Link to="/booking">Click Here</Link>
                </div>
            <div><img src="https://c0.wallpaperflare.com/preview/436/87/720/artesanal-pizza-cheese-close-up-cooking.jpg" width="300px" alt="r2"class="img"/>
                <h2>Opening Hours</h2>
                <p>You now try our recepies during our opening hours as below:</p>
                9:00a.m to 8:00p.m.(Mon to Fri)
                Off on Saturdays
                </div>
        </section>
    </main>
    <Outlet />
    {/*<Menu/>*/}
    <Footer/>
    </>)
}
export default Home;