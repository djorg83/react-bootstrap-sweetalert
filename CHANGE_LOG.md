# Change Log

v5.1
-----
* Fixed deprecation warning from componentWillMount, componentWillUpdate and componentWillReceiveProps
* Fixed Sweetalert input validation message overflowing container.
* Added `props.focusCancelBtn` that focuses on the cancel button by default.
* Added `props.reverseButtons` that reverses the cancel and confirm button order.
* Added `props.customActions` that overrides the buttons in the alert message. In here it would be possible to create more buttons or add some custom behaviour.
* Added support for custom show and hide animations with `props.openAnim` and `props.closeAnim`.

v5.0
-----

* Converted source code to typescript, added index.d.ts.
* Added `props.showCloseButton` for displaying an X close button in the top right.
* Added `props.closeButtonStyle` for overriding the styles of the close button.
* Added support for long content that requires scrolling, and moved ESC key listener to the overlay.
* Removed strict match on bootstrap button variation.

v4.4
-----

* Added `props.validationRegex` for validating input. default: `/^.+$/`

v4.3
-----

* Added `props.timeout` which calls onConfirm to close the alert automatically after a certain number of milliseconds. default: `0`

v4.2
-----

* Fixed auto-focus on confirm button
* Removed outline css from alert
* Updated examples to not show deprecated params
* Added `props.focusConfirmBtn` to control whether you want to focus on the button automatically. default: `true`

v4.1
-----

* Added `props.closeOnClickOutside` to trigger onClose when clicking outside. default=true
* Added `props.btnSize` to allow custom button size
* Added `props.confirmBtnCssClass` to allow custom class on confirm button
* Added `props.cancelBtnCssClass` to allow custom class on cancel button
* Added `props.confirmBtnStyle` to allow custom inline style on confirm button
* Added `props.cancelBtnStyle` to allow custom inline style on cancel button

v4.0
-----

* Added `prop-types` as peer dependency
* Added `props.showConfirm` to allow hiding the confirm button
* Added `props.show` to allow hiding the confirm button
