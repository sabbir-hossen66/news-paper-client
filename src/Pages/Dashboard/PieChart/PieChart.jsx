import Chart from "react-google-charts";

const PieChart = () => {
  const publicationData = [
    { name: 'Prothom Alo', articles: 2 },
    { name: 'Doinik Azad', articles: 3 },
    { name: 'Somoy TV', articles: 5 },
    { name: 'News 24', articles: 4 },
  ];

  const totalArticles = publicationData.reduce((sum, pub) => sum + pub.articles, 0);
  const pieChartData = [
    ['Publication', 'Percentage'],
    ...publicationData.map(pub => [pub.name, (pub.articles / totalArticles) * 100]),
  ];

  const barChartData = [
    ['Publication', 'Articles'],
    ...publicationData.map(pub => [pub.name, pub.articles]),
  ];

  const lineChartData = [
    ['Publication', 'Articles'],
    ...publicationData.map(pub => [pub.name, pub.articles]),
  ];

  const pieChartOptions = {
    title: 'Publication Articles Distribution',
    pieHole: 0.4,
    colors: ['#ff6384', '#36a2eb', '#ffce56', '#8e44ad'],
    chartArea: { width: '80%', height: '80%' },
    animation: {
      startup: true,
      easing: 'linear',
      duration: 1500,
    },
  };

  const barChartOptions = {
    title: 'Articles per Publication',
    hAxis: { title: 'Publication' },
    vAxis: { title: 'Articles' },
    colors: ['#36a2eb'],
    chartArea: { width: '80%', height: '80%' },
    legend: 'none',
    animation: {
      startup: true,
      easing: 'linear',
      duration: 1500,
    },
  };

  const lineChartOptions = {
    title: 'Articles per Publication',
    hAxis: { title: 'Publication' },
    vAxis: { title: 'Articles' },
    colors: ['#ff6384'],
    chartArea: { width: '80%', height: '80%' },
    legend: 'none',
    animation: {
      startup: true,
      easing: 'linear',
      duration: 1500,
    },
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Publication Articles Charts</h1>
      <div className="flex flex-col gap-8 items-center">
        <div className="w-full lg:w-2/3 p-6 bg-white border rounded shadow-lg">
          <Chart
            chartType="PieChart"
            width="100%"
            height="600px"
            data={pieChartData}
            options={pieChartOptions}
          />
        </div>
        <div className="w-full lg:w-2/3 p-6 bg-white border rounded shadow-lg">
          <Chart
            chartType="BarChart"
            width="100%"
            height="600px"
            data={barChartData}
            options={barChartOptions}
          />
        </div>
        <div className="w-full lg:w-2/3 p-6 bg-white border rounded shadow-lg">
          <Chart
            chartType="LineChart"
            width="100%"
            height="600px"
            data={lineChartData}
            options={lineChartOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default PieChart;