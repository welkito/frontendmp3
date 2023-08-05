// import InputField from "components/fields/InputField"
import Button from "./components/button"
// import { useNavigate } from "react-router-dom"
import ReportContent from "./content/index"
import { useRef, useState,useEffect } from "react"
import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { postReport } from "store/slices/report/slices";


export default function Report (){
    const dispatch = useDispatch()
    
    const {bestProducts,summary,details,productSoldGraph,aggregateSalesGraph,
        graphColumn,dateFrom,dateTo } = useSelector(state => {
        return {
            bestProducts : state?.report?.bestProducts,
            summary : state?.report?.summary,
            details : state?.report?.details,
            productSoldGraph : state?.report?.productSoldGraph,
            aggregateSalesGraph : state?.report?.aggregateSalesGraph,
            graphColumn : state?.report?.graphColumn,
            dateFrom : state?.report?.dateFrom,
            dateTo: state?.report?.dateTo,
        }
    }) 
    const [hideContent, setHideContent] = useState("hidden")
    // 
    useEffect(() => {
        dispatch(postReport({dateTo : "2023-07-17", dateFrom : "2023-07-10"}))
    }, [])
    
    const dateToRef = useRef(null)
    const dateFromRef = useRef(null)
    
    const content = () => {
        if(summary.length > 0){
            console.log(summary)
            setHideContent("none")
    
        }
        const dateTore = dateToRef.current?.value
        const dateFromre = dateFromRef.current?.value
        console.log(dateTore,dateFromre)
        dispatch(postReport({dateTo : dateTore, dateFrom : dateFromre}))
    }

    return(
        <div className="flex w-full flex-col gap-5">
            <div className="w-full ml-3 flex h-fit flex-row gap-5">

                <div className="w-18 flex items-end justify-center mb-3">
                    <h2 className= "text-gray-800 dark:text-white">From : </h2>
                </div>
                {/* datefrom */}
                <div className={`w-36`}>
                    <label
                        className={`text-sm text-navy-700 dark:text-white ${
                        "ml-3 font-bold"
                        }`}
                    >
                    </label>
                    <input
                        type={"date"}
                        ref={dateFromRef}
                        className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
                        "border-gray-200 dark:!border-white/10 dark:text-white"
                        }`}
                    />
                </div>
                <div className="w-18 flex items-end justify-center mb-3">
                    <h2 className= "text-gray-800 dark:text-white">To : </h2>
                </div>
                {/* dateTo */}
                <div className={`w-36`}>
                    <label
                        className={`text-sm text-navy-700 dark:text-white ${
                        "ml-3 font-bold"
                        }`}
                    >
                    </label>
                    <input
                        type={"date"}
                        ref={dateToRef}
                        className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
                        "border-gray-200 dark:!border-white/10 dark:text-white"
                        }`}
                    />
                </div>
                <Button
                onClick={
                    content
                }
                text = "Generate Report"
                />

            </div>
            <div className={hideContent}>
                <ReportContent
                summary={summary}
                bestProducts ={bestProducts}
                details={details}
                productSoldGraph={productSoldGraph}
                aggregateSalesGraph={aggregateSalesGraph}
                graphColumn={graphColumn}
                dateFrom={dateFrom}
                dateTo={dateTo}
                />
            </div>
        </div>
    )
}