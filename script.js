function validateField(fieldId, errorId, emptyMessage, validationFunction = null) {
        const inputElement = document.getElementById(fieldId);
        const value = inputElement.value;
        const errorElement = document.getElementById(errorId);

        if (!value.trim()) {
            errorElement.textContent = emptyMessage;
            inputElement.classList.add('input-error');
        } else if (validationFunction) {
            const errorMessage = validationFunction(value);
            if (errorMessage) {
                errorElement.textContent = errorMessage;
                inputElement.classList.add('input-error');
            } else {
                errorElement.textContent = '';
                inputElement.classList.remove('input-error');
            }
        } else {
            errorElement.textContent = '';
            inputElement.classList.remove('input-error');
        }
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) ? '' : 'Проверьте адрес электронной почты';
    }

    function isValidPhone(phone) {
        const phoneRegex = /^\+\d{1,3} \d{1,3} \d{1,3} \d{1,2} \d{1,2}$/;
        const digitsOnly = phone.replace(/\D/g, '');
        return phoneRegex.test(phone) && digitsOnly.length <= 30 ? '' : 'Формат: +9 999 999 99 99';
    }

    function isValidInn(inn) {
        const innRegex = /^\d{14}$/;
        return innRegex.test(inn) ? '' : 'Проверьте ИНН';
}


	
 document.addEventListener("DOMContentLoaded", function () {
        var closeButton = document.querySelector('.chooseAll img[src="assets/close.svg"]');
        
        var contentToHide = document.querySelector('.cartItems');

        closeButton.addEventListener('click', function () {
            if (contentToHide.classList.contains('hidden')) {
                contentToHide.classList.remove('hidden');
                closeButton.src = 'assets/open.svg';
            } else {
                contentToHide.classList.add('hidden');
                closeButton.src = 'assets/close.svg';
            }
        });
 });
	
document.addEventListener("DOMContentLoaded", function () {
    var selectAllContainer = document.querySelector('.chooseAll');
    var selectAllCheckbox = selectAllContainer.querySelector('#selectAllCheckbox');
    var items = document.querySelectorAll('.cartItems .item');

    // Обработчик для "Выбрать все"
    selectAllContainer.addEventListener('click', function () {
        var allChecked = !selectAllCheckbox.classList.contains('checked');

        items.forEach(function (item) {
            var itemCheckbox = item.querySelector('img[src="assets/checked.svg"]');
            itemCheckbox.classList.toggle('checked', allChecked);
            updateItemCheckbox(item);
        });

        updateSelectAllCheckbox();
    });

    // Обработчики для отдельных товаров
    items.forEach(function (item) {
        var itemCheckbox = item.querySelector('img[src="assets/checked.svg"]');
        var plusButton = item.querySelector('.itemQuantity2 p:nth-child(3)');
        var minusButton = item.querySelector('.itemQuantity2 p:nth-child(1)');

        plusButton.addEventListener('click', function () {
            var currentQuantity = parseInt(item.querySelector('.itemQuantity2 p:nth-child(2)').textContent);
            item.querySelector('.itemQuantity2 p:nth-child(2)').textContent = currentQuantity + 1;
            updateItemCheckbox(item);
            updateSelectAllCheckbox();
        });

        minusButton.addEventListener('click', function () {
            var currentQuantity = parseInt(item.querySelector('.itemQuantity2 p:nth-child(2)').textContent);
            if (currentQuantity > 1) {
                item.querySelector('.itemQuantity2 p:nth-child(2)').textContent = currentQuantity - 1;
            }
            updateItemCheckbox(item);
            updateSelectAllCheckbox();
        });

        itemCheckbox.addEventListener('click', function () {
            itemCheckbox.classList.toggle('checked');
            updateItemCheckbox(item);
            updateSelectAllCheckbox();
        });
    });

    // Обновление состояния чекбокса "Выбрать все"
    function updateSelectAllCheckbox() {
        var allChecked = true;
        items.forEach(function (item) {
            var itemCheckbox = item.querySelector('img[src="assets/checked.svg"]');
            if (!itemCheckbox.classList.contains('checked')) {
                allChecked = false;
            }
        });
        selectAllCheckbox.classList.toggle('checked', allChecked);
    }

    // Обновление состояния чекбокса товара
    function updateItemCheckbox(item) {
        var itemCheckbox = item.querySelector('img[src="assets/checked.svg"]');
        var isChecked = itemCheckbox.classList.contains('checked');
        var selectAllChecked = selectAllCheckbox.classList.contains('checked');

        if (!isChecked && selectAllChecked) {
            selectAllCheckbox.classList.remove('checked');
        } else if (isChecked && !selectAllChecked) {
            var allChecked = true;
            items.forEach(function (item) {
                var checkbox = item.querySelector('img[src="assets/checked.svg"]');
                if (!checkbox.classList.contains('checked')) {
                    allChecked = false;
                }
            });
            if (allChecked) {
                selectAllCheckbox.classList.add('checked');
            }
        }
    }
});

 document.addEventListener("DOMContentLoaded", function () {
        var closeButton = document.querySelector('.outOfStock img[src="assets/close.svg"]');
        
        var contentToHide = document.querySelector('.outOfStockItems');

        closeButton.addEventListener('click', function () {
            if (contentToHide.classList.contains('hidden')) {
                contentToHide.classList.remove('hidden');
                closeButton.src = 'assets/open.svg';
            } else {
                contentToHide.classList.add('hidden');
                closeButton.src = 'assets/close.svg';
            }
        });
 });
