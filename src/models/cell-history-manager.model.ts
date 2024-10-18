export class CellHistoryManager {
    private cellHistory: Map<Cell, HistoryEntry[]>;
    constructor() {
        this.cellHistory = new Map();
    }

    public addHistory(cell: Cell, history: HistoryEntry): void {
        // Add history for cell
    }

    public getHistory(cell: Cell): HistoryEntry[] {
        return this.cellHistory.get(cell);
    }

    public revert(c: Cell, value: HistoryEntry) : void
    {
        // Revert cell to previous value
    }
}