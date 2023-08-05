import React from "react";
import {
  MdOutlineCalendarToday,
} from "react-icons/md";

import Card from "components/card";
import {
  lineChartDataProductSold,
  lineChartOptionsProductSold
} from "./chartsConfig";
import LineChart from "components/charts/LineChart";

export default function ProductSold ({
  dateFrom,
  dateTo,
  productSoldGraph,
  graphColumn,
}
){

  return (
    <Card extra="!p-[20px] text-center">
      <div className="flex justify-between">
          <p className="mt-[20px] text-2xl font-bold text-navy-700 dark:text-white">
            Product Solds
          </p>
        <button className="!linear z-[1] disabled:true flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10">
          <MdOutlineCalendarToday className="h-6 w-6" />
          <p> </p>
          <p>{`${dateFrom?.split("-")?.join("/")} - ${dateTo?.split("-")?.join("/")}`}</p>
        </button>
      </div>

      <div className="flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden">
        <div className="h-full w-full">
          <LineChart
            options={lineChartOptionsProductSold(graphColumn)}
            series={lineChartDataProductSold(productSoldGraph)}
          />
        </div>
      </div>
    </Card>
  );
};

// export default ProductSold;
