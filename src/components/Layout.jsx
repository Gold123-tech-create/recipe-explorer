import ErrorBoundary from './ErrorBoundary'
import { Link, Outlet } from 'react-router-dom'

function Layout() {
    return (
    <div>
        <header>
        <h1>🍲 Recipe Explorer</h1>

        <nav>
            <Link to="/">Search</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>
        </header>

        <main>
        <ErrorBoundary>
  <Outlet />
</ErrorBoundary>
        </main>
    </div>
    )
}

export default Layout