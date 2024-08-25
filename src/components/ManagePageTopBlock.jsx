import {NavCard} from "./NavCard.jsx";

export const ManagePageTopBlock = () => {
    return (
        <div className="col-6 d-flex justify-content-start align-items-center px-5">
            <NavCard title='2024'
                     content='Manage your expenses and incomes in 2024.'
                     color='rgba(110, 255, 60, 0.5)'
                     titleColor='white'
            />
        </div>
    )
}