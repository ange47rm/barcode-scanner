import React, { useState, useEffect } from "react";
import OrderComponent from '../components/OrderComponent';

const BarcodeScannerContainer = () => {

    const [orders, setOrders] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const ordersFromDb = [{
        objId: "001", orderNo: "ANG001", orderLines: [
            { objId: "101", scanned: false, partNo: "X001", description: "BTG Fanny Pack", price: 25 },
            { objId: "102", scanned: false, partNo: "X002", description: "Armanov Supporto Asta Inneschi", price: 8.8 },
            { objId: "103", scanned: false, partNo: "X003", description: "Armanov Maniglia Ergonomica Rotante", price: 39 },
        ]
    },
    {
        objId: "002", orderNo: "ANG002", orderLines: [
            { objId: "201", scanned: false, partNo: "Y001", description: "Helikon-Tex Competition Triple Carbine Insert", price: 19.5 },
            { objId: "202", scanned: false, partNo: "Y002", description: "Tasmanian Tiger QR SK Anfibia Plate Carrier", price: 139 },
        ]
    },
    {
        objId: "003", orderNo: "ANG003", orderLines: [
            { objId: "301", scanned: false, partNo: "Z001", description: "UTG Ultra Slim Handstop M-LOK", price: 15 },
            { objId: "302", scanned: false, partNo: "Z002", description: "BCM M-LOK Picatinny Rail Section Nylon Black 3in.", price: 23 },
            { objId: "303", scanned: false, partNo: "Z003", description: "Leatherman Raptor Emergency Medical Scissor", price: 29 },
            { objId: "304", scanned: false, partNo: "Z004", description: "Leatherman Surge Silver Multitool Premium Holster.", price: 85 },
        ]
    },]

    useEffect(() => {
        // API call to database to fetch orders
        setOrders(ordersFromDb);
        setLoaded(true);
    }, [])

    const orderNodes = orders.map(order => {
        return (
            <OrderComponent orderNo={order.orderNo} key={order.objId} orderLines={order.orderLines} />
        )
    })

    if (!loaded) {
        return (
            <>
                <h1>Orders</h1>
                <p>Loading orders...</p>
            </>)
    }

    return (
        <>
            <h1>Orders</h1>
            {orderNodes}
        </>
    )
}

export default BarcodeScannerContainer;