import ProductSold from "./ProductSold";
import ProductSales from "./ProductSales";
import Widget from "components/widget/Widget";
// import { IoIosDocument} from "react-icons/io";
import {BiCategory} from "react-icons/bi";
import {IoPersonOutline, IoDocumentTextOutline} from "react-icons/io5";
import { TbPackgeExport } from "react-icons/tb";
import { MdAttachMoney } from "react-icons/md";

import { columnsDataCheck} from "../variables/columnsData";
// import tableDataProduct from "../variables/tableDataProduct.json";
// import tableDataTransaction from "../variables/tableDataTransaction.json";
import CheckTable from "../components/ProductTable";
import AllTransactionTable from "../components/AllTransactionTable"
// import { useSelector } from "react-redux";


export default function ReportContent ({
    summary,
    bestProducts,
    details,
    productSoldGraph,
    aggregateSalesGraph,
    graphColumn,
    dateFrom,
    dateTo
}
){
    // const {bestProducts,summary,details,productSoldGraph,aggregateSalesGraph,
    //     graphColumn,dateFrom,dateTo } = useSelector(state => {
    //     return {
    //         bestProducts : state?.report?.bestProducts,
    //         summary : state?.report?.summary,
    //         details : state?.report?.details,
    //         productSoldGraph : state?.report?.productSoldGraph,
    //         aggregateSalesGraph : state?.report?.aggregateSalesGraph,
    //         graphColumn : state?.report?.graphColumn,
    //         dateFrom : state?.report?.dateFrom,
    //         dateTo: state?.report?.dateTo,
    //     }
    // })
    



    return(
        <div>
            <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-3">
                <Widget
                icon={<IoDocumentTextOutline className="h-6 w-6" />}
                title={"Report Type"}
                subtitle={"Sales"}
                />
                <Widget
                icon={<BiCategory className="h-7 w-7" />}
                title={"Report Content"}
                subtitle={"All"}
                />
                <Widget
                icon={<IoPersonOutline className="h-7 w-7" />}
                title={"Generate By"}
                subtitle={"CASHIERAPP Admin"}
                />
            </div>

            <div className="mb-8 mt-8 flex items-center justify-between px-[26px]">
                <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
                    Graphs and Summary
                </h4>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                <ProductSold
                    dateFrom={dateFrom}
                    dateTo={dateTo}
                    productSoldGraph={productSoldGraph}
                    graphColumn={graphColumn}
                />
                <ProductSales 
                    dateFrom={dateFrom}
                    dateTo={dateTo}
                    aggregateSalesGraph={aggregateSalesGraph}
                    graphColumn={graphColumn}
                />
            </div>
            <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
                {/* Check Table */}
                <div>
                    <CheckTable
                        columnsData={columnsDataCheck}
                        tableData={bestProducts}
                    />
                </div>
                {/* add-ons */}
                <div className="mt-3 grid grid-cols-1 gap-5">
                    <Widget
                    icon={<TbPackgeExport className="h-10 w-10" />}
                    title={"Total Product Solds"}
                    subtitle={`${summary[0]?.totalSales} pcs`}
                    />
                    <Widget
                    icon={<MdAttachMoney className="h-10 w-10" />}
                    title={"Total Aggregate Sales"}
                    subtitle={`$ ${summary[0]?.totalRevenue}`}
                    />
                </div>
            </div>

            <div className="mb-8 mt-8 flex items-center justify-between px-[26px]">
                <h4 className="text-2xl font-bold text-navy-700 dark:text-white">
                    Transaction Details
                </h4>
            </div>

            {/* all invoices */}
            <div className="mt-5 grid grid-cols-1 gap-5">
            <AllTransactionTable
                details={details}
            />
            </div>
        </div>
    )
}