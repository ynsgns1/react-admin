import React, { } from 'react'
import { Chart, Tooltip, Legend, Point, Line, Interval } from "bizcharts";

function LineChart() {

    const data = [
        {
            time: "10:10",
            call: 4,
            waiting: 2,
            people: 2,
        },
        {
            time: "10:15",
            call: 2,
            waiting: 6,
            people: 3,
        },
        {
            time: "10:20",
            call: 13,
            waiting: 2,
            people: 5,
        },
        {
            time: "10:25",
            call: 9,
            waiting: 9,
            people: 1,
        },
        {
            time: "10:30",
            call: 5,
            waiting: 2,
            people: 3,
        },
        {
            time: "10:35",
            call: 8,
            waiting: 2,
            people: 1,
        },
        {
            time: "10:40",
            call: 13,
            waiting: 1,
            people: 2,
        },
    ];

    let chartIns = null;
    const scale = {
        people: {
            min: 0,
            tickCount: 4,
            alias: 'İşlem sayısı',
            type: 'linear-strict'
        },
        waiting: {
            min: 0,
            tickCount: 4,
            alias: 'Sisteme giriş sayısı',
            type: 'linear-strict'
        },
    };
    const colors = ["#6394f9", "#62daaa"];
    return (<Chart
        scale={scale}
        autoFit
        height={400}
        data={data}
        onGetG2Instance={(chart) => {
            chartIns = chart;
            chartIns.on("interval:mouseenter", (e) => {
                console.log(chartIns);
                chartIns.geometries.forEach((g) => {
                    if (g.type === "interval") {
                        (g.getShapes() || []).forEach((s) => {
                            s.set("origin_fill", s.get("attrs").fill);
                            s.attr("fill", "red");
                        });
                    }
                });
            });
            chartIns.on("interval:mouseleave", (e) => {
                console.log(chartIns);
                chartIns.geometries.forEach((g) => {
                    if (g.type === "interval") {
                        (g.getShapes() || []).forEach((s) => {
                            s.attr("fill", s.get("origin_fill"));
                        });
                    }
                });
            });
        }}
    >
        <Legend
            custom={true}
            allowAllCanceled={true}
            items={[
                {
                    value: "waiting",
                    name: "Sisteme giriş sayısı",
                    marker: {
                        symbol: "square",
                        style: { fill: colors[0], r: 5 },
                    },
                },
                {
                    value: "people",
                    name: "İşlem sayısı",
                    marker: {
                        symbol: "hyphen",
                        style: { stroke: colors[1], r: 5, lineWidth: 3 },
                    },
                },
            ]}
            onChange={(ev) => {
                const item = ev.item;
                const value = item.value;
                const checked = !item.unchecked;
                const geoms = chartIns.geometries;

                for (let i = 0; i < geoms.length; i++) {
                    const geom = geoms[i];

                    if (geom.getYScale().field === value) {
                        if (checked) {
                            geom.show();
                        } else {
                            geom.hide();
                        }
                    }
                }
            }}
        />
        <Tooltip shared />
        <Interval position="time*waiting" color={colors[0]} />
        <Line
            position="time*people"
            color={colors[1]}
            size={3}
            shape="smooth"
        />
        <Point
            position="time*people"
            color={colors[1]}
            size={3}
            shape="circle"
        />
    </Chart>)

}



export default LineChart;

