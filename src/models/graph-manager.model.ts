import { Graph } from "./graph.model";

export class GraphManager {
    private graphs: Graph[];

    public deleteGraph(graph: Graph): void {
        this.graphs = this.graphs.filter(g => g !== graph);
    }

    public createGraph(g: GraphType): Graph {
        // creates a new graph and pushed to array
    }

}