export class VersionHistory {
    private versionTitle: string;
    private versionId: number;
    private timestamp: Date;
    private cells: Cell[][];

    public trackChanges(oldCells: Cell[][]): void {
        // track changes
    }

    public getTime(): Date {
        return this.timestamp;
    }
}