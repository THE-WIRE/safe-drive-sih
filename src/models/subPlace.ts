import { Location } from "./location";

export class SubPlace {
  public verified:boolean = false;
  constructor(
    public uid: string,
    public title: string,
    public description: string,
    public location: Location,
    public imageUrl: string) {}
}
