import './style.css'; // If you have global Tailwind or other styles

// Example dynamic content in #app
document.querySelector('#app').innerHTML = `
  <div class="flex flex-col items-center justify-center min-h-screen gap-6">
    <h1 class="text-2xl font-bold mb-4">Hello Vite + Tailwind!</h1>
    <button 
      id="theme-toggle" 
      class="px-4 py-2 rounded bg-blue-500 text-white dark:bg-blue-700"
    >
      Toggle Dark Mode
    </button>
  </div>
`;

// Theme toggle logic
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});
