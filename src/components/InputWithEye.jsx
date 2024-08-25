import {EyeOpened} from "./SVGs/EyeOpened.jsx";
import {EyeClosed} from "./SVGs/EyeClosed.jsx";

export const InputWithEye = (props) => {
    return (
        <div className="row" style={{marginTop: props.mrg}}>
            <div className="col-2 offset-2 d-flex align-items-center" style={{paddingLeft: '30px'}}>
                <span className="input-label">{props.label}<span className="asterisk"> *</span></span>
            </div>
            <div className="col-4">
                <div className="row d-flex align-items-center">
                    <div className="col-10 p-0">
                        <input
                            type={props.type}
                            className="password-input"
                            placeholder={props.placeholder}
                            value={props.value}
                            onChange={props.onChange}
                        />
                    </div>
                    <div id={props.id} className="col-2 eye-div" onClick={props.onClick}>
                        {
                            props.type === 'password' ? <EyeOpened/> : <EyeClosed/>
                        }
                    </div>
                </div>
            </div>
            {
                props.error &&
                <div className="col-4 d-flex justify-content-start align-items-center"
                     style={{paddingLeft: '70px'}}>
                    <span className="mt-auto mb-auto empty-field-message">{props.error}</span>
                </div>
            }
        </div>

    )
}