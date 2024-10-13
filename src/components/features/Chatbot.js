import React, { useState } from "react";
import { Card } from 'primereact/card';
import { Panel } from 'primereact/panel';
import { Button } from 'primereact/button';

function Chatbot({ className, data }) {
    const [selectedExchange, setSelectedExchange] = useState(null);
    const [selectedStock, setSelectedStock] = useState(null);

    const redirectToHomePage = (page) => {
        window.location.href = page;
    };

    const onGoBack = () => {
        setSelectedStock(null)
    }

    const ChatbotTitle = () => (
        <div className="bg-primary font-bold border-round m-2 flex align-items-center" >
            <i className="pi pi-comments m-2"></i>
            LSEG Chatbot
        </div>
    );

    const renderStocks = () => {
        if (!selectedExchange) {
            return null;
        }
        const { topStocks } = selectedExchange;
        return topStocks.map((stock, index) => (
            <div key={`stock-${stock.code}-${index}`} style={{ textAlign: "center" }} >
                <Button
                    label={stock.stockName}
                    onClick={() => setSelectedStock(stock)}
                    className="m-2"
                />
                <hr />
            </div>
        ));
    };

    const renderExchanges = () => {
        return data.map((exchange, index) => (
            <div key={`exchange-${exchange.code}-${index}`} style={{ textAlign: "center" }}>
                <Button
                    label={exchange.stockExchange}
                    onClick={() => setSelectedExchange(exchange)}
                    className="m-2"
                />
                <hr />
            </div>
        ));
    };

    const headerTemplate = (options, text) => {
        const className = `${options.className} bg-blue-100 border-round m-2 flex`;
        return (
            <div className={className}>
                {text}
            </div>
        );
    };

    const chatbotContent = () => {
        return (
            <div>
                <p className="bg-blue-100 border-round m-2 flex align-items-center" style={{ minHeight: "50px" }}>
                    <i className="pi pi-comment m-2" />
                    <p>Hello! Welcome to LSEG. I'm here to help you.</p>
                </p>
                <Panel headerTemplate={(options) => headerTemplate(options, "Please select a Stock Exchanges.")}
                    className=" border-2 border-round-md" style={{ width: "500px" }}>
                    {renderExchanges()}
                </Panel>
                {selectedExchange && (
                    <div className="flex justify-content-end ">
                        <div className="flex align-items-center justify-content-center surface-300 border-round m-2">
                            <p className="m-2">
                                {selectedExchange.stockExchange}
                            </p>
                        </div>
                    </div>
                )}
                {selectedExchange && (<>
                    <Panel headerTemplate={(options) => headerTemplate(options, "Please select a stock.")}
                        className="mt-4 border-2 border-round-md" style={{ width: "500px" }} >
                        {renderStocks()}
                    </Panel>
                    {selectedStock && (<>
                        <div className="flex justify-content-end ">
                            <div class="flex align-items-center justify-content-center surface-300 border-round m-2">
                                <p className="m-2">
                                    {selectedStock.stockName}
                                </p>
                            </div>
                        </div>
                        <Panel headerTemplate={(options) => headerTemplate(options, `Stock Price of ${selectedStock.stockName} is ${selectedStock.price}. Please select an options.`)}
                            className="border-2 border-round-md" style={{ width: "500px" }} >
                            <div className="block text-center">
                                <Button label="Main meniu" link onClick={redirectToHomePage} />
                            </div>
                            <hr />
                            <div className="block text-center p-2">
                                <Button label="Go Back" link onClick={onGoBack} />
                            </div>

                        </Panel>
                    </>)}
                </>
                )}
            </div>
        );
    };

    return (
        <div className={`${className} card flex align-items-center justify-content-center`}>
            <Card title={ChatbotTitle} style={{ height: '70vh', width: '120vh', overflowY: 'auto' }}>
                <div className="ml-6">
                    {chatbotContent()}
                </div>
            </Card>
        </div>
    );
}

export default Chatbot;
