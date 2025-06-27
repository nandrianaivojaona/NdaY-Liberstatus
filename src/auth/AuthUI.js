// src/auth/AuthUI.js Login Modal + Dropdown Menu

export default class AuthUI {
  static init(users) {
    console.log("🔒 Initializing AuthUI...");
    this.users = users || mockData.users;
    this.bindLoginModal();
    this.bindDropdownMenu();
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
        alert("❌ Email na tenimiafina raty!");
        return;
      }

      console.log("✅ Fidirana dia vokatr'ilay:", matchedUser.email);
      window.currentUser = matchedUser;
      window.currentUser.isLoggedIn = true;

      // Hide modal
      modal.style.display = 'none';

      // Show management section if applicable
      document.getElementById('management-section').style.display = 'block';
    });
  }

  static bindDropdownMenu() {
    const dropdownToggle = document.getElementById('dropdown-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');

    if (!dropdownToggle || !dropdownMenu) return;

    dropdownToggle.addEventListener('click', () => {
      const isVisible = dropdownMenu.style.display === 'block';
      dropdownMenu.style.display = isVisible ? 'none' : 'block';
    });

    window.addEventListener('click', e => {
      if (e.target !== dropdownToggle && !dropdownMenu.contains(e.target)) {
        dropdownMenu.style.display = 'none';
      }
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
      alert("Efa niala tanteraka ianao!");
    });
  }
}