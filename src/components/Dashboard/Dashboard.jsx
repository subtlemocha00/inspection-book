import { cards } from './cards'
import DashboardButton from './DashboardButton'

const Dashboard = ({ user, showJobList, showDashboard }) => {
    return (
        <>
            <h1>Welcome, {user.username}</h1>
            <div className="container row p-auto m-auto justify-content-center">
                {cards.map((card) => {
                    return (
                        <DashboardButton key={card.title} name={card.title} image={card.image} showJobList={showJobList} showDashboard={showDashboard} />
                    )
                }
                )}
            </div>
        </>
    )
}

export default Dashboard;