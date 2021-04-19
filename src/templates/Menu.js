const Menu = () => {
    const view = `
        <nav id="side-menu">
            <img src="/src/img/savemoney.png"  id="img-logo" alt="logo">
            <p class="white-text app-title">Save My Money</p>
            <ul class="nav">
                <li class="menu-title-home">
                    <img class="size-icon" src="src/img/home.png" alt="Menu icon home"></img>
                    <a class="white-text" href="/">Home</a>
                </li>
                <li class="menu-title-expense">
                    <img class="size-icon" src="src/img/money-bag.png" alt="Menu icon expense"></img>
                    <a class="white-text" href="#/expense/">New Expense</a>
                </li>
            </ul>


            <button class="button button-logout">logout</button>
        </nav>
    `;

    return view;
};

export default Menu;