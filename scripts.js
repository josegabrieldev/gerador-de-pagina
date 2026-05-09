// Initialize Lucide icons
lucide.createIcons();

// Mobile Menu Functionality
const mobileMenuBtn = document.getElementById("mobileMenu");
const mobileNav = document.getElementById("mobileNav");
const closeMobileNavBtn = document.getElementById("closeMobileNav");
const darkOverlay = document.getElementById("darkOverlay");
const mobileMenuIcon = mobileMenuBtn.querySelector("i");

// Open mobile menu
mobileMenuBtn.addEventListener("click", function () {
  mobileNav.classList.add("active");
  darkOverlay.classList.add("active");

  // Change hamburger icon to X
  mobileMenuIcon.setAttribute("data-lucide", "x");
  lucide.createIcons();
});

// Close mobile menu
closeMobileNavBtn.addEventListener("click", function () {
  mobileNav.classList.remove("active");
  darkOverlay.classList.remove("active");

  // Change X icon back to hamburger
  mobileMenuIcon.setAttribute("data-lucide", "menu");
  lucide.createIcons();
});

// Close mobile menu when clicking on links
const mobileLinks = document.querySelectorAll(".mobile-link");
mobileLinks.forEach((link) => {
  link.addEventListener("click", function () {
    mobileNav.classList.remove("active");
    darkOverlay.classList.remove("active");

    // Change X icon back to hamburger
    mobileMenuIcon.setAttribute("data-lucide", "menu");
    lucide.createIcons();
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", function (event) {
  if (
    !mobileNav.contains(event.target) &&
    !mobileMenuBtn.contains(event.target)
  ) {
    mobileNav.classList.remove("active");
    darkOverlay.classList.remove("active");

    // Change X icon back to hamburger
    mobileMenuIcon.setAttribute("data-lucide", "menu");
    lucide.createIcons();
  }
});

// Tab functionality for code display
const tabs = document.querySelectorAll(".tab");
const codeContent = document.querySelector("pre code");

const codeExamples = {
  HTML: `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Criada pela IA</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <h1 class="logo">Minha Empresa</h1>
            <ul class="nav-links">
                <li><a href="#inicio">Início</a></li>
                <li><a href="#servicos">Serviços</a></li>
                <li><a href="#contato">Contato</a></li>
            </ul>
            <button class="btn-primary">Entrar</button>
        </nav>
    </header>
    
    <main>
        <section id="inicio" class="hero">
            <div class="hero-content">
                <h1>Bem-vindo à nossa plataforma</h1>
                <p>Soluções inovadoras para o seu negócio</p>
                <button class="btn-secondary">Começar Agora</button>
            </div>
        </section>
    </main>
    
    <footer class="footer">
        <p>&copy; 2024 Minha Empresa. Todos os direitos reservados.</p>
    </footer>
</body>
</html>`,
  CSS: `/* Estilos Base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
}

/* Header */
.header {
    background-color: #fff;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 1rem 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.navbar {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #007bff;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #007bff;
}

.btn-primary {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn-primary:hover {
    background-color: #0056b3;
}

/* Hero Section */
.hero {
    margin-top: 80px;
    padding: 4rem 2rem;
    text-align: center;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

.btn-secondary {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.1rem;
    transition: transform 0.3s;
}

.btn-secondary:hover {
    transform: translateY(-2px);
}

/* Footer */
.footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 2rem;
    margin-top: 3rem;
}`,
  JavaScript: `// Seleção de Elementos DOM
const menuBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-links');
const heroBtn = document.querySelector('.btn-secondary');

// Toggle Menu Mobile
menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Scroll Suave para Seções
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animação ao Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        header.style.background = '#fff';
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    }
});

// Validação de Formulário
const validateForm = (formData) => {
    const errors = [];
    
    if (!formData.name || formData.name.length < 3) {
        errors.push('Nome deve ter pelo menos 3 caracteres');
    }
    
    if (!formData.email || !formData.email.includes('@')) {
        errors.push('Email inválido');
    }
    
    if (!formData.message || formData.message.length < 10) {
        errors.push('Mensagem deve ter pelo menos 10 caracteres');
    }
    
    return errors;
};

// API Simulada
const submitForm = async (formData) => {
    const errors = validateForm(formData);
    
    if (errors.length > 0) {
        showError(errors.join(', '));
        return;
    }
    
    // Simula envio para API
    try {
        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            showSuccess('Formulário enviado com sucesso!');
        } else {
            throw new Error('Erro ao enviar formulário');
        }
    } catch (error) {
        showError('Erro de conexão. Tente novamente.');
    }
};

// Funções de Feedback
const showSuccess = (message) => {
    const alert = document.createElement('div');
    alert.className = 'alert success';
    alert.textContent = message;
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 3000);
};

const showError = (message) => {
    const alert = document.createElement('div');
    alert.className = 'alert error';
    alert.textContent = message;
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.remove();
    }, 3000);
};`,
};

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // Remove active class from all tabs
    tabs.forEach((t) => t.classList.remove("active"));
    // Add active class to clicked tab
    this.classList.add("active");

    // Update code content
    const tabName = this.textContent;
    codeContent.textContent = codeExamples[tabName];
  });
});

// Copy code functionality
const copyBtn = document.querySelector(".copy-btn");
if (copyBtn) {
  copyBtn.addEventListener("click", function () {
    const code = codeContent.textContent;
    navigator.clipboard.writeText(code).then(() => {
      const originalText = this.textContent;
      this.textContent = "Copiado!";
      setTimeout(() => {
        this.textContent = originalText;
      }, 2000);
    });
  });
}

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
