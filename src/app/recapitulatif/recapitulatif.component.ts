import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recapitulatif',
  templateUrl: './recapitulatif.component.html',
  styleUrls: ['./recapitulatif.component.css']
})
export class RecapitulatifComponent {
  formData: any;

  constructor(private route: ActivatedRoute) {
    this.formData = this.route.snapshot.paramMap.get('data');
  }
}
