import CheckTable from "./TransactionTable"
import { columnsDataTransaction} from "../variables/columnsData"
// import tableDataTransaction from "../variables/tableDataTransaction.json";

export default function AllTransactionTable ({
    details = []
}){
    // console.log("Details:", details);
        return details.map((transaction,index)=>{
            const tableData = transaction?.orders.map((item)=>{
                const result = {}
                result.name = item?.product?.name
                result.price = item?.product?.price
                result.quantity = item?.quantity
                result.totalPrice = item?.totalPrice
                // console.log(result)
                return result
            })
            return(
                <CheckTable
                columnsData={columnsDataTransaction}
                tableData={tableData}
                title={transaction?.invoice}
                />
                )
        })
    
}

