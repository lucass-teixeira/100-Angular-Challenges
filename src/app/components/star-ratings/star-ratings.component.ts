import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss']
})
export class StarRatingsComponent implements OnInit {
  @Input() public starIcon: any
  @Input() public halfStar: any
  @Input() public rating = 5
  constructor() { }

  public get fullStars(): number[] {
    var totalFullStars = Math.floor(this.rating)
    if(totalFullStars > 5)
    {
      totalFullStars = 5
    }
    return Array(totalFullStars).fill(0)
  }

  public get hasHalfStar(): boolean {
    const hasHalfStar = (this.rating - Math.floor(this.rating) >= 0.5) && this.rating !== 5
    return hasHalfStar;
  }

  public get emptyStars(): number[] {
    const highestRating = 5
    const totalEmptyStars = Math.floor(highestRating - this.rating)
    console.log(totalEmptyStars)
    return Array(totalEmptyStars).fill(0);
  }
  ngOnInit(): void {
  }

}
