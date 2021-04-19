import Menu from '../templates/Menu';
import Error404 from '../templates/Error404'
import Dashboard from '../pages/Dashboard';
import NewExpense from '../pages/NewExpense';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';


const routes = {
    '/savemymoney' : Dashboard,
    '/expense': NewExpense
}

const router = async() => {
    const menu = null || document.getElementById('side-menu');
    const content = null || document.getElementById('content');

    menu.innerHTML = await Menu();

    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;

    content.innerHTML = await render();
}

export default router;