export function lineChartDataProductSales(data){
  return [
  {
    name: "Sales($)",
    // data: [50, 64, 48, 66, 49, 68],
    data : data,
    color: "#4318FF",
  },
];
}

export function lineChartOptionsProductSales(category){
  return {
  legend: {
    show: true,
  },

  theme: {
    mode: "light",
  },
  chart: {
    type: "line",

    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },

  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000"
    },
    theme: 'dark',
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: true,
  },
  xaxis: {
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
    },
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    type: "text",
    range: undefined,
    // categories: ["14-7-23", "OCT", "NOV", "DEC", "JAN", "FEB"],
    categories : category,
    title : {
      text : "Date"
    } 
  },

  yaxis: {
    show: true,
    axisBorder: {
      show: true,
    },
    title : {
      text : "Sales($)"
    } 
  },
};
}



export function lineChartDataProductSold(data){
  return [
  {
    name: "Qty(s)",
    data: data,
    color: "#4318FF",
  },
];}

export function lineChartOptionsProductSold (category){
  return {
  legend: {
    show: true,
  },

  theme: {
    mode: "light",
  },
  chart: {
    type: "line",

    toolbar: {
      show: false,
    },
  },

  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },

  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
      backgroundColor: "#000000"
    },
    theme: 'dark',
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  grid: {
    show: true,
  },
  xaxis: {
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    type: "text",
    range: undefined,
    categories: category,
    title : {
      text : "Date"
    } 
  },

  yaxis: {
    show: true,
    // min : 0,
    axisBorder: {
      show: true,
    },
    title : {
      text : "Qty(s)"
    } 
  },
};
}
