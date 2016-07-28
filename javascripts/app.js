angular
	.module('app', ['color.picker'])
	.controller('AppCtrl', function($scope) {
		$scope.formatOptions = [{label: 'HSL', value: 'hsl'}, {label: 'HSV', value: 'hsv'}, {label: 'RGB', value: 'rgb'}, {label: 'HEX', value: 'hex'}, {label: 'HEX8', value: 'hex8'}];
		$scope.boolOptions = [{label: 'Yes', value: true}, {label: 'No', value: false}];
		$scope.swatchPosOptions = [{label: 'Left', value: 'left'}, {label: 'Right', value: 'right'}];
		$scope.posOptions = [{label: 'Bottom Left', value: 'bottom left'}, {label: 'Top Left', value: 'top left'}, {label: 'Bottom Right', value: 'bottom right'}, {label: 'Top Right', value: 'top right'}];
		$scope.caseOptions = [{label: 'Upper Case', value: 'upper'}, {label: 'Lower Case', value: 'lower'}];

		$scope.options = {
			placeholder: 'My Color',
		};
		$scope.api = {
			onOpen: function() {
				console.log('opened');
			},
			onClose: function() {
				console.log('closed');
			},
			onBlur: function() {
				console.log('blurred');
			},
			onDestroy: function() {
				console.log('destroyed');
			},
			onChange: function(event, color) {
				console.log('changed', color);
			},
		};
    });