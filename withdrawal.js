// ==========================================
// WITHDRAWAL JAVASCRIPT
// ==========================================
let selectedBank = 'bank1';
const FEE_PERCENTAGE = 0.02; // 2% processing fee
// ========== LOAD AVAILABLE BALANCE ==========
function loadAvailableBalance() {
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const balance = userData.balance || 0;
    
    const balanceElement = document.getElementById('availableBalance');
    if (balanceElement) {
        balanceElement.textContent = formatCurrency(balance);
    }
}
// ========== SELECT BANK ==========
function selectBank(bankId) {
    selectedBank = bankId;
    
    // Update UI
    document.querySelectorAll('.bank-card').forEach(card => {
        card.classList.remove('selected');
    });
    event.target.closest('.bank-card').classList.add('selected');
}
// ========== SET WITHDRAWAL AMOUNT ==========
function setWithdrawAmount(amount) {
    const input = document.getElementById('withdrawalAmount');
    if (!input) return;
    
    if (amount === 'all') {
        const userData = JSON.parse(localStorage.getItem('userData') || '{}');
        const balance = userData.balance || 0;
        input.value = balance;
    } else {
        input.value = amount;
    }
    
    updateWithdrawalFee();
}
// ========== UPDATE WITHDRAWAL FEE ==========
function updateWithdrawalFee() {
    const input = document.getElementById('withdrawalAmount');
    if (!input) return;
    
    const amount = parseFloat(input.value) || 0;
    const fee = amount * FEE_PERCENTAGE;
    const receive = amount - fee;
    
    document.getElementById('withdrawAmount').textContent = formatCurrency(amount);
    document.getElementById('processingFee').textContent = '-' + formatCurrency(fee);
    document.getElementById('receiveAmount').textContent = formatCurrency(receive);
}
// ========== PROCESS WITHDRAWAL ==========
function processWithdrawal() {
    const amount = parseFloat(document.getElementById('withdrawalAmount').value) || 0;
    const transPassword = document.getElementById('transPassword').value;
    
    // Validation
    if (amount < 10) {
        showNotification('Minimum withdrawal amount is $10', 'error');
        return;
    }
    
    const userData = JSON.parse(localStorage.getItem('userData') || '{}');
    const balance = userData.balance || 0;
    
    if (amount > balance) {
        showNotification('Insufficient balance', 'error');
        return;
    }
    
    if (amount > 50000) {
        showNotification('Maximum withdrawal per transaction is $50,000', 'error');
        return;
    }
    
    if (!transPassword) {
        showNotification('Please enter transaction password', 'error');
        return;
    }
    
    if (!selectedBank) {
        showNotification('Please select a bank account', 'error');
        return;
    }
    
    showLoading();
    
    // Simulate withdrawal processing
    setTimeout(() => {
        const fee = amount * FEE_PERCENTAGE;
        const finalAmount = amount;
        
        // Update balance
        userData.balance = balance - finalAmount;
        localStorage.setItem('userData', JSON.stringify(userData));
        
        hideLoading();
        showNotification('Withdrawal request submitted successfully!', 'success');
        
        setTimeout(() => {
            window.location.href = 'wallet.html';
        }, 2000);
    }, 2000);
}
// Initialize on page load
window.addEventListener('DOMContentLoaded', function() {
    loadAvailableBalance();
    updateWithdrawalFee();
    
    // Select first bank by default
    const firstBank = document.querySelector('.bank-card');
    if (firstBank) {
        firstBank.classList.add('selected');
    }
    
    // Add input listener
    const withdrawInput = document.getElementById('withdrawalAmount');
    if (withdrawInput) {
        withdrawInput.addEventListener('input', updateWithdrawalFee);
    }
});
console.log('Withdrawal module loaded');
