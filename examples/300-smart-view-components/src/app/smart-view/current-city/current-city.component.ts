import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-current-city",
  templateUrl: "./current-city.component.html",
  styleUrls: ["./current-city.component.css"],
})
export class CurrentCityComponent implements OnInit {
  @Input() currentCity: string;

  @Input() cityPhoto: string;
  constructor() {}

  ngOnInit() {
    console.log(this.currentCity);
  }
}
