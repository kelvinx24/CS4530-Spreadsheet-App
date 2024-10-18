import { GraphType } from "../enums/graph-type.enum";
import { Graph } from "./graph.model";

export class BarGraph extends Graph {
    private xTitle: string;
    private yTitle: string;
    private isVertical: boolean;
    private color: string;

    public constructor() {
        super();
        this.typeGraph = GraphType.BAR;
    }

    public drawGraph(): void {
        // draw the graph
    }

}