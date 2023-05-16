interface OneConcern {
  summary: string;
  scheduleDate: string;
}

export interface ConcernsShape {

    [key:string]: {
      summary: string;
      scheduleDate: string;
    }

}
