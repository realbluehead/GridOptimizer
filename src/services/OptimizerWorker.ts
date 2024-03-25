import { GridOptions } from "../stores/GridContext";


function simulateGrid(rl: number,rh: number, grid: number, dateRange: number) {
    for(let i=0;i<dateRange;i++) {

    }
    const now = Date.now();
    return {id: now, rl, rh, grid, dateRange};
}

function runOptimization(options: GridOptions) {
    // TODO verify options
    const rl = options.range[0];
    const rh = options.range[1];
    const dateRange = options.dateRange;
    const diff = rh-rl;
    const possibleGrids = Array.from({ length: diff-1 }).map((_, i) => i+2);
    possibleGrids.forEach((gridConfig) => {
        const result = simulateGrid(rl, rh, gridConfig, dateRange);
        postMessage(result);
    })
}


onmessage = function (e) {
    const action = e.data.action;

    switch(action) {
        case 'start': runOptimization(e.data.options); break;
    }
};