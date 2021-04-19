const NewExpense = () => {
    const view = `

        <p id="title-name-user"><b>Welcome, </b> Ithzamary</p>

        <section class="content-newexpense">
            <p class="text-instructions text-instructions--expense">Fill the blanks for register a new expense</p>

            <label id="alert" class="alert" style="display:none">There are some inputs empty.</label>
            <input id="money" class="input-expense input" type="number" placeholder="money"></input>
            <input id="place" class="input-expense input" type="text" placeholder="where did you spend"></input>
            <input id="date" class="input-expense input" type="date" placeholder="date"></input>

            <button class="button save-expense__button" id="save" onclick="saveExpense()">save</button>
        </section>
    `;

    window.saveExpense= () => {
        let money = document.getElementById('money').value;
        let place = document.getElementById('place').value;
        let date = document.getElementById('date').value;
        const alert = document.getElementById('alert');

        if(money == null || money=== ''){
            alert.style.display='block';
        }else if(place == null || place === ''){
            alert.style.display='block';
        }else if(date == null || date === ''){
            alert.style.display='block';
        }else{
            alert.style.display='none';
            const data = {
                "money": money,
                "place": place,
                "date": date 
            }

            document.getElementById('money').value ='';
            document.getElementById('place').value = '';
            document.getElementById('date').value = '';

            console.log(data);
        }
    }

    return view;
}


export default NewExpense;