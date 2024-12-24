const ctx = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Optimización RF', 'Python', 'Tableau', 'Machine Learning'],
        datasets: [{
            label: 'Habilidades',
            data: [85, 90, 80, 70],
            backgroundColor: ['#3498db', '#1abc9c', '#e67e22', '#9b59b6']
        }]
    }
});

