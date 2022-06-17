const Dashboard = () => {
    return (
        <section id="dashboard-page" class="dashboard">
            <h1>Dashboard</h1>
            <ul class="other-pets-list">
                <li class="otherPet">
                    <h3>Name: Buddy</h3>
                    <p>Type: dog</p>
                    <p class="img"><img src="/images/dog2.png" /></p>
                    <a class="button" href="#">Details</a>
                </li>

                <li class="otherPet">
                    <h3>Name: Tyson</h3>
                    <p>Type: parrot</p>
                    <p class="img"><img src="/images/parrot.png" /></p>
                    <a class="button" href="#">Details</a>
                </li>

                <li class="otherPet">
                    <h3>Name: Milo</h3>
                    <p>Type: dog</p>
                    <p class="img"><img src="/images/dog.png" /></p>
                    <a class="button" href="#">Details</a>
                </li>

                <li class="otherPet">
                    <h3>Name: Tom</h3>
                    <p>Type: cat</p>
                    <p class="img"><img src="/images/cat1.png" /></p>
                    <a class="button" href="#">Details</a>
                </li>
            </ul>
            <p class="no-pets">No pets in database!</p>
        </section>
    );
}

export default Dashboard;