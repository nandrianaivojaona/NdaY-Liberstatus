import Papa from 'papaparse';
export default class AuthUI {
    static init(users) {
      console.log("🔒 Initializing AuthUI...");
      this.users = users || [];
      this.bindLoginModal();
      this.bindLogout();
    }
  
    static bindLoginModal() {
      const loginBtn = document.getElementById('sign-in-toggle');
      const modal = document.getElementById('loginModal');
      if (!loginBtn || !modal) return;
  
      loginBtn.addEventListener('click', () => {
        modal.style.display = 'block';
      });
  
      modal.querySelector('.close')?.addEventListener('click', () => {
        modal.style.display = 'none';
      });
  
      window.addEventListener('click', e => {
        if (e.target === modal) modal.style.display = 'none';
      });
  
      document.getElementById('loginForm')?.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value.trim();
        const matchedUser = this.users.find(u => u.email === email && u.password === password);
  
        if (!matchedUser) {
          alert("❌ Email na tenimiafina diso");
          return;
        }
  
        // Simulate successful login
        window.currentUser = matchedUser;
        window.currentUser.isLoggedIn = true;
  
        // Update header logo
        const formattedName = matchedUser.parish.replace(/\s+/g, '');
        const logoElement = document.getElementById('selected-parish-logo');
        if (logoElement) {
          logoElement.src = `/assets/images/${formattedName}_logo.png`;
          logoElement.classList.remove('hidden');
        }
  
        // Show management section if applicable
        document.getElementById('management-section').style.display = 'block';
        modal.style.display = 'none';
      });
    }
  
    static bindLogout() {
      const logoutBtn = document.getElementById('logoutButton');
      if (!logoutBtn) return;
  
      logoutBtn.addEventListener('click', () => {
        window.currentUser = {
          role: ROLES.visitor,
          isLoggedIn: false
        };
        document.getElementById('management-section').style.display = 'none';
        alert("✅ Efa nialana");
      });
    }
  }