function selectPayment() {
    var selectedPayment = document.querySelector('input[name="paymentMethod"]:checked');

    if (selectedPayment) {
        var cardInfoDiv = document.getElementById('selectedCardInfo');

        var paymentMethod = selectedPayment.value;

        switch (paymentMethod) {
            case 'mir':
                cardInfoDiv.innerHTML = `
                    <img src="assets/mirlogo.svg" alt="" width="32" height="32" />
                    <p class="cardNumber">1234 56•• •••• 1234</p>
                    <p>01/30</p>
                `;
                break;
            case 'visa':
                cardInfoDiv.innerHTML = `
                    <img src="assets/visa.svg" alt="" width="32" height="32" />
                    <p class="cardNumber">1234 56•• •••• 1234</p>
                    <p>01/30</p>
                `;
                break;
            case 'mastercard':
                cardInfoDiv.innerHTML = `
                    <img src="assets/mastercard.svg" alt="" width="32" height="32" />
                    <p class="cardNumber">1234 56•• •••• 1234</p>
                    <p>01/30</p>
                `;
                break;
            case 'lomastercard':
                cardInfoDiv.innerHTML = `
                    <img src="assets/lomastercard.svg" alt="" width="32" height="32" />
                    <p class="cardNumber">1234 56•• •••• 1234</p>
                    <p>01/30</p>
                `;
                break;
            default:
                break;
        }
        closeModal(); 
    } else {
        alert("Пожалуйста, выберите способ оплаты.");
    }
}

function openModal() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
}

function openDeliveryModal() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('deliveryModal').style.display = 'block';

    // Изначально показываем адреса пунктов выдачи
    showPickupPoints();
}

var pickupPoints = document.querySelectorAll('.pickupPoints input[type="radio"]');
var courierDelivery = document.querySelectorAll('.courierDelivery input[type="radio"]');

// Добавляем обработчики событий для каждого радио-кнопки варианта доставки
pickupPoints.forEach(function (radio) {
    radio.addEventListener('change', updateSelectedAddress);
});

courierDelivery.forEach(function (radio) {
    radio.addEventListener('change', updateSelectedAddress);
});

function updateSelectedAddress(event) {
    // Получаем выбранный адрес
    var selectedAddress = event.target.labels[0].innerText;

    // Обновляем содержимое элемента с классом "right"
    var rightElement = document.querySelector('.right');
    if (rightElement) {
        var existingContent = rightElement.innerHTML;
        rightElement.innerHTML = selectedAddress + '<br />' + existingContent;
    }
}


function showPickupPoints() {
    document.getElementById('pickupPoints').style.display = 'block';
    document.getElementById('courierDelivery').style.display = 'none';
}

function showCourierDelivery() {
    document.getElementById('courierDelivery').style.display = 'block';
    document.getElementById('pickupPoints').style.display = 'none';
}

function closeDeliveryModal() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('deliveryModal').style.display = 'none';
}

// Вызывается при загрузке страницы
document.addEventListener("DOMContentLoaded", function () {
    // Изначально скрываем адреса для доставки курьером
    document.getElementById('courierDelivery').style.display = 'none';
});

function showDeliveryContent(contentId) {
    var allContents = document.querySelectorAll('.deliveryContent');
    allContents.forEach(function (content) {
        content.style.display = 'none';
    });

    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }
}

function closeDeliveryModal() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('deliveryModal').style.display = 'none';
}

 function togglePaymentMethod() {
        var paymentCheck = document.getElementById('paymentCheck');
        var orderButton = document.getElementById('orderButton');

        if (paymentCheck.src.includes('unchecked.svg')) {
            paymentCheck.src = 'assets/checked.svg';
            orderButton.innerText = 'Оплатить 2 101 063 сом';
        } else {
            paymentCheck.src = 'assets/unchecked.svg';
            orderButton.innerText = 'Заказать';
        }
    }