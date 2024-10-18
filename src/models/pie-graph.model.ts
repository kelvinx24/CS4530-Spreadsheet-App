import { Graph } from "./graph.model";

export class PieGraph extends Graph {
    private maxSlices: number;
    private useActualData: boolean;
    private palette: string[];

    public constructor() {
        super();
        this.typeGraph = GraphType.PIE
    }

    public drawGraph(): void {
        // draw the graph
    }

}