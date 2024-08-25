export const NavCard = (props) => {
    return (
        <div className="d-flex flex-row align-items-center justify-content-center nav-card" onClick={props.onClick}>
            <div className="d-flex justify-content-center first"
                style={{
                    backgroundColor: props.color,
                    width:'150px',
                    height: '100px',
                    fontFamily: 'Antonio',
                    fontSize: '60px',
                    color: props.titleColor,
                    paddingBottom: '7px'
            }} >
                <p className="mt-auto mb-auto mt-auto p-0">{props.title}</p>
            </div>

            <div className="px-4 d-flex justify-content-center align-items-center first"
                style={{
                border: '1px solid rgba(255, 255, 255, 0.3)',
                height: '100px',
                width: '415px',
                fontFamily: 'Montserrat',
                fontWeight: '500',
                fontSize: '18px',
                color: 'white'

            }}>
                {props.content}
            </div>
        </div>
    )
}