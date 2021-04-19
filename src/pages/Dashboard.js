const Dashboard = () => {
    const view = `
        <section class="content-dashboard">
            <div class='cards-header'>
                <p id="title-name-user"><b>Welcome, </b> Ithzamary</p>
                <section class="card-total">
                    <p class="white-text card-total__text">Montly expenses</p>
                    <p class="card-total__total-expenses">$2,000.00</p>
                    <p class="white-text card-total__footer-text">your last expense was on: <span><span></p>
                </section>
                <section class="card-user">
                    <img class="img-user" src="src/img/profile-w.png"></img>
                    <p class="black-text">User name</p>
                </section>
            <div>
            <section class="search-expense">
                <p class="text-instructions">Search your expense per date</p>
                
                <label id="alert-search" class="alert" style="display:none">Please select the date before searching</label>

                <input class="input" type="date" id="date-search"></input>
                <button class="button search-expense__button" onclick="search()">Buscar</button>
            </section>

            <ul class="list-expenses">
                <li class="item">
                    <p>date: 16/04/2021</p>
                    <p>expense: $500.00</p>
                    <p>where: Costco</p>
                </li>
            </ul>
        </section>
    `;

    window.search=() =>{
        let dateSearch = document.getElementById('date-search').value;
        const alertSearch = document.getElementById('alert-search');

        if(dateSearch == null || dateSearch === ''){
            alertSearch.style.display = 'block';
        }else{
            alertSearch.style.display = 'none';
            console.log(dateSearch);
        }
    }

    return view;
}

export default Dashboard;