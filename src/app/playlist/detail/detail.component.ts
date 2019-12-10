import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'spotify-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  public playlistId: string;

  private destroy$: Subject<void> = new Subject();

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    console.log(this.route);
    this.subscribeToRouteIdChanges();
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private subscribeToRouteIdChanges(): void {
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: ParamMap) => {
        this.playlistId = params.get('id');
      });
  }
}
