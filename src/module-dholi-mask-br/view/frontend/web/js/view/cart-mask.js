define([
	'uiRegistry',
	'Dholi_MaskBr/js/view/store-mask',
], function (registry, mask) {
	'use strict';

	return function (setShippingInformationAction) {
		registry.async('checkoutProvider')(function (checkoutProvider) {
			checkoutProvider.on('shippingAddress', function (data) {
				mask.apply();
			});
		});

		return setShippingInformationAction;
	}
});