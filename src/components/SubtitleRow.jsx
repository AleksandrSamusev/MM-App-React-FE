export const SubtitleRow = () => {
    return (
        <>
            <div className="col-1 d-flex p-0 align-items-center justify-content-start">
                <span style={{width: '20px', height: '20px', backgroundColor: '#414141'}}></span>
            </div>
            <div className="col-11 d-flex align-items-center justify-content-start">
                                <span
                                    style={{
                                        color: 'white',
                                        fontFamily: 'Montserrat',
                                        fontWeight: '500',
                                        fontSize: '16px'
                                    }}>Select a period (quarter or month)</span>
            </div>
        </>
    )
}