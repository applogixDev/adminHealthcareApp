import './home.css';
import './styles.css';


const Home = () =>{

    return(

        <>
        
        <div className='landing-page'>
            <div className='wrapper'>
                <div className='d-flex flex-column text-center align-items-center justify-content-center h-100'>
                    <div className='text mt-4 p-4'>
                     <h2 className='display-3 heading-text'>Welcome To Health Care App</h2>
                     <p className='h2 sub-headings'>You can use this application to manage your bookings and patients data.  </p>
                     <p className='h2 sub-headings'>We can customise the portal as per your requirements  </p>
                     <p className='h2 sub-headings'>Connect with us for more details  </p>
                     <button className='btn home-button home-button-text'>Contact Us</button>
                     </div>
                </div>


                
            </div>

        </div>

        <div className='container'>
            <div className='row mt-3'>
                <div className='col'>
                   
                </div>
            </div>
        </div>
        </>

    );
}

export default Home;