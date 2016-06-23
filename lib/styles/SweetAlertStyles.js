module.exports = {
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.4)',
		position: 'fixed',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		zIndex: 5000
	},
	sweetAlert: {
		backgroundColor: '#fff',
		width: 478,
		padding: 17,
		borderRadius: 5,
		textAlign: 'center',
		position: 'fixed',
		left: '50%',
		top: '50%',
		marginLeft: -256,
		marginTop: -200,
		overflow: 'hidden',
		zIndex: 5500,
		animation: 'showSweetAlert 0.3s'
	},
	sweetAlertMobile: {
		width: 'auto',
		marginLeft: 0,
		marginRight: 0,
		left: 15,
		right: 15
	},
	icon: {
		width: 80,
		height: 80,
		borderWidth: 4,
		borderStyle: 'solid',
		borderColor: 'gray',
		borderRadius: '50%',
		margin: '20px auto',
		position: 'relative',
		boxSizing: 'content-box'
	},
	iconError: {
		borderColor: '#d43f3a',
		animation: 'animateErrorIcon 0.5s'
	},
	iconErrorX: {
		position: 'relative',
		display: 'block',
		animation: 'animateXMark 0.5s'
	},
	iconErrorLine: {
		position: 'absolute',
		height: 5,
		width: 47,
		backgroundColor: '#d9534f',
		display: 'block',
		top: 37,
		borderRadius: 2
	},
	iconErrorLineLeft: {
		transform: 'rotate(45deg)',
		left: 17
	},
	iconErrorLineRight: {
		transform: 'rotate(-45deg)',
		right: 16
	},
	iconWarning: {
		borderColor: '#eea236',
		animation: 'pulseWarning 0.75s infinite alternate'
	},
	iconWarningBody: {
		position: 'absolute',
		width: 5,
		height: 47,
		left: '50%',
		top: 10,
		borderRadius: 2,
		marginLeft: -2,
		backgroundColor: '#f0ad4e',
		animation: 'pulseWarningIns 0.75s infinite alternate'
	},
	iconWarningDot: {
		position: 'absolute',
		width: 7,
		height: 7,
		borderRadius: '50%',
		marginLeft: -3,
		left: '50%',
		bottom: 10,
		backgroundColor: '#f0ad4e',
		animation: 'pulseWarningIns 0.75s infinite alternate'
	},
	iconInfo: {
		borderColor: '#46b8da'
	},
	iconInfoBefore: {
		content: "",
		position: 'absolute',
		width: 5,
		height: 29,
		left: '50%',
		bottom: 17,
		borderRadius: 2,
		marginLeft: -2,
		backgroundColor: '#5bc0de'
	},
	iconInfoAfter: {
		content: "",
		position: 'absolute',
		width: 7,
		height: 7,
		borderRadius: '50%',
		marginLeft: -3,
		left: '50%',
		top: 19,
		backgroundColor: '#5bc0de'
	},
	iconSuccess: {
		borderColor: '#4cae4c'
	},
	iconSuccessBeforeAfter: {
		content: '',
		borderRadius: '50%',
		position: 'absolute',
		width: 60,
		height: 120,
		background: 'white',
		transform: 'rotate(45deg)'
	},
	iconSuccessBefore: {
		borderRadius: '120px 0 0 120px',
		height: 100,
		top: -7,
		left: -33,
		transform: 'rotate(-45deg)',
		transformOrigin: '60px 60px'
	},
	iconSuccessAfter: {
		borderRadius: '0 120px 120px 0',
		top: -11,
		left: 30,
		transform: 'rotate(-45deg)',
		transformOrigin: '0px 60px',
		animation: 'rotatePlaceholder 4.25s ease-in'
	},
	iconSuccessPlaceholder: {
		width: 80,
		height: 80,
		border: '4px solid rgba(92, 184, 92, 0.2)',
		borderRadius: '50%',
		boxSizing: 'content-box',
		position: 'absolute',
		left: -4,
		top: -4,
		zIndex: 2
	},
	iconSuccessFix: {
		width: 5,
		height: 90,
		backgroundColor: '#fff',
		position: 'absolute',
		left: 28,
		top: 8,
		zIndex: 1,
		transform: 'rotate(-45deg)'
	},
	iconSuccessLine: {
		height: 5,
		backgroundColor: '#5cb85c',
		display: 'block',
		borderRadius: 2,
		position: 'absolute',
		zIndex: 2
	},
	iconSuccessLineTip: {
		width: 25,
		left: 14,
		top: 46,
		transform: 'rotate(45deg)',
		animation: 'animateSuccessTip 0.75s'
	},
	iconSuccessLineLong: {
		width: 47,
		right: 8,
		top: 38,
		transform: 'rotate(-45deg)',
		animation: 'animateSuccessLong 0.75s'
	},
	iconCustom: {
		backgroundSize: 'contain',
		borderRadius: 0,
		border: 'none',
		backgroundPosition: 'center center',
		backgroundRepeat: 'no-repeat'
	},
	button: {
		marginRight: 8
	},
	validationMessage: {
		display: 'block',
		backgroundColor: '#f1f1f1',
	    marginLeft: -17,
	    marginRight: -17,
	    marginTop: 20,
	    overflow: 'hidden',
	    padding: 10,
	    maxHeight: 100,
	    transition: 'padding 0.25s, max-height 0.25s',
	    color: '#797979',
	    fontSize: 16,
	    textAlign: 'center',
	    fontWeight: 300
	},
	exclamationIcon: {
		display: 'inline-block',
	    width: 24,
	    height: 24,
	    borderRadius: '50%',
	    backgroundColor: '#ea7d7d',
	    color: 'white',
	    lineHeight: '24px',
	    textAlign: 'center',
	    marginRight: 5
	},
	inputErrorIcon: {
		position: 'absolute',
	    top: 8,
	    right: 8,
	    width: 20,
	    height: 20,
	    opacity: 0,
	    transform: 'scale(0.5)',
	    transformOrigin: '50% 50%',
	    transition: 'all 0.1s',
	    opacity: 1,
	    transform: 'scale(1)'
	},
	inputErrorIconBeforeAfter: {
		content: "",
	    width: 20,
	    height: 6,
	    backgroundColor: '#f06e57',
	    borderRadius: 3,
	    position: 'absolute',
	    top: '50%',
	    marginTop: -4,
	    left: '50%',
	    marginLeft: -9
	},
	inputErrorIconBefore: {
		transform: 'rotate(-45deg)'
	},
	inputErrorIconAfter: {
		transform: 'rotate(45deg)'
	}
};