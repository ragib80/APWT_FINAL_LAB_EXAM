import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">

                <div className="col col-lg-2">
                    <Link to='/admin' className="btn btn-info">Index</Link>
                </div>

                <Link to='/add-employer' className="btn btn-primary btn-sm">Add Employee</Link>

                <Link to='/employee/search' className='btn btn-info m-2'>Search Employee</Link>

                <Link to='/' className="btn btn-outline-danger">Logout</Link>

                <div className="row">
                    <h1></h1>
                </div>



            </nav>
            <h4>

            </h4>
        </>

    );
}

export default Navbar;