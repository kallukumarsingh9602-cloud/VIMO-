// ==========================================
// AUTHENTICATION JAVASCRIPT
// ==========================================
// ========== LOGIN HANDLER ==========
function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Validation
    if (!username || !password) {
        showNotification('Please fill in all fields', 'error');
        return false;
    }
    
    showLoading();
    
    // Simulate API call - Replace with actual Firebase auth
    setTimeout(() => {
        // Mock successful login
        const userData = {
            username: username,
            email: username + '@gsm.com',
            balance: 0,
            vipLevel: 0
        };
        
        // Store user data
        localStorage.setItem('userToken', 'mock_token_' + Date.now());
        localStorage.setItem('userData', JSON.stringify(userData));
        
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
        }
        
        hideLoading();
        showNotification('Login successful!', 'success');
        
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    }, 1500);
    
    return false;
}
// ========== REGISTER HANDLER ==========
function handleRegister(event) {
    event.preventDefault();
    
    const username = document.getElementById('regUsername').value;
    const mobile = document.getElementById('regMobile').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('regConfirmPassword').value;
    const invitationCode = document.getElementById('invitationCode').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    // Validation
    if (!username || !mobile || !password || !confirmPassword) {
        showNotification('Please fill in all required fields', 'error');
        return false;
    }
    
    if (username.length < 4) {
        showNotification('Username must be at least 4 characters', 'error');
        return false;
    }
    
    if (mobile.length !== 10) {
        showNotification('Please enter a valid 10-digit mobile number', 'error');
        return false;
    }
    
    if (password.length < 6) {
        showNotification('Password must be at least 6 characters', 'error');
        return false;
    }
    
    if (password !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return false;
    }
    
    if (!agreeTerms) {
        showNotification('Please agree to Terms & Conditions', 'error');
        return false;
    }
    
    showLoading();
    
    // Simulate API call - Replace with actual Firebase auth
    setTimeout(() => {
        const userData = {
            username: username,
            mobile: mobile,
            email: email || '',
            balance: 0,
            vipLevel: 0,
            invitationCode: invitationCode || ''
        };
        
        // Store user data
        localStorage.setItem('userToken', 'mock_token_' + Date.now());
        localStorage.setItem('userData', JSON.stringify(userData));
        
        hideLoading();
        showNotification('Registration successful!', 'success');
        
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    }, 2000);
    
    return false;
}
// ========== PASSWORD STRENGTH CHECKER ==========
const passwordInput = document.getElementById('regPassword');
if (passwordInput) {
    passwordInput.addEventListener('input', function() {
        const password = this.value;
        const strengthBar = document.getElementById('passwordStrength');
        
        if (!strengthBar) return;
        
        let strength = 0;
        
        if (password.length >= 6) strength++;
        if (password.length >= 10) strength++;
        if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
        if (/[0-9]/.test(password)) strength++;
        if (/[^a-zA-Z0-9]/.test(password)) strength++;
        
        strengthBar.className = 'password-strength';
        
        if (strength <= 2) {
            strengthBar.classList.add('weak');
        } else if (strength <= 4) {
            strengthBar.classList.add('medium');
        } else {
            strengthBar.classList.add('strong');
        }
    });
}
// ========== SOCIAL LOGIN ==========
const googleBtn = document.querySelector('.btn-social.google');
const facebookBtn = document.querySelector('.btn-social.facebook');
if (googleBtn) {
    googleBtn.addEventListener('click', function() {
        showNotification('Google login will be implemented with Firebase', 'info');
    });
}
if (facebookBtn) {
    facebookBtn.addEventListener('click', function() {
        showNotification('Facebook login will be implemented with Firebase', 'info');
    });
}
console.log('Auth module loaded');
