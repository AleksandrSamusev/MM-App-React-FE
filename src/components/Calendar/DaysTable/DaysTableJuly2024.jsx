export const DaysTableJuly2024 = (props) => {
    return (
        <table style={{color: 'black', width: '100%'}}>
            <thead>
            <tr style={{height: '30px'}}>
                <th className="text-center" style={{backgroundColor: 'lightgray'}}>Mo</th>
                <th className="text-center" style={{backgroundColor: 'lightgray'}}>Tu</th>
                <th className="text-center" style={{backgroundColor: 'lightgray'}}>We</th>
                <th className="text-center" style={{backgroundColor: 'lightgray'}}>Th</th>
                <th className="text-center" style={{backgroundColor: 'lightgray'}}>Fr</th>
                <th className="text-center" style={{backgroundColor: 'lightgray'}}>Sa</th>
                <th className="text-center" style={{backgroundColor: 'lightgray'}}>Su</th>
            </tr>
            </thead>
            <tbody>
            <tr style={{height: '26px'}}>
                <td id="01" onClick={props.handleDaySelection} className="text-center calendar-element">1</td>
                <td id="02" onClick={props.handleDaySelection} className="text-center calendar-element">2</td>
                <td id="03" onClick={props.handleDaySelection} className="text-center calendar-element">3</td>
                <td id="04" onClick={props.handleDaySelection} className="text-center calendar-element">4</td>
                <td id="05" onClick={props.handleDaySelection} className="text-center calendar-element">5</td>
                <td id="06" onClick={props.handleDaySelection} className="text-center calendar-element">6</td>
                <td id="07" onClick={props.handleDaySelection} className="text-center calendar-element">7</td>
            </tr>
            <tr style={{height: '26px'}}>
                <td id="08" onClick={props.handleDaySelection} className="text-center calendar-element">8</td>
                <td id="09" onClick={props.handleDaySelection} className="text-center calendar-element">9</td>
                <td id="10" onClick={props.handleDaySelection} className="text-center calendar-element">10</td>
                <td id="11" onClick={props.handleDaySelection} className="text-center calendar-element">11</td>
                <td id="12" onClick={props.handleDaySelection} className="text-center calendar-element">12</td>
                <td id="13" onClick={props.handleDaySelection} className="text-center calendar-element">13</td>
                <td id="14" onClick={props.handleDaySelection} className="text-center calendar-element">14</td>
            </tr>
            <tr style={{height: '26px'}}>
                <td id="15" onClick={props.handleDaySelection} className="text-center calendar-element">15</td>
                <td id="16" onClick={props.handleDaySelection} className="text-center calendar-element">16</td>
                <td id="17" onClick={props.handleDaySelection} className="text-center calendar-element">17</td>
                <td id="18" onClick={props.handleDaySelection} className="text-center calendar-element">18</td>
                <td id="19" onClick={props.handleDaySelection} className="text-center calendar-element">19</td>
                <td id="20" onClick={props.handleDaySelection} className="text-center calendar-element">20</td>
                <td id="21" onClick={props.handleDaySelection} className="text-center calendar-element">21</td>
            </tr>
            <tr style={{height: '26px'}}>
                <td id="22" onClick={props.handleDaySelection} className="text-center calendar-element">22</td>
                <td id="23" onClick={props.handleDaySelection} className="text-center calendar-element">23</td>
                <td id="24" onClick={props.handleDaySelection} className="text-center calendar-element">24</td>
                <td id="25" onClick={props.handleDaySelection} className="text-center calendar-element">25</td>
                <td id="26" onClick={props.handleDaySelection} className="text-center calendar-element">26</td>
                <td id="27" onClick={props.handleDaySelection} className="text-center calendar-element">27</td>
                <td id="28" onClick={props.handleDaySelection} className="text-center calendar-element">28</td>
            </tr>
            <tr style={{height: '26px'}}>
                <td id="29" onClick={props.handleDaySelection} className="text-center calendar-element">29</td>
                <td id="30" onClick={props.handleDaySelection} className="text-center calendar-element">30</td>
                <td id="31" onClick={props.handleDaySelection} className="text-center calendar-element">31</td>
                <td className="text-center calendar-element-disabled">1</td>
                <td className="text-center calendar-element-disabled">2</td>
                <td className="text-center calendar-element-disabled">3</td>
                <td className="text-center calendar-element-disabled">4</td>
            </tr>
            </tbody>
        </table>
    )
}