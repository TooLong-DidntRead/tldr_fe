export interface ConcernShape {
    response: {
      [key:string]: {
        ranking: number;
        impact: string;
        actionable: string;
      }
    }
}
