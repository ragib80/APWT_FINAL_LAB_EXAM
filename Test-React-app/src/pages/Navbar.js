import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">

                <div className="col col-lg-2">
                    <Link to='/' className="btn btn-info">Index</Link>
                </div>

                <Link to='/add-employer' className="btn btn-primary btn-sm">Add Employee</Link>



                <Link to='/login' className="btn btn-secondary btn-lg">Employee Login</Link>

                <div className="row">
                    <h1></h1>
                </div>



            </nav>
            <h4>

            </h4>
        </>
        /* <div classNameNameName="container">
                <div classNameNameName="card">
                    <div classNameName="row justify-content-md-center">

                        <div classNameName="col col-lg-2">
                            <Link to='/' classNameNameName="btn btn-info">Index</Link>
                        </div>
                        <div classNameNameName="col col-lg-2">
                            <Link to='/add-student' classNameNameName="btn btn-primary btn-sm">Add Student</Link>
                        </div>

                        <div classNameNameName="col col-lg-2">
                            <Link to='/userlist'>User List</Link>
                        </div>
                        <div classNameNameName="row">
                            <h4></h4>
                        </div>
                    </div>
                </div>
            </div >*/
    );
}

export default Navbar;