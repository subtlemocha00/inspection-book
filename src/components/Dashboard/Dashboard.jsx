import { cards } from './cards'
import DashboardButton from './DashboardButton'

const Dashboard = ({ user }) => {
    console.log(cards)
    return (
        <>
            <h1>Welcome, {user.username}</h1>
            <div className="container row p-auto m-auto justify-content-center">
                {cards.map((card) => {
                    return (
                        <DashboardButton key={card.title} name={card.title} image={card.image} />
                    )
                }
                )}
            </div>
        </>
    )
}

export default Dashboard;