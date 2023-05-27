import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './layout.module.css'

const Layout = () => {
    return <div>
                <header>
                    <ul>
                        <li className={css.header__btn}>
                            <NavLink className={({ isActive}) => isActive && css.active} to='/'>Home</NavLink>
                        </li>
                        <li className={css.header__btn}>
                            <NavLink className={({ isActive}) => isActive && css.active} to='/movies'>Movies</NavLink>
                        </li>
                    </ul>
                </header>
                <main>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </main>

            </div>;  
};

export default Layout;