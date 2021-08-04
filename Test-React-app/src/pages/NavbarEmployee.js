import { Link } from 'react-router-dom';

const NavbarEmployee = () => {
    return (
        <>
            <nav className="navbar navbar-light bg-light">

                <div className="col col-lg-2">
                    <Link to='/home' className="btn btn-info">Index</Link>
                </div>

                <Link to='/add-job' className="btn btn-primary btn-sm">Add Job</Link>

                <div className="row">
                    <h1></h1>
                </div>

            </nav>
            <h4>

            </h4>
        </>

    );
}

export default NavbarEmployee;