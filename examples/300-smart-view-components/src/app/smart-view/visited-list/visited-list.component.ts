import { Component, Input } from "@angular/core";
import { City } from "app/shared/model/city.model";

@Component({
  selector: "app-visited-list",
  templateUrl: "./visited-list.component.html",
  styleUrls: ["./visited-list.component.css"],
})
export class VisitedListComponent {
  @Input() visitedCities: City[];
}
