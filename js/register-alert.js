export const listenToAlertTriggerBtn = () => {
    let triggerBtn = document.getElementById('registerAlertBtn');
    let alertContainer = document.getElementById('registerAlertContainer');
    let registerAlert = alertContainer.querySelector('.register-alert');
    const openRegisterAlert = () => {
        alertContainer.classList.remove('hidden');
    }
    const closeRegisterAlert = () => {
        alertContainer.classList.add('hidden');
    }
    triggerBtn.addEventListener('click', openRegisterAlert);
    alertContainer.addEventListener('click', closeRegisterAlert);
    registerAlert.addEventListener('click', event => event.stopPropagation());
}