function showSection(name) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById(name).classList.add('active');
  event.target.classList.add('active');
  document.getElementById('pageTitle').textContent =
    name === 'dashboard' ? 'Dashboard' :
    name === 'stocks' ? 'Stock Holdings' :
    name === 'mutual' ? 'Mutual Funds' : 'Reports';
}

// Line Chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Portfolio Value (₹)',
      data: [900000, 950000, 980000, 1020000, 1100000, 1080000, 1150000, 1200000, 1180000, 1220000, 1240000, 1245320],
      borderColor: '#6366f1',
      backgroundColor: 'rgba(99,102,241,0.1)',
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointBackgroundColor: '#6366f1',
      pointRadius: 5
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { labels: { color: '#94a3b8' } } },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
      y: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } }
    }
  }
});

// Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
  type: 'doughnut',
  data: {
    labels: ['Stocks', 'Mutual Funds', 'FD', 'Gold'],
    datasets: [{
      data: [45, 30, 15, 10],
      backgroundColor: ['#6366f1', '#10b981', '#f59e0b', '#ef4444'],
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#94a3b8', padding: 15 }
      }
    }
  }
});

// Bar Chart
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Monthly Returns (₹)',
      data: [12000, 8000, 15000, 22000, 18000, -5000, 25000, 30000, -8000, 28000, 20000, 18000],
      backgroundColor: (ctx) => ctx.raw >= 0 ? '#10b981' : '#ef4444',
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { labels: { color: '#94a3b8' } } },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } },
      y: { ticks: { color: '#94a3b8' }, grid: { color: '#334155' } }
    }
  }
});