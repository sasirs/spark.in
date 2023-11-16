function portfolioPieChart(data) {
  const canvas = document.getElementById("acquisitions");

  // Check if there's an existing Chart instance on the canvas and destroy it.
  const existingChart = Chart.getChart(canvas);
  if (existingChart) {
    existingChart.destroy();
  }
  new Chart(canvas, {
    type: "doughnut",
    options: {},
    data: {
      labels: data.map((row) => row.sector),
      datasets: [
        {
          label: "Percentage",
          data: data.map((row) => row.percentage),
        },
      ],
    },
  });
}

function dashbordCallSectorChart(data) {
  new Chart(document.getElementById("researchsector"), {
    type: "doughnut",
    options: {},
    data: {
      labels: data.map((row) => row.sector),
      datasets: [
        {
          label: "Percentage",
          data: data.map((row) => row.percentage),
        },
      ],
    },
  });
}

function recentHistoryChart(racentHistorydata) {
  const today = new Date();
  const labels = [];
  for (let i = 4; i >= 0; i--) {
    const date = new Date(today);
    date.setMonth(today.getMonth() - i);
    const monthLabel = date.toLocaleString("en-US", { month: "long" });
    labels.push(monthLabel);
  }
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Number of call pubished",
        data: racentHistorydata,
        fill: false,
        // borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };
  new Chart(document.getElementById("callcount"), {
    type: "line",
    data: data,
  });
}
