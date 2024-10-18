export abstract class Graph {
  protected data: Cell[][];
  protected typeGraph: GraphType;
  protected title: string;
  protected selectedCells: Cell[];

  public render(): void {
    // render the graph
  }

  public getGraphType(): GraphType {
    return this.type;
  }

  public displayTitle(): void {
    // display the title
  }

  public abstract drawGraph(): void;


}
