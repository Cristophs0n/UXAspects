angular.module('app').controller('NotificationsDemoCtrl', NotificationsDemoCtrl);

NotificationsDemoCtrl.$inject = ['$colorService', 'notificationService'];

function NotificationsDemoCtrl($colorService, notificationService) {
    var vm = this;

    vm.notificationColors = {
        primary: $colorService.getColor('primary').toHex(),
        accent: $colorService.getColor('accent').toHex(),
        chart4: $colorService.getColor('chart4').toHex(),
        chart5: $colorService.getColor('chart5').toHex(),
        ok: $colorService.getColor('ok').toHex(),
        warning: $colorService.getColor('warning').toHex(),
        critical: $colorService.getColor('critical').toHex()
    };

    vm.setColor = function (color) {
        vm.backgroundColor = vm.notificationColors[color];
    };

    vm.showNotification = function () {

        var options = {
            icon: vm.icon,
            title: vm.title,
            text: vm.text,
            subtitle: vm.subtitle,
            duration: vm.duration,
            backgroundColor: vm.backgroundColor
        };

        //ensure notifications are visible - next example allows hiding them
        if (vm.hideNotifications === true) {
            vm.hideNotifications = false;
            notificationService.setNotificationVisibility(true);
        }

        notificationService.showNotification(options);
    };

    vm.dismissAll = function () {
        notificationService.dismissAllNotifications();
    };

    vm.setDefaultValues = function () {
        vm.icon = 'hpe-chat';
        vm.title = 'Messages Received';
        vm.text = 'You have 16 messages';
        vm.subtitle = new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
        vm.duration = 4000;
        vm.backgroundColor = vm.notificationColors.primary;
    };

    //set initial default values
    vm.setDefaultValues();
}

