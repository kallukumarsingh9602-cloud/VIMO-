// ==========================================
// RECHARGE JAVASCRIPT
// ==========================================
let selectedAmount = 0;
let selectedPaymentMethod = 'upi';
// ========== AMOUNT SELECTION ==========
function selectAmount(amount) {
    selected
Amount = amount;
    
    // Update custom amount input
    const customInput = document.getElementById('customAmount');
    if (customInput) {
        customInput.value = amount;
    }
    
    // Update UI - highlight selected button
    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.closest('.amount-btn').classList.add('selected');
    
    updateSummary();
}
// ========== CUSTOM AMOUNT INPUT ==========
const customAmountInput = document.getElementById('customAmount');
if (customAmountInput) {
    customAmountInput.addEventListener('input', function() {
        selectedAmount = parseFloat(this.value) || 0;
        
        // Remove selection from predefined amounts
        document.querySelectorAll('.amount-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        updateSummary();
    });
}
// ========== PAYMENT METHOD SELECTION ==========
function selectPayment(method) {
    selectedPaymentMethod = method;
    
    // Update UI
    document.querySelectorAll('.payment-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.target.closest('.payment-card').classList.add('selected');
}
// ========== UPDATE SUMMARY ==========
function updateSummary() {
    const bonus = calculateBonus(selectedAmount);
    const total = selectedAmount + bonus;
    
    document.getElementById('summaryAmount').textContent = formatCurrency(selectedAmount);
    document.getElementById('summaryBonus').textContent = '+' + formatCurrency(bonus);
    document.getElementById('summaryTotal').textContent = formatCurrency(total);
}
// ========== CALCULATE BONUS ==========
function calculateBonus(amount) {
    if (amount >= 10000) return amount * 0.10; // 10%
    if (amount >= 5000) return amount * 0.10;
    if (amount >= 2000) return amount * 0.10;
    if (amount >= 1000) return amount * 0.10;
    if (amount >= 500) return amount * 0.10;
    if (amount >= 100) return amount * 0.10;
    return 0;
}
// ========== PROCESS RECHARGE ==========
function processRecharge() {
    if (selectedAmount < 10) {
        showNotification('Minimum recharge amount is $10', 'error');
        return;
    }
    
    if (!selectedPaymentMethod) {
        showNotification('Please select a payment method', 'error');
        return;
    }
    
    showLoading();
    
    // Simulate payment processing
    setTimeout(() => {
        // Mock successful recharge
        const bonus = calculateBonus(selectedAmount);
        const total = selectedAmount + bonus;
        
        // Update user balance (in real app, this would be done server-side)
        const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        userData.balance = (userData.balance || 0) + total;
        localStorage.setItem('userData', JSON.stringify(userData));
        
        hideLoading();
        showNotification(`Recharge successful! ${formatCurrency(total)} added to your wallet`, 'success');
        
        // Redirect to wallet/dashboard
        setTimeout(() => {
            window.location.href = 'wallet.html';
        }, 2000);
    }, 2000);
}
// ========== LOAD USER BALANCE ==========
function loadBalance() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const balance = userData.balance || 0;
    
    const balanceElement = document.getElementById('currentBalance');
    if (balanceElement) {
        balanceElement.textContent = formatCurrency(balance);
    }
}
// Initialize on page load
window.addEventListener('DOMContentLoaded', function() {
    loadBalance();
    updateSummary();
    
    // Select first payment method by default
    const firstPayment = document.querySelector('.payment-card');
    if (firstPayment) {
        firstPayment.classList.add('selected');
    }
});
console.log('Recharge module loaded');
