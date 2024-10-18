import { Graph } from "./graph.model";

export class LineGraph extends Graph {
    private xTitle: string;
    private yTitle: string;
    private lineDepth: number;

    public constructor() {
        super();
        this.typeGraph = GraphType.LINE;
    }

    public drawGraph(): void {
        // draw the graph
    }

}