// Translation dictionary for multiple languages
const translations = {
    'en': {
        'txt-service': 'Service',
        'txt-login-title': 'Log in',
        'txt-login-btn': 'Login Success!',
        'txt-goto-reg': 'No account? Register',
        'txt-reg-title': 'Register',
        'txt-reg-btn': 'Register now',
        'txt-goto-login': 'Already have account? Log in'
    },
    'hi': {
        'txt-service': 'सेवा',
        'txt-login-title': 'लॉग इन करें',
        'txt-login-btn': 'लॉगिन सफल!',
        'txt-goto-reg': 'कोई खाता नहीं? रजिस्टर करें',
        'txt-reg-title': 'रजिस्टर करें',
        'txt-reg-btn': 'अभी रजिस्टर करें',
        'txt-goto-login': 'पहले से खाता है? लॉग इन करें'
    },
    'es': {
        'txt-service': 'Servicio',
        'txt-login-title': 'Iniciar sesión',
        'txt-login-btn': '¡Inicio exitoso!',
        'txt-goto-reg': '¿Sin cuenta? Registrarse',
        'txt-reg-title': 'Registrarse',
        'txt-reg-btn': 'Registrarse ahora',
        'txt-goto-login': '¿Ya tienes cuenta? Iniciar sesión'
    },
    'fr': {
        'txt-service': 'Service',
        'txt-login-title': 'Se connecter',
        'txt-login-btn': 'Connexion réussie!',
        'txt-goto-reg': 'Pas de compte? S\'inscrire',
        'txt-reg-title': 'S\'inscrire',
        'txt-reg-btn': 'S\'inscrire maintenant',
        'txt-goto-login': 'Déjà un compte? Se connecter'
    },
    'ar': {
        'txt-service': 'خدمة',
        'txt-login-title': 'تسجيل الدخول',
        'txt-login-btn': 'تسجيل الدخول بنجاح!',
        'txt-goto-reg': 'لا يوجد حساب؟ سجل',
        'txt-reg-title': 'سجل',
        'txt-reg-btn': 'سجل الآن',
        'txt-goto-login': 'هل لديك حساب؟ تسجيل الدخول'
    },
    'zh-CN': {
        'txt-service': '服务',
        'txt-login-title': '登录',
        'txt-login-btn': '登录成功！',
        'txt-goto-reg': '没有账户？注册',
        'txt-reg-title': '注册',
        'txt-reg-btn': '立即注册',
        'txt-goto-login': '已有账户？登录'
    },
    'pt': {
        'txt-service': 'Serviço',
        'txt-login-title': 'Entrar',
        'txt-login-btn': 'Login bem-sucedido!',
        'txt-goto-reg': 'Sem conta? Cadastre-se',
        'txt-reg-title': 'Cadastre-se',
        'txt-reg-btn': 'Cadastre-se agora',
        'txt-goto-login': 'Já tem conta? Entrar'
    },
    'de': {
        'txt-service': 'Service',
        'txt-login-title': 'Anmelden',
        'txt-login-btn': 'Anmeldung erfolgreich!',
        'txt-goto-reg': 'Kein Konto? Registrieren',
        'txt-reg-title': 'Registrieren',
        'txt-reg-btn': 'Jetzt registrieren',
        'txt-goto-login': 'Bereits ein Konto? Anmelden'
    },
    'ja': {
        'txt-service': 'サービス',
        'txt-login-title': 'ログイン',
        'txt-login-btn': 'ログイン成功！',
        'txt-goto-reg': 'アカウントがない？登録',
        'txt-reg-title': '登録',
        'txt-reg-btn': '今すぐ登録',
        'txt-goto-login': '既にアカウントをお持ちですか？ログイン'
    },
    'ru': {
        'txt-service': 'Сервис',
        'txt-login-title': 'Войти',
        'txt-login-btn': 'Вход выполнен!',
        'txt-goto-reg': 'Нет аккаунта? Зарегистрироваться',
        'txt-reg-title': 'Регистрация',
        'txt-reg-btn': 'Зарегистрироваться сейчас',
        'txt-goto-login': 'Уже есть аккаунт? Войти'
    },
    'bn': {
        'txt-service': 'সেবা',
        'txt-login-title': 'লগ ইন করুন',
        'txt-login-btn': 'লগইন সফল!',
        'txt-goto-reg': 'কোন অ্যাকাউন্ট নেই? নিবন্ধন করুন',
        'txt-reg-title': 'নিবন্ধন করুন',
        'txt-reg-btn': 'এখনই নিবন্ধন করুন',
        'txt-goto-login': 'ইতিমধ্যে অ্যাকাউন্ট আছে? লগ ইন করুন'
    },
    'ur': {
        'txt-service': 'خدمات',
        'txt-login-title': 'لاگ ان کریں',
        'txt-login-btn': 'لاگ ان کامیاب!',
        'txt-goto-reg': 'اکاؤنٹ نہیں ہے؟ رجسٹر کریں',
        'txt-reg-title': 'رجسٹر کریں',
        'txt-reg-btn': 'ابھی رجسٹر کریں',
        'txt-goto-login': 'پہلے سے اکاؤنٹ ہے؟ لاگ ان کریں'
    },
    'ko': {
        'txt-service': '서비스',
        'txt-login-title': '로그인',
        'txt-login-btn': '로그인 성공!',
        'txt-goto-reg': '계정이 없으신가요? 가입하기',
        'txt-reg-title': '가입하기',
        'txt-reg-btn': '지금 가입하기',
        'txt-goto-login': '이미 계정이 있으신가요? 로그인'
    },
    'it': {
        'txt-service': 'Servizio',
        'txt-login-title': 'Accedi',
        'txt-login-btn': 'Accesso riuscito!',
        'txt-goto-reg': 'Nessun account? Registrati',
        'txt-reg-title': 'Registrati',
        'txt-reg-btn': 'Registrati ora',
        'txt-goto-login': 'Hai già un account? Accedi'
    },
    'tr': {
        'txt-service': 'Hizmet',
        'txt-login-title': 'Giriş Yap',
        'txt-login-btn': 'Giriş Başarılı!',
        'txt-goto-reg': 'Hesabınız yok mu? Kayıt ol',
        'txt-reg-title': 'Kayıt Ol',
        'txt-reg-btn': 'Şimdi kayıt ol',
        'txt-goto-login': 'Zaten hesabınız var mı? Giriş yap'
    },
    'vi': {
        'txt-service': 'Dịch vụ',
        'txt-login-title': 'Đăng nhập',
        'txt-login-btn': 'Đăng nhập thành công!',
        'txt-goto-reg': 'Chưa có tài khoản? Đăng ký',
        'txt-reg-title': 'Đăng ký',
        'txt-reg-btn': 'Đăng ký ngay',
        'txt-goto-login': 'Đã có tài khoản? Đăng nhập'
    },
    'th': {
        'txt-service': 'บริการ',
        'txt-login-title': 'เข้าสู่ระบบ',
        'txt-login-btn': 'เข้าสู่ระบบสำเร็จ!',
        'txt-goto-reg': 'ไม่มีบัญชี? ลงทะเบียน',
        'txt-reg-title': 'ลงทะเบียน',
        'txt-reg-btn': 'ลงทะเบียนตอนนี้',
        'txt-goto-login': 'มีบัญชีอยู่แล้ว? เข้าสู่ระบบ'
    }
};
// Function to apply translations
function applyTranslations() {
    const savedLang = localStorage.getItem('vimoLang') || 'en';
    const langData = translations[savedLang] || translations['en'];
    
    // Update all translatable elements
    for (let key in langData) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = langData[key];
        }
    }
    
    // Update placeholders
    updatePlaceholders(savedLang);
}
// Function to update input placeholders
function updatePlaceholders(lang) {
    const placeholders = {
        'en': {
            'lPhone': 'Mobile number',
            'lPass': 'Password',
            'rPhone': 'Mobile number',
            'rPass': 'Password',
            'rCPass': 'Confirm Password',
            'invCode': 'Invitation Code'
        },
        'hi': {
            'lPhone': 'मोबाइल नंबर',
            'lPass': 'पासवर्ड',
            'rPhone': 'मोबाइल नंबर',
            'rPass': 'पासवर्ड',
            'rCPass': 'पासवर्ड की पुष्टि करें',
            'invCode': 'निमंत्रण कोड'
        },
        'es': {
            'lPhone': 'Número de móvil',
            'lPass': 'Contraseña',
            'rPhone': 'Número de móvil',
            'rPass': 'Contraseña',
            'rCPass': 'Confirmar contraseña',
            'invCode': 'Código de invitación'
        },
        'ar': {
            'lPhone': 'رقم الهاتف المحمول',
            'lPass': 'كلمة المرور',
            'rPhone': 'رقم الهاتف المحمول',
            'rPass': 'كلمة المرور',
            'rCPass': 'تأكيد كلمة المرور',
            'invCode': 'رمز الدعوة'
        },
        'zh-CN': {
            'lPhone': '手机号码',
            'lPass': '密码',
            'rPhone': '手机号码',
            'rPass': '密码',
            'rCPass': '确认密码',
            'invCode': '邀请码'
        }
    };
    
    const langPlaceholders = placeholders[lang] || placeholders['en'];
    
    for (let id in langPlaceholders) {
        const element = document.getElementById(id);
        if (element) {
            element.placeholder = langPlaceholders[id];
        }
    }
}
