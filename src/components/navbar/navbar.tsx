import useAuth from '../../hooks/useAuth'
import { useAuthStore } from '../../store/auth.store'

const Navbar = () => {
    const {logout} = useAuth()
    const {isLoading} = useAuthStore()
    return (
        <div className='container'>
            <div className="d-flex flex-column flex-md-row align-items-center p-3  mb-4 border-bottom">
                <a href="/" className="d-flex justify-content-center align-items-center gap-2 link-body-emphasis text-decoration-none">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6AK12XKrxhRmkXPsNBXVAaj-XD1VGRS-sGVO-aIUN6LYsGinx" className='pt-2' width='55' height='55' alt="" />
                    <span className="fs-4">Pricing example</span>
                </a>

                <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                    <button className='btn btn-outline-primary' onClick={logout} disabled={isLoading}>
                        {isLoading ? '...' : 'Logout'}
                    </button>
                </nav>
            </div>
        </div>
    )
}

export default Navbar