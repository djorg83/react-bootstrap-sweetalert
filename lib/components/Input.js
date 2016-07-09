'use strict';
import React        from 'react';
import objectAssign from 'object-assign';
import styles       from '../styles/SweetAlertStyles';

export default class Input extends React.Component {

    componentDidMount() {
        if (this.props.type === 'input') {
            try {
                this.refs.input.focus(); 
            } catch (e) {
                // whoops
            }
        }
    }

	render() {
		return (
			<div style={{position:'relative'}}>

				{this.props.inputType === 'textarea' ? (
					<textarea 
			            ref="input"
			            rows={4}
			            className="form-control" 
			            value={this.props.inputValue || ''}
			            onChange={this.props.onChangeInput}
			            onKeyDown={this.props.onInputKeyDown} 
			            placeholder={this.props.inputPlaceHolder || this.props.placeholder} />
				) : (
			        <input 
			            type={this.props.inputType}
			            ref="input"
			            className="form-control" 
			            value={this.props.inputValue || ''}
			            onChange={this.props.onChangeInput}
			            onKeyDown={this.props.onInputKeyDown} 
			            placeholder={this.props.inputPlaceHolder || this.props.placeholder} />
				)}


		        {this.props.showValidationMessage && (
		            <div style={styles.inputErrorIcon}>
		                <div style={objectAssign({}, styles.inputErrorIconBeforeAfter, styles.inputErrorIconBefore)}></div>
		                <div style={objectAssign({}, styles.inputErrorIconBeforeAfter, styles.inputErrorIconAfter)}></div>
		            </div>
		        )}

		    </div>
		);
	}
}