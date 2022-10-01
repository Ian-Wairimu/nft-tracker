import React from "react";
import "./graph.css";
import {VictoryCandlestick, VictoryChart, VictoryAxis, VictoryTheme} from "victory";

export const Graph = () => {
    return (
        <div className="graph--con">
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={{ x: 20 }}
                scale={{ x: "time" }}
            >
                <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`}/>
                <VictoryAxis dependentAxis/>
                <VictoryCandlestick
                    candleColors={{ positive: "#5f5c5b", negative: "#c43a31" }}
                    // data={sampleDataDates}
                    data={[
                        {x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0},
                        {x: new Date(2016, 6, 2), open: 10, close: 15, high: 20, low: 5},
                        {x: new Date(2016, 6, 3), open: 15, close: 20, high: 22, low: 10},
                        {x: new Date(2016, 6, 4), open: 20, close: 10, high: 25, low: 7},
                        {x: new Date(2016, 6, 5), open: 10, close: 8, high: 15, low: 5},
                        {x: new Date(2016, 6, 6), open: 12, close: 3, high: 12, low: 8},
                        {x: new Date(2016, 6, 7), open: 14, close: 6, high: 5, low: 15},
                        {x: new Date(2016, 6, 8), open: 18, close: 7, high: 15, low: 5}
                    ]}
                />
            </VictoryChart>
        </div>
    )
}